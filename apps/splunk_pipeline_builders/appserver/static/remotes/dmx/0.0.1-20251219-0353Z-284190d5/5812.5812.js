/*! For license information please see 5812.5812.js.LICENSE.txt */
(self.webpackChunkdmx=self.webpackChunkdmx||[]).push([[5812],{34903:(e,t,n)=>{"use strict";n.d(t,{N:()=>d});var r=n(85959),a=n.n(r),l=n(26250),o=n.n(l);const i=l.css`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,c=o().h1`
    ${i}
`,s=o().h2`
    ${i}
`,u=o().h3`
    ${i}
`,d=({level:e,id:t,title:n})=>{const r=(e=>{switch(e){case 1:default:return c;case 2:return s;case 3:return u}})(e);return a().createElement(r,{id:t},n)}},43272:(e,t,n)=>{"use strict";n.d(t,{$n:()=>D,Nc:()=>A,K0:()=>W,fk:()=>U});var r=n(85959),a=n.n(r),l=n(26250),o=n.n(l),i=n(2543),c=n(53558),s=n(78967),u=n(72403),d=n.n(u),f=n(70181),p=n.n(f),m=n(28546),b=n.n(m),g=n(68870),v=n(40149),y=n.n(v);const h=l.keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 0%;
    }
`,C=o().span`
    animation: ${h} 2s linear infinite;
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
`;var O=n(34903),k=n(73592),x=n.n(k);const w=["clickAway","contentClick","escapeKey","offScreen","tabKey","toggleClick"],E=e=>{var{toggle:t,children:n,tooltip:l,contentRelationship:o,inline:i}=e,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["toggle","children","tooltip","contentRelationship","inline"]);const[s,u]=(0,r.useState)(),[d,f]=(0,r.useState)(!1),p=(0,r.useCallback)(()=>f(!0),[]),m=(0,r.useCallback)(()=>f(!1),[]),g=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=g.current;(null==e?void 0:e.ariaId)&&u(e.ariaId)},[]);const v=(0,r.useMemo)(()=>{const e="label"===o?"aria-labelledby":"aria-describedby";return a().cloneElement(t,{[e]:s})},[t,o,s]);return a().createElement(b(),{ref:g,contentRelationship:o,content:d?void 0:l,inline:i},a().createElement(x(),{toggle:v,onRequestClose:m,onRequestOpen:p,closeReasons:c.closeReasons?c.closeReasons:w},n))};var j=n(68296),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const $={light:c.kV,dark:c.Z5},P=(0,s.pick)($),I=o().div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${P};
    gap: ${g.default.spacingMedium};
    min-height: 42px;
    padding: 0 ${g.default.spacingMedium};
`,R=o().div`
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
`,N=o().div`
    margin: 0 0 0 ${g.default.spacingSmall};
`,T=o().div``,_=o().div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: ${g.default.spacingMedium};
`,M=e=>"role"===e||e.startsWith("aria-")||e.startsWith("data-"),A=e=>{var{breadcrumbs:t,onNavigate:n,title:r,hasUnsavedChanges:l,statusIcon:o,centeredContent:c,rightContent:s,className:u}=e,f=S(e,["breadcrumbs","onNavigate","title","hasUnsavedChanges","statusIcon","centeredContent","rightContent","className"]);const p=(0,i.reduce)(f,(e,t,n)=>(M(n)&&(e[n]=t),e),{});return a().createElement(I,Object.assign({className:u},p),a().createElement(O.N,{id:"document-toolbar",level:2,title:"Document Toolbar"}),a().createElement(R,null,t?a().createElement(a().Fragment,null,a().createElement(d(),null,[...t,{href:"#current",name:`${r}${l?" *":""}`}].map(({href:e,name:t})=>a().createElement(d().Item,{onClick:n,key:e,label:t,to:e}))),o&&a().createElement(N,null,o)):a().createElement(C,{width:"132px"})),a().createElement(T,null,c),a().createElement(_,null,s))},B=o()(p())`
    flex: 0 auto;
    margin-left: 0 !important;
`,D=(0,r.forwardRef)((e,t)=>a().createElement(B,Object.assign({appearance:"toggle",ref:t},e))),L=o().div`
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
`,q=o()(p())`
    svg {
        color: ${g.default.contentColorDefault};
        width: 20px;
        height: 20px;
    }
`,K=a().createElement(y(),null),U=e=>{var{label:t,labelTooltip:n,disabled:l,onClick:o,menuTooltip:c,menuTestId:s,children:u}=e,d=S(e,["label","labelTooltip","disabled","onClick","menuTooltip","menuTestId","children"]);const f=(0,i.reduce)(d,(e,t,n)=>(M(n)&&(e[n]=t),e),{}),m=(0,r.useMemo)(()=>{const e=a().createElement(p(),Object.assign({append:!0,disabled:l,onClick:o,"aria-label":t},f),t);return n?a().createElement(b(),{content:n},e):e},[l,t,n,o,f]),g=(0,r.useMemo)(()=>a().createElement(q,{"data-testid":s,prepend:!0,icon:K}),[s]);return a().createElement(L,{className:j.HN},m,a().createElement(E,{contentRelationship:"label",toggle:g,tooltip:c},u))},W=o()(D)`
    svg {
        color: ${g.default.contentColorDefault};
    }
`;o()(W)`
    border-color: transparent;

    &:hover {
        border-color: ${g.default.contentColorMuted} !important;
    }
`},72403:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{BreadcrumbsContext:()=>E,Item:()=>h,default:()=>S});const a=n(85959);var l=t.n(a);const o=n(5556);var i=t.n(o);const c=n(20259),s=n(26250);var u=t.n(s);const d=n(78967),f=n(59421);var p=t.n(f),m=u()(p()).withConfig({displayName:"ItemStyles__StyledLink",componentId:"sc-1ywtawf-0"})(["display:flex;align-items:center;gap:",";white-space:nowrap;color:",";&:where(:hover,:focus):not([disabled],[aria-disabled='true']){color:",";}"],d.variables.spacingXSmall,d.variables.contentColorDefault,d.variables.contentColorActive);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}var g=Object.freeze({allowDisabledLink:!0,disabled:!0,to:""}),v={elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,endAdornment:i().node,isCurrent:i().bool,label:i().string.isRequired,onClick:i().func,startAdornment:i().node,to:i().string.isRequired};function y(e){var t=e.enableCurrentPage,n=e.endAdornment,r=e.isCurrent,o=e.label,i=e.onClick,c=e.startAdornment,s=e.to,u=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["enableCurrentPage","endAdornment","isCurrent","label","onClick","startAdornment","to"]),d=(0,a.useContext)(E).onClick,f={to:s},p=(0,a.useCallback)(function(e){null==i||i(e,{label:o,to:s}),null==d||d(e,{label:o,to:s})},[i,d,o,s]);r&&(f["aria-current"]="page",t||Object.assign(f,g));var v=i||d?{onClick:p}:{};return l().createElement(m,b({"data-test":"item"},v,f,u),c&&c,o,n&&n)}y.propTypes=v;const h=y;var C=u().ol.withConfig({displayName:"BreadcrumbsStyles__StyledList",componentId:"sc-1maeyfk-0"})([""," flex-wrap:wrap;"],d.mixins.reset("flex")),O=u().li.withConfig({displayName:"BreadcrumbsStyles__StyledListItem",componentId:"sc-1maeyfk-1"})(["display:flex;min-width:max-content;a[aria-current]{font-weight:",";color:",";cursor:default;}"],d.variables.fontWeightSemiBold,d.variables.contentColorActive),k=u().span.withConfig({displayName:"BreadcrumbsStyles__StyledSeparator",componentId:"sc-1maeyfk-2"})(["cursor:default;padding:0 ",";color:",";"],d.variables.spacingSmall,d.variables.contentColorDefault);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(null,arguments)}var w={children:i().node.isRequired,elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,onClick:i().func},E=l().createContext({});function j(e){var t=e.children,n=e.elementRef,r=e.enableCurrentPage,o=e.onClick,i=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["children","elementRef","enableCurrentPage","onClick"]),s=a.Children.toArray(t).filter(a.isValidElement).map(function(e,n){var o=n===a.Children.count(t)-1,i=(0,a.cloneElement)(e,{isCurrent:o,enableCurrentPage:r});return l().createElement(O,{key:e.props.to},i,!o&&l().createElement(k,{"aria-hidden":"true"},"/"))}),u=(0,a.useMemo)(function(){return{onClick:o}},[o]);return l().createElement(E.Provider,{value:u},l().createElement("nav",x({"data-test":"breadcrumbs","aria-label":(0,c._)("Breadcrumbs"),ref:n},i),l().createElement(C,null,s)))}j.propTypes=w,j.Item=h;const S=j;e.exports=r})()},75869:(e,t,n)=>{"use strict";n.d(t,{UI:()=>i,YA:()=>s,gZ:()=>o,j0:()=>c});var r=n(26250),a=n.n(r),l=n(78967);const o=a().main`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0;
`,i=a().main`
    display: flex;
    flex-direction: column;
    margin: ${l.variables.spacingLarge};
    & > .maintenance-message-container {
        margin: -${l.variables.spacingLarge} -${l.variables.spacingLarge} 0;
    }
`,c=a().div`
    display: flex;
    flex: 1 0 0;
    min-height: 0;
`,s=a().div`
    flex: 1;
    justify-content: center;
    align-items: center;
`}}]);
//# sourceMappingURL=5812.5812.js.map?80b67b96499a6a2fc4a2