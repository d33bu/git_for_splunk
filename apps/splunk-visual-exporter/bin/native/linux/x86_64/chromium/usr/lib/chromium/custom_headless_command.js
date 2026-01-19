"use strict";
const DEFAULT_POLLING_TIMEOUT = 500;
const DEFAULT_RETRIES = 3;
const DEFAULT_RENDER_SCREENSHOT_DELAY = 0;
const RESIZE_POLLING_TIMEOUT = 50;
const VIZ_FULLY_RENDERED_TIMEOUT = 2e3;
const DEFAULT_TITLE_AND_INPUT = 160;
const MAX_WIDTH = 1440;
const MAX_HEIGHT = 960;
const MAX_PIXELS = MAX_WIDTH * (MAX_HEIGHT + DEFAULT_TITLE_AND_INPUT);
const DATA_LOADING_INDICATOR_SELECTOR = '[data-test="viz-item"] [data-test="status-icon-container"] circle';
const formatConsoleLog = (message, level = "debug") => {
  return `${message} custom_headless_command.js:${level.toUpperCase()}`;
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const checkIfProtocolReturnedError = (response, operation, throwError = true) => {
  if (response.error) {
    const errorString = `${operation} failed with error ${JSON.stringify(response.error)}`;
    console.error(formatConsoleLog(errorString, "error"));
    if (throwError) {
      throw new Error(errorString);
    }
  }
  return !!response.error;
};
const waitUntilCondition = async ({
  pollingFn,
  pollingTime = DEFAULT_POLLING_TIMEOUT,
  retries = DEFAULT_RETRIES
} = { pollingFn: () => Promise.resolve(true) }) => {
  for (let i = 0; i < retries; i++) {
    const result = await pollingFn();
    if (result) {
      return true;
    }
    await wait(pollingTime);
  }
  return false;
};
const resolveNode = async (dp, documentNodeId, selector) => {
  var _a;
  const nodeResult = await dp.DOM.querySelector({ nodeId: documentNodeId, selector });
  console.log(formatConsoleLog(`Node result for selector ${selector} is ${JSON.stringify(nodeResult)}}`));
  const usernameNodeId = (_a = nodeResult.result) == null ? void 0 : _a.nodeId;
  const resolvedNode = await dp.DOM.resolveNode({ nodeId: usernameNodeId });
  console.log(formatConsoleLog(`Resolved node result for selector ${selector} is ${JSON.stringify(resolvedNode)}`));
  return resolvedNode;
};
const hasDashboardRendered = (dp, documentNodeId, pollingTime = DEFAULT_POLLING_TIMEOUT, retries = DEFAULT_RETRIES) => {
  return waitUntilCondition({
    pollingFn: async () => {
      const resolvedNode = await resolveNode(dp, documentNodeId, `[data-finished-rendering='true']`);
      return !resolvedNode.error;
    },
    pollingTime,
    retries
  });
};
const boundingRectFunc = function() {
  const e = this.getBoundingClientRect();
  const t = this.ownerDocument.documentElement.getBoundingClientRect();
  const x = e.left - t.left;
  const y = e.top - t.top;
  return JSON.stringify({
    x,
    y,
    bottom: e.height + y,
    right: e.width + x,
    width: e.width,
    height: e.height,
    scale: 1
  });
};
const getBoundingRectAroundElement = async (dp, documentNodeId, selector) => {
  const element = await resolveNode(dp, documentNodeId, selector);
  if (checkIfProtocolReturnedError(element, `Resolving node with selector ${selector}`, false)) {
    return void 0;
  }
  const runtimeCallOnResult = await dp.Runtime.callFunctionOn({
    silent: true,
    objectId: element.result.object.objectId,
    functionDeclaration: boundingRectFunc.toString()
  });
  console.log(
    formatConsoleLog(`Bounding rectangle result around ${selector} is ${JSON.stringify(runtimeCallOnResult)}}`)
  );
  if (checkIfProtocolReturnedError(runtimeCallOnResult, `Getting bounding rectangle around ${selector}`, false)) {
    return void 0;
  }
  return JSON.parse(runtimeCallOnResult.result.result.value);
};
const getElementDimensions = async (dp, documentNodeId, selector) => {
  var _a, _b;
  const boundingRect = await getBoundingRectAroundElement(dp, documentNodeId, selector);
  const height = (_a = boundingRect == null ? void 0 : boundingRect.height) != null ? _a : 0;
  const width = (_b = boundingRect == null ? void 0 : boundingRect.width) != null ? _b : 0;
  if (width && height) {
    console.log(formatConsoleLog(`Element dimensions for ${selector} is width=${width}, height=${height}`));
  } else {
    console.log(
      formatConsoleLog(`Unable to find element dimensions for ${selector}, width=${width}, height=${height}`)
    );
  }
  return { width, height };
};
const getAllElementHeights = async (dp, documentNodeId, elements) => {
  const heightPromises = elements.map(async (element) => {
    const { height: elementHeight } = await getElementDimensions(dp, documentNodeId, element);
    return elementHeight;
  });
  const heights = await Promise.all(heightPromises);
  const totalHeight = heights.reduce((accHeight, currentHeight) => accHeight + currentHeight, 0);
  return totalHeight;
};
const getInputAndHeaderDimensions = async (dp, documentNodeId, isTabbedDefinition) => {
  const elements = ['[data-test="input-layout-container"]', '[data-test="dashboard-header"]'];
  if (isTabbedDefinition) {
    elements.push('[data-test="tabs-container"]');
  }
  const elementHeights = await getAllElementHeights(dp, documentNodeId, elements);
  return Math.ceil(elementHeights);
};
const getDimensionsFromDefinition = (definition) => {
  var _a, _b, _c, _d, _e;
  const layoutOptions = getIsTabbedDefinition(definition) ? (_a = getFirstTabLayout(definition)) == null ? void 0 : _a.options : (_c = (_b = definition.layout) == null ? void 0 : _b.options) != null ? _c : {};
  const width = (_d = layoutOptions == null ? void 0 : layoutOptions.width) != null ? _d : MAX_WIDTH;
  const height = (_e = layoutOptions == null ? void 0 : layoutOptions.height) != null ? _e : MAX_HEIGHT;
  return { width, height };
};
const getFirstTabLayout = (definition) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const firstTabId = ((_b = (_a = definition == null ? void 0 : definition.layout) == null ? void 0 : _a.tabs) == null ? void 0 : _b.items.length) && ((_e = (_d = (_c = definition == null ? void 0 : definition.layout) == null ? void 0 : _c.tabs) == null ? void 0 : _d.items[0]) == null ? void 0 : _e.layoutId);
  const firstTabLayout = firstTabId && firstTabId in ((_g = (_f = definition == null ? void 0 : definition.layout) == null ? void 0 : _f.layoutDefinitions) != null ? _g : {}) && ((_h = definition == null ? void 0 : definition.layout) == null ? void 0 : _h.layoutDefinitions[firstTabId]);
  return firstTabLayout || void 0;
};
const calculateRequiredScreenDimensions = async (dp, documentNodeId, definition, resizeDetectorAttribute, isTabbedDefinition) => {
  let { width, height } = getDimensionsFromDefinition(definition);
  let { width: canvasWidth, height: canvasHeight } = await getElementDimensions(
    dp,
    documentNodeId,
    `[data-test="${resizeDetectorAttribute}"]`
  );
  let titleInputHeight = await getInputAndHeaderDimensions(dp, documentNodeId, isTabbedDefinition);
  console.log(
    formatConsoleLog(
      `Width of dashboard=${width}, height of dashboard=${height}, title and input height=${titleInputHeight}`
    )
  );
  const totalPixels = width * height;
  const scaleFactor = Math.sqrt(totalPixels / MAX_PIXELS);
  const scaledWidth = Math.floor(width / scaleFactor);
  if (scaleFactor > 1 && width > scaledWidth) {
    width = scaledWidth;
    await resizeWindow(dp, documentNodeId, width, canvasHeight + titleInputHeight);
    await waitForCanvasToResize({
      dp,
      documentNodeId,
      width: canvasWidth,
      resizeDetectorAttribute
    });
    const resizedTitleInputHeight = await getInputAndHeaderDimensions(dp, documentNodeId, isTabbedDefinition);
    const { height: resizedCanvasHeight } = await getElementDimensions(
      dp,
      documentNodeId,
      `[data-test="${resizeDetectorAttribute}"]`
    );
    console.log(
      formatConsoleLog(
        `After resizing: Width of dashboard=${width}, height of canvas=${resizedCanvasHeight}, title and input height=${resizedTitleInputHeight}`
      )
    );
    canvasHeight = Math.ceil(resizedCanvasHeight);
    titleInputHeight = Math.max(titleInputHeight, resizedTitleInputHeight);
  }
  return { width, height: canvasHeight + titleInputHeight };
};
const waitForDashboardToResize = async ({
  dp,
  documentNodeId,
  width,
  height
}) => {
  let boundingRect;
  const hasResized = await waitUntilCondition({
    pollingFn: async () => {
      boundingRect = await getBoundingRectAroundElement(dp, documentNodeId, "#root");
      if (!boundingRect) {
        return false;
      }
      return boundingRect.width <= width && boundingRect.height <= height;
    },
    pollingTime: RESIZE_POLLING_TIMEOUT
  });
  if (!hasResized) {
    console.log(
      formatConsoleLog(
        `Bounding rectangle ${JSON.stringify(boundingRect)} is not within screen dimensions, returning`,
        "warning"
      )
    );
  }
  return boundingRect;
};
const waitForCanvasToResize = async ({
  dp,
  documentNodeId,
  width,
  resizeDetectorAttribute
}) => {
  const hasResized = await waitUntilCondition({
    pollingFn: async () => {
      const boundingRect = await getBoundingRectAroundElement(
        dp,
        documentNodeId,
        `[data-test="${resizeDetectorAttribute}"]`
      );
      if (!boundingRect) {
        return false;
      }
      return (boundingRect == null ? void 0 : boundingRect.width) < width;
    },
    pollingTime: RESIZE_POLLING_TIMEOUT
  });
  if (!hasResized) {
    console.log(formatConsoleLog("Canvas resize was not detected, screenshot may include whitespace", "warning"));
  }
};
const getDocumentNodeId = async (dp) => {
  const documentResult = await dp.DOM.getDocument({});
  console.log(formatConsoleLog(`Document result is ${JSON.stringify(documentResult)}}`));
  checkIfProtocolReturnedError(documentResult, "Getting root dashboard node");
  return documentResult.result.root.nodeId;
};
const renderStudioDashboard = async (dp, args) => {
  var _a, _b;
  const scriptKickOff = await dp.Runtime.evaluate({
    expression: `SplunkStudioDashboard.render(${JSON.stringify(args)})`,
    awaitPromise: true,
    returnByValue: true
  });
  if ((_a = scriptKickOff.error) != null ? _a : scriptKickOff.result.exceptionDetails) {
    const errorString = (_b = scriptKickOff.error) != null ? _b : JSON.stringify(scriptKickOff.result.exceptionDetails);
    const kickOffErrorMsg = `Rendering the studio dashboard with definition failed with error ${errorString}`;
    console.error(formatConsoleLog(kickOffErrorMsg, "error"));
    throw new Error(kickOffErrorMsg);
  }
  console.log(formatConsoleLog(JSON.stringify(scriptKickOff)));
};
const renderLegacyViz = async (dp, args) => {
  var _a, _b, _c;
  const scriptKickOff = await dp.Runtime.evaluate({
    expression: `SplunkLegacyExporter.render(${JSON.stringify(args)})`,
    awaitPromise: true,
    returnByValue: true
  });
  if ((_a = scriptKickOff.error) != null ? _a : scriptKickOff.result.exceptionDetails) {
    const errorString = (_b = scriptKickOff.error) != null ? _b : JSON.stringify(scriptKickOff.result.exceptionDetails);
    const kickOffErrorMsg = `Rendering the legacy viz with data failed with error ${errorString}`;
    console.error(formatConsoleLog(kickOffErrorMsg, "error"));
    throw new Error(kickOffErrorMsg);
  }
  const svg = (_c = scriptKickOff.result) == null ? void 0 : _c.result.value;
  console.log(formatConsoleLog(JSON.stringify(scriptKickOff)));
  return svg;
};
const containsVisualizationType = (definition, visualizationType) => {
  const { visualizations = {} } = definition;
  return Object.values(visualizations).some((visualization) => {
    return visualization.type === visualizationType;
  });
};
const waitForAllVizToRender = async (dp, documentNodeId, definition) => {
  if (containsVisualizationType(definition, "splunk.map")) {
    await wait(VIZ_FULLY_RENDERED_TIMEOUT);
  } else {
    const vizLoadResult = await waitUntilCondition({
      pollingFn: async () => {
        const { result: vizNotLoadedResult = { nodeIds: [] } } = await dp.DOM.querySelectorAll({
          nodeId: documentNodeId,
          selector: DATA_LOADING_INDICATOR_SELECTOR
        });
        const numberOfVizNotLoaded = vizNotLoadedResult.nodeIds.length;
        return !numberOfVizNotLoaded;
      },
      retries: Math.ceil(VIZ_FULLY_RENDERED_TIMEOUT / DEFAULT_POLLING_TIMEOUT)
    });
    if (!vizLoadResult) {
      console.log(
        formatConsoleLog(
          "Waiting for all visualization loading status indicators to disappear exceeded timeout. Proceeding anyway",
          "warning"
        )
      );
    }
  }
};
const resizeWindow = async (dp, documentNodeId, width, height) => {
  console.log(formatConsoleLog(`Setting width=${width} and height=${height}`));
  const deviceMetricsOverrideResult = await dp.Emulation.setDeviceMetricsOverride({
    // width and height need to be integers
    width: Math.ceil(width),
    height: Math.ceil(height),
    deviceScaleFactor: 1,
    mobile: false
  });
  checkIfProtocolReturnedError(
    deviceMetricsOverrideResult,
    `Failed while resizing to width=${width} and height=${height}`
  );
  console.log(formatConsoleLog(`Device metrics override result is ${JSON.stringify(deviceMetricsOverrideResult)}`));
  const boundingRect = await waitForDashboardToResize({
    dp,
    documentNodeId,
    width,
    height
  });
  return boundingRect;
};
const getIsTabbedDefinition = (definition) => "layout" in definition && "layoutDefinitions" in definition.layout;
async function screenshotRootDashboardNode(dp, args) {
  var _a, _b, _c, _d;
  const { definition, screenshotDelay = DEFAULT_RENDER_SCREENSHOT_DELAY } = args;
  const isTabbedDefinition = getIsTabbedDefinition(definition);
  const isGrid = isTabbedDefinition ? ((_a = getFirstTabLayout(definition)) == null ? void 0 : _a.type) === "grid" : ((_b = definition.layout) == null ? void 0 : _b.type) === "grid";
  const resizeDetectorAttribute = isGrid ? "grid-layout" : "absolute-layout";
  await renderStudioDashboard(dp, args);
  const documentNodeId = await getDocumentNodeId(dp);
  const hasRendered = await hasDashboardRendered(dp, documentNodeId);
  if (!hasRendered) {
    console.log(
      formatConsoleLog("Could not find finished-rendering attribute. Taking screenshot anyway", "warning")
    );
  }
  await waitForAllVizToRender(dp, documentNodeId, definition);
  await wait(screenshotDelay * 1e3);
  const { width, height } = await calculateRequiredScreenDimensions(
    dp,
    documentNodeId,
    definition,
    resizeDetectorAttribute,
    isTabbedDefinition
  );
  const boundingRect = await resizeWindow(dp, documentNodeId, width, height);
  if (boundingRect) {
    const { right: canvasHorizontalEnd, bottom: canvasVerticalEnd } = (_c = await getBoundingRectAroundElement(dp, documentNodeId, `[data-test="${resizeDetectorAttribute}"]`)) != null ? _c : {};
    boundingRect.height = Number(canvasVerticalEnd) > 0 ? Number(canvasVerticalEnd) : height;
    boundingRect.width = Number(canvasHorizontalEnd) > 0 ? Number(canvasHorizontalEnd) : boundingRect.width;
  }
  const format = "png";
  const screenshotParams = {
    format,
    clip: boundingRect
  };
  console.log(formatConsoleLog(`Taking screenshot with params ${JSON.stringify(screenshotParams)}`));
  const response = await dp.Page.captureScreenshot(screenshotParams);
  checkIfProtocolReturnedError(response, "Failed when taking screenshot");
  return `data:image/png;base64,${(_d = response.result) == null ? void 0 : _d.data}`;
}
async function generateSVGFromViz(dp, args) {
  const svg = await renderLegacyViz(dp, args);
  return svg;
}
async function executeCustomHeadlessCommand(dp, params) {
  const args = JSON.parse(atob(params.customHeadlessArgs));
  if (args.type === "legacy") {
    return generateSVGFromViz(dp, args);
  }
  return screenshotRootDashboardNode(dp, args);
}
executeCustomHeadlessCommand;
