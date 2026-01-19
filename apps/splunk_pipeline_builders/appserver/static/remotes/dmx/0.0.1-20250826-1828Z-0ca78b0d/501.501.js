/*! For license information please see 501.501.js.LICENSE.txt */
(self.webpackChunkdmx=self.webpackChunkdmx||[]).push([[501],{62519:(e,t,r)=>{"use strict";r.d(t,{zx:()=>T,Nu:()=>N,aW:()=>M});var n=r(12650),a=r.n(n),o=r(97026),l=r.n(o),i=r(96486),c=r(39652),s=r(53745),u=r(35912),d=r.n(u),f=r(76416),p=r.n(f),m=r(35458),g=r.n(m),b=r(50669),y=r(45030),h=r.n(y);const v=o.keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 0%;
    }
`,C=l().span`
    animation: ${v} 2s linear infinite;
    background-size: 300% 100%;
    background-image: linear-gradient(
        90deg,
        ${b.default.interactiveColorBackground},
        ${b.default.interactiveColorBackgroundDisabled},
        ${b.default.interactiveColorBackground},
        ${b.default.interactiveColorBackgroundDisabled}
    );
    border-radius: ${b.default.spacingXSmall};
    color: ${b.default.contentColorDefault};
    display: block;
    height: 1.15rem;
    width: ${({width:e})=>e||"unset"};
`;var O=r(17046),k=r(96635),j=r.n(k);const x=["clickAway","contentClick","escapeKey","offScreen","tabKey","toggleClick"],w=e=>{var{toggle:t,children:r,tooltip:o,contentRelationship:l,inline:i}=e,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["toggle","children","tooltip","contentRelationship","inline"]);const[s,u]=(0,n.useState)(),[d,f]=(0,n.useState)(!1),p=(0,n.useCallback)(()=>f(!0),[]),m=(0,n.useCallback)(()=>f(!1),[]),b=(0,n.useRef)(null);(0,n.useEffect)(()=>{const e=b.current;(null==e?void 0:e.ariaId)&&u(e.ariaId)},[]);const y=(0,n.useMemo)(()=>{const e="label"===l?"aria-labelledby":"aria-describedby";return a().cloneElement(t,{[e]:s})},[t,l,s]);return a().createElement(g(),{ref:b,contentRelationship:l,content:d?void 0:o,inline:i},a().createElement(j(),{toggle:y,onRequestClose:m,onRequestOpen:p,closeReasons:c.closeReasons?c.closeReasons:x},r))};var E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};const S=l().div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${c.lU};
    border-bottom: 2px solid ${c.Sg};
    gap: ${b.default.spacingMedium};
    min-height: 42px;
    padding: 0 ${b.default.spacingMedium};
`,$=l().div`
    display: flex;
    flex: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    align-items: center;

    & > nav {
        a,
        span {
            color: ${b.default.contentColorDefault};
        }

        [data-unsaved='true']:last-child {
            color: ${b.default.contentColorMuted};
        }
    }
`,I=l().div`
    margin: 0 0 0 ${b.default.spacingSmall};
`,R=l().div``,P=l().div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: ${b.default.spacingMedium};
`,F=e=>"role"===e||e.startsWith("aria-")||e.startsWith("data-"),N=e=>{var{breadcrumbs:t,onNavigate:r,title:n,hasUnsavedChanges:o,statusIcon:l,centeredContent:c,rightContent:u,className:f}=e,p=E(e,["breadcrumbs","onNavigate","title","hasUnsavedChanges","statusIcon","centeredContent","rightContent","className"]);const m=(0,i.reduce)(p,(e,t,r)=>(F(r)&&(e[r]=t),e),{});return a().createElement(s.f6,{mode:"dark"},a().createElement(S,Object.assign({className:f},m),a().createElement(O.a,{id:"document-toolbar",level:2,title:"Document Toolbar"}),a().createElement($,null,t?a().createElement(a().Fragment,null,a().createElement(d(),null,[...t,{href:"#current",name:`${n}${o?" *":""}`}].map(({href:e,name:t})=>a().createElement(d().Item,{onClick:r,key:e,label:t,to:e}))),l&&a().createElement(I,null,l)):a().createElement(C,{width:"132px"})),a().createElement(R,null,c),a().createElement(P,null,u)))},A=l()(p())`
    flex: 0 auto;
    margin-left: 0 !important;
`,T=(0,n.forwardRef)((e,t)=>a().createElement(A,Object.assign({appearance:"toggle",ref:t},e))),U=l().div`
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
`,B=l()(p())`
    svg {
        color: ${b.default.contentColorDefault};
        width: 20px;
        height: 20px;
    }
`,_=a().createElement(h(),null),M=e=>{var{label:t,labelTooltip:r,disabled:o,onClick:l,menuTooltip:c,menuTestId:s,children:u}=e,d=E(e,["label","labelTooltip","disabled","onClick","menuTooltip","menuTestId","children"]);const f=(0,i.reduce)(d,(e,t,r)=>(F(r)&&(e[r]=t),e),{}),m=(0,n.useMemo)(()=>{const e=a().createElement(p(),Object.assign({append:!0,disabled:o,onClick:l,"aria-label":t},f),t);return r?a().createElement(g(),{content:r},e):e},[o,t,r,l,f]),b=(0,n.useMemo)(()=>a().createElement(B,{"data-testid":s,prepend:!0,icon:_}),[s]);return a().createElement(U,null,m,a().createElement(w,{contentRelationship:"label",toggle:b,tooltip:c},u))},D=l()(T)`
    svg {
        color: ${b.default.contentColorDefault};
    }
`;l()(D)`
    border-color: transparent;

    &:hover {
        border-color: ${b.default.contentColorMuted} !important;
    }
`},17046:(e,t,r)=>{"use strict";r.d(t,{a:()=>d});var n=r(12650),a=r.n(n),o=r(97026),l=r.n(o);const i=o.css`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,c=l().h1`
    ${i}
`,s=l().h2`
    ${i}
`,u=l().h3`
    ${i}
`,d=({level:e,id:t,title:r})=>{const n=(e=>{switch(e){case 1:default:return c;case 2:return s;case 3:return u}})(e);return a().createElement(n,{id:t},r)}},35912:(e,t,r)=>{(()=>{"use strict";var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{BreadcrumbsContext:()=>w,Item:()=>v,default:()=>S});const a=r(12650);var o=t.n(a);const l=r(45697);var i=t.n(l);const c=r(36219),s=r(97026);var u=t.n(s);const d=r(25947),f=r(66206);var p=t.n(f),m=u()(p()).withConfig({displayName:"ItemStyles__StyledLink",componentId:"sc-1ywtawf-0"})(["display:flex;align-items:center;gap:",";white-space:nowrap;color:",";&:where(:hover,:focus):not([disabled],[aria-disabled='true']){color:",";}"],d.variables.spacingXSmall,d.variables.contentColorDefault,d.variables.contentColorActive);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(null,arguments)}var b=Object.freeze({allowDisabledLink:!0,disabled:!0,to:""}),y={elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,endAdornment:i().node,isCurrent:i().bool,label:i().string.isRequired,onClick:i().func,startAdornment:i().node,to:i().string.isRequired};function h(e){var t=e.enableCurrentPage,r=e.endAdornment,n=e.isCurrent,l=e.label,i=e.onClick,c=e.startAdornment,s=e.to,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["enableCurrentPage","endAdornment","isCurrent","label","onClick","startAdornment","to"]),d=(0,a.useContext)(w).onClick,f={to:s},p=(0,a.useCallback)(function(e){null==i||i(e,{label:l,to:s}),null==d||d(e,{label:l,to:s})},[i,d,l,s]);n&&(f["aria-current"]="page",t||Object.assign(f,b));var y=i||d?{onClick:p}:{};return o().createElement(m,g({"data-test":"item"},y,f,u),c&&c,l,r&&r)}h.propTypes=y;const v=h;var C=u().ol.withConfig({displayName:"BreadcrumbsStyles__StyledList",componentId:"sc-1maeyfk-0"})([""," flex-wrap:wrap;"],d.mixins.reset("flex")),O=u().li.withConfig({displayName:"BreadcrumbsStyles__StyledListItem",componentId:"sc-1maeyfk-1"})(["display:flex;min-width:max-content;a[aria-current]{font-weight:",";color:",";cursor:default;}"],d.variables.fontWeightSemiBold,d.variables.contentColorActive),k=u().span.withConfig({displayName:"BreadcrumbsStyles__StyledSeparator",componentId:"sc-1maeyfk-2"})(["cursor:default;padding:0 ",";color:",";"],d.variables.spacingSmall,d.variables.contentColorDefault);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(null,arguments)}var x={children:i().node.isRequired,elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,onClick:i().func},w=o().createContext({});function E(e){var t=e.children,r=e.elementRef,n=e.enableCurrentPage,l=e.onClick,i=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["children","elementRef","enableCurrentPage","onClick"]),s=a.Children.toArray(t).filter(a.isValidElement).map(function(e,r){var l=r===a.Children.count(t)-1,i=(0,a.cloneElement)(e,{isCurrent:l,enableCurrentPage:n});return o().createElement(O,{key:e.props.to},i,!l&&o().createElement(k,{"aria-hidden":"true"},"/"))}),u=(0,a.useMemo)(function(){return{onClick:l}},[l]);return o().createElement(w.Provider,{value:u},o().createElement("nav",j({"data-test":"breadcrumbs","aria-label":(0,c._)("Breadcrumbs"),ref:r},i),o().createElement(C,null,s)))}E.propTypes=x,E.Item=v;const S=E;e.exports=n})()},44020:e=>{"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var a=o(r[0]);a!==r[0]&&(t[r[0]]=a)}r=n.exec(e)}t["%C2"]="�";for(var l=Object.keys(t),i=0;i<l.length;i++){var c=l[i];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},92806:e=>{"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var l=n[o],i=e[l];(a?-1!==t.indexOf(l):t(l,i,e))&&(r[l]=i)}return r}},17563:(e,t,r)=>{"use strict";const n=r(70610),a=r(44020),o=r(80500),l=r(92806);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function s(e,t){return t.decode?a(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort((e,t)=>Number(e)-Number(t)).map(t=>e[t]):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&s(r,e).includes(e.arrayFormatSeparator);r=o?s(r,e):r;const l=a||o?r.split(e.arrayFormatSeparator).map(t=>s(t,e)):null===r?r:s(r,e);n[t]=l};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,l]=o(t.decode?a.replace(/\+/g," "):a,"=");l=void 0===l?null:["comma","separator"].includes(t.arrayFormat)?l:s(l,t),r(s(e,t),l,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=u(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",a,"]"].join("")]:[...r,[c(t,e),"[",c(a,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),a={};for(const t of Object.keys(e))r(t)||(a[t]=e[t]);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{const a=e[r];return void 0===a?"":null===a?c(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):c(r,t)+"="+c(a,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:s(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=d(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),l=Object.assign(o,e.query);let i=t.stringify(l,r);i&&(i=`?${i}`);let s=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s=`#${c(e.fragmentIdentifier,r)}`),`${n}${i}${s}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:o,fragmentIdentifier:i}=t.parseUrl(e,n);return t.stringifyUrl({url:a,query:l(o,r),fragmentIdentifier:i},n)},t.exclude=(e,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,a,n)}},80500:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}}]);
//# sourceMappingURL=501.501.js.map?d7b66261176395e3573d