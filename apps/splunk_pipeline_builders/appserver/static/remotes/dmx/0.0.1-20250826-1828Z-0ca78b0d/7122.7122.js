/*! For license information please see 7122.7122.js.LICENSE.txt */
(self.webpackChunkdmx=self.webpackChunkdmx||[]).push([[7122,1639],{73981:(e,t,n)=>{"use strict";n.d(t,{Qh:()=>S});var r,a,o,l,i,s=n(30168),c=n(31177),u=n(25970),d=n.n(u),m=n(31456),f=n.n(m),p=n(25947),b=n(12650),g=n.n(b),v=n(97026),h=n.n(v),y=n(19395);const C=h()(f())(r||(r=(0,s.Z)(["\n    padding: ",";\n    margin: 0;\n    flex: 0 0 auto;\n    [data-test='content'] {\n        text-align: left;\n        padding: 0;\n        padding-left: ",";\n    }\n    button {\n        flex: 0 0 ",";\n    }\n"])),p.variables.spacingSmall,p.variables.spacingSmall,p.variables.spacingXLarge),w=({onRequestClose:e,maintenanceWindow:t,isNonBlockingMaintenance:n=!1,isInMaintenance:r=!1})=>{const{startDateTime:u,endDateTime:m}=t,f=d()(u).utc().format("dddd, MMMM Do YYYY"),p=d()(m).utc().format("dddd, MMMM Do YYYY"),b=n?r?(0,y.t)(a||(a=(0,s.Z)(["The "," service is currently undergoing maintenance, scheduled for ","-",". No disruptions to data ingestion and processing are expected. However, you might encounter errors that prevent you from completing configuration changes. Please contact your Splunk representative for more information."])),c.nz,f,p):(0,y.t)(o||(o=(0,s.Z)(["The "," service will undergo maintenance, scheduled for ","-",". No disruptions to data ingestion and processing are expected. However, you might encounter errors that prevent you from completing configuration changes. Please contact your Splunk representative for more information."])),c.nz,f,p):r?(0,y.t)(l||(l=(0,s.Z)(["The "," service is currently undergoing maintenance, scheduled for ","-",". No disruptions to data ingestion and processing are expected. However, you cannot make any configuration changes during this time. Please contact your Splunk representative for more information."])),c.nz,f,p):(0,y.t)(i||(i=(0,s.Z)(["The "," service will undergo maintenance, scheduled for ","-",". No disruptions to data ingestion and processing are expected. However, you will not be able to make any configuration changes during that time. Please contact your Splunk representative for more information."])),c.nz,f,p);return g().createElement(C,{"aria-label":"maintenance announcement",type:r?"warning":"info",onRequestClose:e,className:"maintenance-message-container",__self:void 0,__source:{fileName:"/builds/swp/ui-platform/projects/remotes/px-dmx/src/components/MaintenanceMessage/MaintenanceMessage.tsx",lineNumber:55,columnNumber:9}},b)};var x=n(41382),_=n(90380),N=n.n(_),E="/builds/swp/ui-platform/projects/remotes/px-dmx/src/components/MaintenanceMessage/DismissibleMessageForEP.tsx";const k=()=>{const{maintenanceWindow:e,shouldShowEarlyNotification:t,shouldShowMaintenanceBanner:n}=(0,x.sC)(),[r,a]=(0,b.useState)(!window.sessionStorage.getItem("isEPMaintenanceMessageClosed"));return t&&e?g().createElement(N(),{animation:"expandHeight",open:r,outerStyle:{flex:"0 0 auto"},animateOnMount:!1,outerClassName:"maintenance-message-container",__self:void 0,__source:{fileName:E,lineNumber:20,columnNumber:9}},g().createElement(w,{maintenanceWindow:e,onRequestClose:()=>{window.sessionStorage.setItem("isEPMaintenanceMessageClosed","true"),a(!1)},isNonBlockingMaintenance:n,__self:void 0,__source:{fileName:E,lineNumber:27,columnNumber:13}})):null},P=()=>{const{maintenanceWindow:e,shouldShowShortNotification:t,shouldShowMaintenancePage:n,shouldShowMaintenanceBanner:r}=(0,x.sC)();return(t||n||r)&&e?g().createElement(w,{maintenanceWindow:e,isInMaintenance:n||r,isNonBlockingMaintenance:r,__self:void 0,__source:{fileName:"/builds/swp/ui-platform/projects/remotes/px-dmx/src/components/MaintenanceMessage/UndismissibleMessageForEP.tsx",lineNumber:21,columnNumber:9}}):null};var M="/builds/swp/ui-platform/projects/remotes/px-dmx/src/components/MaintenanceMessage/MaintenanceMessageBox.tsx";const S=()=>g().createElement(g().Fragment,null,g().createElement(k,{__self:void 0,__source:{fileName:M,lineNumber:8,columnNumber:13}}),g().createElement(P,{__self:void 0,__source:{fileName:M,lineNumber:9,columnNumber:13}}))},39906:(e,t,n)=>{"use strict";n.d(t,{Y_:()=>P,MB:()=>S,V0:()=>O});var r,a,o,l,i=n(12650),s=n.n(i),c=n(30168),u=n(19395),d=n(76416),m=n.n(d),f=n(89013),p=n(11672),b=n(51989),g=n(621),v=n(75326),h=n(88714),y=n(28288),C=n(5868),w=n(28865),x="/builds/swp/ui-platform/projects/remotes/px-dmx/src/providers/PlatformConnection/MissingConnectionModal.tsx";const _=({open:e,runtime:t})=>{const n=(({isCloudProcessorSubscribed:e},t)=>t?t===f.W1||t===p.RUNTIME_PROFILE_IP?C.uH.IP:C.uH.EP:e?C.uH.IP:C.uH.EP)((0,g.CN)(),t),{tenantName:i}=(0,b.y)(),d=(0,w.D)();return s().createElement(h.oA,{"data-test":"missing-connection-modal",open:e,width:"500px",__self:void 0,__source:{fileName:x,lineNumber:50,columnNumber:9}},s().createElement(h.oA.Header,{title:(0,u.t)(r||(r=(0,c.Z)(["Welcome!"]))),__self:void 0,__source:{fileName:x,lineNumber:55,columnNumber:13}}),s().createElement(h.oA.Body,{__self:void 0,__source:{fileName:x,lineNumber:56,columnNumber:13}},s().createElement(y._R,{__self:void 0,__source:{fileName:x,lineNumber:57,columnNumber:17}},(0,u.t)(a||(a=(0,c.Z)(["You're just a few steps away from being able to create pipelines and process data using SPL2. Before you can get started, you must complete a setup process to connect this tenant to your Splunk Cloud Platform deployment. Refer to the documentation for instructions."]))))),s().createElement(h.oA.Footer,{__self:void 0,__source:{fileName:x,lineNumber:61,columnNumber:13}},s().createElement(m(),{appearance:"secondary","data-test":"back-to-home-button",label:(0,u.t)(o||(o=(0,c.Z)(["Back to Home"]))),to:"/"+i+"/"+v.y1,onClick:d,__self:void 0,__source:{fileName:x,lineNumber:62,columnNumber:17}}),s().createElement(C.WR,{appearance:"primary","data-test":"first-time-setup-guide-button",label:(0,u.t)(l||(l=(0,c.Z)(["First-time setup guide"]))),location:"home.setup",product:n,__self:void 0,__source:{fileName:x,lineNumber:69,columnNumber:17}})))};var N=n(52946),E=n(7131),k="/builds/swp/ui-platform/projects/remotes/px-dmx/src/providers/PlatformConnection/PlatformConnectionsProvider.tsx";const P=(0,i.createContext)(null);P.displayName="PlatformConnectionsContext";const M=P.Provider,S=({children:e,runtime:t})=>{const[n,r]=(0,i.useState)(!1),[a,o]=(0,E.I)(N.bG);return(0,i.useEffect)(()=>()=>{o()},[o]),(0,i.useEffect)(()=>{a.length||r(!0)},[a.length]),s().createElement(M,{value:a,__self:void 0,__source:{fileName:k,lineNumber:43,columnNumber:9}},e,s().createElement(_,{open:n,runtime:t,__self:void 0,__source:{fileName:k,lineNumber:45,columnNumber:13}}))},O=()=>{const e=(0,i.useContext)(P);if(!e)throw new Error("usePlatformConnections must be used within PlatformConnectionsProvider");return e}},99365:(e,t,n)=>{"use strict";n.d(t,{M:()=>r.MB});var r=n(39906)},53747:(e,t,n)=>{"use strict";n.d(t,{Wf:()=>i,uI:()=>s});var r=n(12650),a=n(96486),o=n(4480);n(17797);const l=1e4;function i(e,t=l,n){const a=(0,r.useRef)(null),o=(0,r.useCallback)(()=>{a.current&&(clearTimeout(a.current),null==n||n())},[]),i=(0,r.useCallback)(()=>{const n=async r=>{e();const o=setTimeout(n,t,r);return a.current=o,o};return new Promise(n)},[e,t]);return(0,r.useEffect)(()=>o,[o]),[i,o]}function s(e){const t=(0,r.useRef)(null),n=(0,o.$P)(e);switch((0,r.useEffect)(()=>{"hasValue"!==n.state||(0,a.isEqual)(n.contents,t.current)||(t.current=n.contents)},[n.contents,n.state]),n.state){case"hasValue":return n.contents;case"loading":case"hasError":if(null!=t.current)return t.current;throw n.contents;default:throw new Error("This line should never be reached.")}}},28865:(e,t,n)=>{"use strict";n.d(t,{D:()=>o});var r=n(12650),a=n(51989);const o=()=>{const{history:e}=(0,a.y)();return(0,r.useCallback)(t=>{if(e&&!t.metaKey&&t.target instanceof Element){const n=t.target.closest("a");if(n){const r=null==n?void 0:n.getAttribute("href");r&&(t.preventDefault(),e.push(r))}}},[e])}},62519:(e,t,n)=>{"use strict";n.d(t,{zx:()=>T,Nu:()=>R,aW:()=>W});var r=n(12650),a=n.n(r),o=n(97026),l=n.n(o),i=n(96486),s=n(39652),c=n(53745),u=n(35912),d=n.n(u),m=n(76416),f=n.n(m),p=n(35458),b=n.n(p),g=n(50669),v=n(45030),h=n.n(v);const y=o.keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 0%;
    }
`,C=l().span`
    animation: ${y} 2s linear infinite;
    background-size: 300% 100%;
    background-image: linear-gradient(
        90deg,
        ${g.default.interactiveColorBackground},
        ${g.default.interactiveColorBackgroundDisabled},
        ${g.default.interactiveColorBackground},
        ${g.default.interactiveColorBackgroundDisabled}
    );
    border-radius: ${g.default.spacingXSmall};
    color: ${g.default.contentColorDefault};
    display: block;
    height: 1.15rem;
    width: ${({width:e})=>e||"unset"};
`;var w=n(17046),x=n(96635),_=n.n(x);const N=["clickAway","contentClick","escapeKey","offScreen","tabKey","toggleClick"],E=e=>{var{toggle:t,children:n,tooltip:o,contentRelationship:l,inline:i}=e,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["toggle","children","tooltip","contentRelationship","inline"]);const[c,u]=(0,r.useState)(),[d,m]=(0,r.useState)(!1),f=(0,r.useCallback)(()=>m(!0),[]),p=(0,r.useCallback)(()=>m(!1),[]),g=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=g.current;(null==e?void 0:e.ariaId)&&u(e.ariaId)},[]);const v=(0,r.useMemo)(()=>{const e="label"===l?"aria-labelledby":"aria-describedby";return a().cloneElement(t,{[e]:c})},[t,l,c]);return a().createElement(b(),{ref:g,contentRelationship:l,content:d?void 0:o,inline:i},a().createElement(_(),{toggle:v,onRequestClose:p,onRequestOpen:f,closeReasons:s.closeReasons?s.closeReasons:N},n))};var k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const P=l().div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${s.lU};
    border-bottom: 2px solid ${s.Sg};
    gap: ${g.default.spacingMedium};
    min-height: 42px;
    padding: 0 ${g.default.spacingMedium};
`,M=l().div`
    display: flex;
    flex: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    align-items: center;

    & > nav {
        a,
        span {
            color: ${g.default.contentColorDefault};
        }

        [data-unsaved='true']:last-child {
            color: ${g.default.contentColorMuted};
        }
    }
`,S=l().div`
    margin: 0 0 0 ${g.default.spacingSmall};
`,O=l().div``,j=l().div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: ${g.default.spacingMedium};
`,I=e=>"role"===e||e.startsWith("aria-")||e.startsWith("data-"),R=e=>{var{breadcrumbs:t,onNavigate:n,title:r,hasUnsavedChanges:o,statusIcon:l,centeredContent:s,rightContent:u,className:m}=e,f=k(e,["breadcrumbs","onNavigate","title","hasUnsavedChanges","statusIcon","centeredContent","rightContent","className"]);const p=(0,i.reduce)(f,(e,t,n)=>(I(n)&&(e[n]=t),e),{});return a().createElement(c.f6,{mode:"dark"},a().createElement(P,Object.assign({className:m},p),a().createElement(w.a,{id:"document-toolbar",level:2,title:"Document Toolbar"}),a().createElement(M,null,t?a().createElement(a().Fragment,null,a().createElement(d(),null,[...t,{href:"#current",name:`${r}${o?" *":""}`}].map(({href:e,name:t})=>a().createElement(d().Item,{onClick:n,key:e,label:t,to:e}))),l&&a().createElement(S,null,l)):a().createElement(C,{width:"132px"})),a().createElement(O,null,s),a().createElement(j,null,u)))},$=l()(f())`
    flex: 0 auto;
    margin-left: 0 !important;
`,T=(0,r.forwardRef)((e,t)=>a().createElement($,Object.assign({appearance:"toggle",ref:t},e))),B=l().div`
    display: flex;

    & > :first-child {
        flex: 0 1 auto;
        min-width: 0;
        button {
            max-height: 28px;
        }
    }

    & > :last-child {
        flex: 0 0 auto;
    }
`,D=l()(f())`
    svg {
        color: ${g.default.contentColorDefault};
        width: 20px;
        height: 20px;
    }
`,A=a().createElement(h(),null),W=e=>{var{label:t,labelTooltip:n,disabled:o,onClick:l,menuTooltip:s,menuTestId:c,children:u}=e,d=k(e,["label","labelTooltip","disabled","onClick","menuTooltip","menuTestId","children"]);const m=(0,i.reduce)(d,(e,t,n)=>(I(n)&&(e[n]=t),e),{}),p=(0,r.useMemo)(()=>{const e=a().createElement(f(),Object.assign({append:!0,disabled:o,onClick:l,"aria-label":t},m),t);return n?a().createElement(b(),{content:n},e):e},[o,t,n,l,m]),g=(0,r.useMemo)(()=>a().createElement(D,{"data-testid":c,prepend:!0,icon:A}),[c]);return a().createElement(B,null,p,a().createElement(E,{contentRelationship:"label",toggle:g,tooltip:s},u))},H=l()(T)`
    svg {
        color: ${g.default.contentColorDefault};
    }
`;l()(H)`
    border-color: transparent;

    &:hover {
        border-color: ${g.default.contentColorMuted} !important;
    }
`},17046:(e,t,n)=>{"use strict";n.d(t,{a:()=>d});var r=n(12650),a=n.n(r),o=n(97026),l=n.n(o);const i=o.css`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,s=l().h1`
    ${i}
`,c=l().h2`
    ${i}
`,u=l().h3`
    ${i}
`,d=({level:e,id:t,title:n})=>{const r=(e=>{switch(e){case 1:default:return s;case 2:return c;case 3:return u}})(e);return a().createElement(r,{id:t},n)}},96449:(e,t,n)=>{"use strict";n.d(t,{IQ:()=>s,Sx:()=>c,_W:()=>i,or:()=>l});var r=n(97026),a=n.n(r),o=n(25947);const l=a().main`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0;
`,i=a().main`
    display: flex;
    flex-direction: column;
    margin: ${o.variables.spacingLarge};
    & > .maintenance-message-container {
        margin: -${o.variables.spacingLarge} -${o.variables.spacingLarge} 0;
    }
`,s=a().div`
    display: flex;
    flex: 1 0 0;
    min-height: 0;
`,c=a().div`
    flex: 1;
    justify-content: center;
    align-items: center;
`},35912:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{BreadcrumbsContext:()=>E,Item:()=>y,default:()=>P});const a=n(12650);var o=t.n(a);const l=n(45697);var i=t.n(l);const s=n(36219),c=n(97026);var u=t.n(c);const d=n(25947),m=n(66206);var f=t.n(m),p=u()(f()).withConfig({displayName:"ItemStyles__StyledLink",componentId:"sc-1ywtawf-0"})(["display:flex;align-items:center;gap:",";white-space:nowrap;color:",";&:where(:hover,:focus):not([disabled],[aria-disabled='true']){color:",";}"],d.variables.spacingXSmall,d.variables.contentColorDefault,d.variables.contentColorActive);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}var g=Object.freeze({allowDisabledLink:!0,disabled:!0,to:""}),v={elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,endAdornment:i().node,isCurrent:i().bool,label:i().string.isRequired,onClick:i().func,startAdornment:i().node,to:i().string.isRequired};function h(e){var t=e.enableCurrentPage,n=e.endAdornment,r=e.isCurrent,l=e.label,i=e.onClick,s=e.startAdornment,c=e.to,u=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["enableCurrentPage","endAdornment","isCurrent","label","onClick","startAdornment","to"]),d=(0,a.useContext)(E).onClick,m={to:c},f=(0,a.useCallback)(function(e){null==i||i(e,{label:l,to:c}),null==d||d(e,{label:l,to:c})},[i,d,l,c]);r&&(m["aria-current"]="page",t||Object.assign(m,g));var v=i||d?{onClick:f}:{};return o().createElement(p,b({"data-test":"item"},v,m,u),s&&s,l,n&&n)}h.propTypes=v;const y=h;var C=u().ol.withConfig({displayName:"BreadcrumbsStyles__StyledList",componentId:"sc-1maeyfk-0"})([""," flex-wrap:wrap;"],d.mixins.reset("flex")),w=u().li.withConfig({displayName:"BreadcrumbsStyles__StyledListItem",componentId:"sc-1maeyfk-1"})(["display:flex;min-width:max-content;a[aria-current]{font-weight:",";color:",";cursor:default;}"],d.variables.fontWeightSemiBold,d.variables.contentColorActive),x=u().span.withConfig({displayName:"BreadcrumbsStyles__StyledSeparator",componentId:"sc-1maeyfk-2"})(["cursor:default;padding:0 ",";color:",";"],d.variables.spacingSmall,d.variables.contentColorDefault);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(null,arguments)}var N={children:i().node.isRequired,elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,onClick:i().func},E=o().createContext({});function k(e){var t=e.children,n=e.elementRef,r=e.enableCurrentPage,l=e.onClick,i=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["children","elementRef","enableCurrentPage","onClick"]),c=a.Children.toArray(t).filter(a.isValidElement).map(function(e,n){var l=n===a.Children.count(t)-1,i=(0,a.cloneElement)(e,{isCurrent:l,enableCurrentPage:r});return o().createElement(w,{key:e.props.to},i,!l&&o().createElement(x,{"aria-hidden":"true"},"/"))}),u=(0,a.useMemo)(function(){return{onClick:l}},[l]);return o().createElement(E.Provider,{value:u},o().createElement("nav",_({"data-test":"breadcrumbs","aria-label":(0,s._)("Breadcrumbs"),ref:n},i),o().createElement(C,null,c)))}k.propTypes=N,k.Item=y;const P=k;e.exports=r})()}}]);
//# sourceMappingURL=7122.7122.js.map?4b544514b2d4d04e7925