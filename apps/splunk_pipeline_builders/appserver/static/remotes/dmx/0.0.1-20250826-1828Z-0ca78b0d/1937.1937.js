/*! For license information please see 1937.1937.js.LICENSE.txt */
(self.webpackChunkdmx=self.webpackChunkdmx||[]).push([[1937,1639],{62519:(e,t,n)=>{"use strict";n.d(t,{zx:()=>T,Nu:()=>M,aW:()=>A});var r=n(12650),l=n.n(r),a=n(97026),o=n.n(a),i=n(96486),c=n(39652),s=n(53745),u=n(35912),d=n.n(u),f=n(76416),p=n.n(f),m=n(35458),b=n.n(m),v=n(50669),g=n(45030),y=n.n(g);const h=a.keyframes`
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
        ${v.default.interactiveColorBackground},
        ${v.default.interactiveColorBackgroundDisabled},
        ${v.default.interactiveColorBackground},
        ${v.default.interactiveColorBackgroundDisabled}
    );
    border-radius: ${v.default.spacingXSmall};
    color: ${v.default.contentColorDefault};
    display: block;
    height: 1.15rem;
    width: ${({width:e})=>e||"unset"};
`;var O=n(17046),w=n(96635),x=n.n(w);const S=["clickAway","contentClick","escapeKey","offScreen","tabKey","toggleClick"],j=e=>{var{toggle:t,children:n,tooltip:a,contentRelationship:o,inline:i}=e,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(e,["toggle","children","tooltip","contentRelationship","inline"]);const[s,u]=(0,r.useState)(),[d,f]=(0,r.useState)(!1),p=(0,r.useCallback)(()=>f(!0),[]),m=(0,r.useCallback)(()=>f(!1),[]),v=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=v.current;(null==e?void 0:e.ariaId)&&u(e.ariaId)},[]);const g=(0,r.useMemo)(()=>{const e="label"===o?"aria-labelledby":"aria-describedby";return l().cloneElement(t,{[e]:s})},[t,o,s]);return l().createElement(b(),{ref:v,contentRelationship:o,content:d?void 0:a,inline:i},l().createElement(x(),{toggle:g,onRequestClose:m,onRequestOpen:p,closeReasons:c.closeReasons?c.closeReasons:S},n))};var E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const P=o().div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${c.lU};
    border-bottom: 2px solid ${c.Sg};
    gap: ${v.default.spacingMedium};
    min-height: 42px;
    padding: 0 ${v.default.spacingMedium};
`,k=o().div`
    display: flex;
    flex: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    align-items: center;

    & > nav {
        a,
        span {
            color: ${v.default.contentColorDefault};
        }

        [data-unsaved='true']:last-child {
            color: ${v.default.contentColorMuted};
        }
    }
`,L=o().div`
    margin: 0 0 0 ${v.default.spacingSmall};
`,R=o().div``,I=o().div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: ${v.default.spacingMedium};
`,_=e=>"role"===e||e.startsWith("aria-")||e.startsWith("data-"),M=e=>{var{breadcrumbs:t,onNavigate:n,title:r,hasUnsavedChanges:a,statusIcon:o,centeredContent:c,rightContent:u,className:f}=e,p=E(e,["breadcrumbs","onNavigate","title","hasUnsavedChanges","statusIcon","centeredContent","rightContent","className"]);const m=(0,i.reduce)(p,(e,t,n)=>(_(n)&&(e[n]=t),e),{});return l().createElement(s.f6,{mode:"dark"},l().createElement(P,Object.assign({className:f},m),l().createElement(O.a,{id:"document-toolbar",level:2,title:"Document Toolbar"}),l().createElement(k,null,t?l().createElement(l().Fragment,null,l().createElement(d(),null,[...t,{href:"#current",name:`${r}${a?" *":""}`}].map(({href:e,name:t})=>l().createElement(d().Item,{onClick:n,key:e,label:t,to:e}))),o&&l().createElement(L,null,o)):l().createElement(C,{width:"132px"})),l().createElement(R,null,c),l().createElement(I,null,u)))},$=o()(p())`
    flex: 0 auto;
    margin-left: 0 !important;
`,T=(0,r.forwardRef)((e,t)=>l().createElement($,Object.assign({appearance:"toggle",ref:t},e))),N=o().div`
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
`,D=o()(p())`
    svg {
        color: ${v.default.contentColorDefault};
        width: 20px;
        height: 20px;
    }
`,F=l().createElement(y(),null),A=e=>{var{label:t,labelTooltip:n,disabled:a,onClick:o,menuTooltip:c,menuTestId:s,children:u}=e,d=E(e,["label","labelTooltip","disabled","onClick","menuTooltip","menuTestId","children"]);const f=(0,i.reduce)(d,(e,t,n)=>(_(n)&&(e[n]=t),e),{}),m=(0,r.useMemo)(()=>{const e=l().createElement(p(),Object.assign({append:!0,disabled:a,onClick:o,"aria-label":t},f),t);return n?l().createElement(b(),{content:n},e):e},[a,t,n,o,f]),v=(0,r.useMemo)(()=>l().createElement(D,{"data-testid":s,prepend:!0,icon:F}),[s]);return l().createElement(N,null,m,l().createElement(j,{contentRelationship:"label",toggle:v,tooltip:c},u))},B=o()(T)`
    svg {
        color: ${v.default.contentColorDefault};
    }
`;o()(B)`
    border-color: transparent;

    &:hover {
        border-color: ${v.default.contentColorMuted} !important;
    }
`},17046:(e,t,n)=>{"use strict";n.d(t,{a:()=>d});var r=n(12650),l=n.n(r),a=n(97026),o=n.n(a);const i=a.css`
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
`,d=({level:e,id:t,title:n})=>{const r=(e=>{switch(e){case 1:default:return c;case 2:return s;case 3:return u}})(e);return l().createElement(r,{id:t},n)}},44989:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(97026),l=n.n(r),a=n(71126);const o=l().div`
    border-bottom: 1px solid ${a.U.sectionDivider};
`},96449:(e,t,n)=>{"use strict";n.d(t,{IQ:()=>c,Sx:()=>s,_W:()=>i,or:()=>o});var r=n(97026),l=n.n(r),a=n(25947);const o=l().main`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0;
`,i=l().main`
    display: flex;
    flex-direction: column;
    margin: ${a.variables.spacingLarge};
    & > .maintenance-message-container {
        margin: -${a.variables.spacingLarge} -${a.variables.spacingLarge} 0;
    }
`,c=l().div`
    display: flex;
    flex: 1 0 0;
    min-height: 0;
`,s=l().div`
    flex: 1;
    justify-content: center;
    align-items: center;
`},91860:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{default:()=>f});const l=n(12650);var a=t.n(l);const o=n(16817);var i=t.n(o);const c=n(17021);var s=new Map;s.set("outlined",function(){return a().createElement(a().Fragment,null,a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 7.31673V16.683L16.3811 11.9999L7 7.31673ZM5 6.50828C5 5.39362 6.17268 4.66835 7.16998 5.16622L18.1705 10.6579C19.2772 11.2103 19.2772 12.7895 18.1705 13.342L7.16997 18.8335C6.17267 19.3314 5 18.6061 5 17.4914V6.50828Z"}))}),s.set("filled",function(){return a().createElement(a().Fragment,null,a().createElement("path",{d:"M7.05572 5.16622C6.05843 4.66835 4.88574 5.39362 4.88574 6.50828V17.4914C4.88574 18.6061 6.05841 19.3314 7.05571 18.8335L18.0563 13.342C19.163 12.7895 19.163 11.2103 18.0563 10.6579L7.05572 5.16622Z"}))});var u=["default","outlined","filled"],d=function(e){return"default"===e||e&&!function(e){return u.indexOf(e)>=0}(e)?"outlined":e};const f=function(e){var t=e.children,n=e.variant,r=void 0===n?"default":n,o=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["children","variant"]),u=d(r),f="controlplay-".concat(u),p=(0,l.useContext)(c.IconContext),m=s.get(u);if(p&&m){var b=p.toRender;if((0,p.addIcon)(f,m()),!b)return null}return a().createElement(i(),o,t,p?a().createElement("use",{href:"#".concat(f)}):!!m&&m())};e.exports=r})()},60001:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{default:()=>f});const l=n(12650);var a=t.n(l);const o=n(16817);var i=t.n(o);const c=n(17021);var s=new Map;s.set("outlined",function(){return a().createElement(a().Fragment,null,a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.7105 4.29767C18.2127 2.79671 15.781 2.79622 14.2826 4.29658L3.35126 15.2421C3.12978 15.4639 3.00537 15.7645 3.00537 16.0779V19.4971C3.00537 20.3255 3.67694 20.9971 4.50537 20.9971H7.9244C8.23791 20.9971 8.53861 20.8726 8.76044 20.6511L19.7059 9.71982C21.204 8.22363 21.2061 5.7964 19.7105 4.29767ZM15.6978 5.70988C16.4147 4.99201 17.5781 4.99225 18.2948 5.7104C19.0104 6.42748 19.0094 7.58882 18.2926 8.30469L17.5306 9.06565L14.9368 6.47182L15.6978 5.70988ZM13.5235 7.88695L5.00537 16.4161V18.9971H7.58634L16.1155 10.4789L13.5235 7.88695Z"}))}),s.set("filled",function(){return a().createElement(a().Fragment,null,a().createElement("path",{d:"M14.2828 4.29703C15.781 2.79651 18.2127 2.79687 19.7105 4.29782C21.2061 5.79655 21.2039 8.2238 19.7056 9.71982L18.9363 10.4879L13.8379 5.38276L13.5178 5.06314L14.2828 4.29703Z"}),a().createElement("path",{d:"M3.4442 15.1493L12.1143 6.47093L13.5291 7.88447L13.5241 7.8895L17.5301 11.886L17.5264 11.8873L17.5296 11.8904L8.85336 20.5584C8.5721 20.8394 8.19078 20.9972 7.79321 20.9972H4.50537C3.67694 20.9972 3.00537 20.3257 3.00537 19.4972V16.2094C3.00537 15.8118 3.16321 15.4305 3.4442 15.1493Z"}))});var u=["default","outlined","filled"],d=function(e){return"default"===e||e&&!function(e){return u.indexOf(e)>=0}(e)?"outlined":e};const f=function(e){var t=e.children,n=e.variant,r=void 0===n?"default":n,o=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["children","variant"]),u=d(r),f="pencil-".concat(u),p=(0,l.useContext)(c.IconContext),m=s.get(u);if(p&&m){var b=p.toRender;if((0,p.addIcon)(f,m()),!b)return null}return a().createElement(i(),o,t,p?a().createElement("use",{href:"#".concat(f)}):!!m&&m())};e.exports=r})()},35912:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{BreadcrumbsContext:()=>j,Item:()=>h,default:()=>P});const l=n(12650);var a=t.n(l);const o=n(45697);var i=t.n(o);const c=n(36219),s=n(97026);var u=t.n(s);const d=n(25947),f=n(66206);var p=t.n(f),m=u()(p()).withConfig({displayName:"ItemStyles__StyledLink",componentId:"sc-1ywtawf-0"})(["display:flex;align-items:center;gap:",";white-space:nowrap;color:",";&:where(:hover,:focus):not([disabled],[aria-disabled='true']){color:",";}"],d.variables.spacingXSmall,d.variables.contentColorDefault,d.variables.contentColorActive);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}var v=Object.freeze({allowDisabledLink:!0,disabled:!0,to:""}),g={elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,endAdornment:i().node,isCurrent:i().bool,label:i().string.isRequired,onClick:i().func,startAdornment:i().node,to:i().string.isRequired};function y(e){var t=e.enableCurrentPage,n=e.endAdornment,r=e.isCurrent,o=e.label,i=e.onClick,c=e.startAdornment,s=e.to,u=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["enableCurrentPage","endAdornment","isCurrent","label","onClick","startAdornment","to"]),d=(0,l.useContext)(j).onClick,f={to:s},p=(0,l.useCallback)(function(e){null==i||i(e,{label:o,to:s}),null==d||d(e,{label:o,to:s})},[i,d,o,s]);r&&(f["aria-current"]="page",t||Object.assign(f,v));var g=i||d?{onClick:p}:{};return a().createElement(m,b({"data-test":"item"},g,f,u),c&&c,o,n&&n)}y.propTypes=g;const h=y;var C=u().ol.withConfig({displayName:"BreadcrumbsStyles__StyledList",componentId:"sc-1maeyfk-0"})([""," flex-wrap:wrap;"],d.mixins.reset("flex")),O=u().li.withConfig({displayName:"BreadcrumbsStyles__StyledListItem",componentId:"sc-1maeyfk-1"})(["display:flex;min-width:max-content;a[aria-current]{font-weight:",";color:",";cursor:default;}"],d.variables.fontWeightSemiBold,d.variables.contentColorActive),w=u().span.withConfig({displayName:"BreadcrumbsStyles__StyledSeparator",componentId:"sc-1maeyfk-2"})(["cursor:default;padding:0 ",";color:",";"],d.variables.spacingSmall,d.variables.contentColorDefault);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(null,arguments)}var S={children:i().node.isRequired,elementRef:i().oneOfType([i().func,i().object]),enableCurrentPage:i().bool,onClick:i().func},j=a().createContext({});function E(e){var t=e.children,n=e.elementRef,r=e.enableCurrentPage,o=e.onClick,i=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["children","elementRef","enableCurrentPage","onClick"]),s=l.Children.toArray(t).filter(l.isValidElement).map(function(e,n){var o=n===l.Children.count(t)-1,i=(0,l.cloneElement)(e,{isCurrent:o,enableCurrentPage:r});return a().createElement(O,{key:e.props.to},i,!o&&a().createElement(w,{"aria-hidden":"true"},"/"))}),u=(0,l.useMemo)(function(){return{onClick:o}},[o]);return a().createElement(j.Provider,{value:u},a().createElement("nav",x({"data-test":"breadcrumbs","aria-label":(0,c._)("Breadcrumbs"),ref:n},i),a().createElement(C,null,s)))}E.propTypes=S,E.Item=h;const P=E;e.exports=r})()},71569:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{Column:()=>C,Row:()=>E,default:()=>_});const l=n(12650);var a=t.n(l);const o=n(45697);var i=t.n(o);const c=n(1093);var s=t.n(c);const u=n(91747);var d=t.n(u);const f=n(97026);var p=t.n(f);const m=n(25947);var b=p().div.withConfig({displayName:"ColumnStyles__Styled",componentId:"sc-1pchz98-0"})(["",";"],m.mixins.reset("block"));function v(e,t){if(null==e)throw new Error(null!=t?t:"Unexpected undefined or null")}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(null,arguments)}var y={children:i().node,elementRef:i().oneOfType([i().func,i().object]),gutter:i().number,isFirstChild:i().bool,isLastChild:i().bool,span:i().number,style:i().object};function h(e){var t=e.children,n=e.elementRef,r=e.gutter,l=e.span,o=void 0===l?1:l,i=e.isFirstChild,c=e.isLastChild,s=e.style,u=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["children","elementRef","gutter","span","isFirstChild","isLastChild","style"]),f=r?"calc((100% - ".concat(11*r,"px) * ").concat(o/12," + (").concat(r,"px * ").concat(o-1,"))"):"".concat(100/12*o,"%");v(r);var p={marginLeft:i?void 0:r/2,marginRight:c?void 0:r/2,flex:"".concat(o," ").concat(o," auto"),width:f};return a().createElement(b,g({"data-test":"column",ref:n,style:d()({},s,p)},u),t)}h.propTypes=y;const C=h;var O=p().div.withConfig({displayName:"RowStyles__Styled",componentId:"sc-121ntds-0"})(["",";flex-flow:row nowrap;&[data-align-items='start']{align-items:flex-start;}&[data-align-items='end']{align-items:flex-end;}&[data-align-items='center']{align-items:center;}&[data-align-items='stretch']{align-items:stretch;}"],m.mixins.reset("flex")),w=p().div.withConfig({displayName:"RowStyles__StyledDivider",componentId:"sc-121ntds-1"})(["border-left:1px solid ",";flex:0 0 1;align-self:stretch;"],(0,m.pick)({prisma:m.variables.neutral200,enterprise:{light:m.variables.gray92,dark:m.variables.gray60}}));function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(null,arguments)}var S={alignItems:i().oneOf(["start","end","center","stretch"]),children:i().node,divider:i().bool,elementRef:i().oneOfType([i().func,i().object]),gutter:i().number,isFirstChild:i().bool,isLastChild:i().bool,style:i().object};function j(e){var t=e.alignItems,n=void 0===t?"stretch":t,r=e.children,o=e.divider,i=e.elementRef,c=e.gutter,s=e.isFirstChild,u=e.isLastChild,f=e.style,p=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["alignItems","children","divider","elementRef","gutter","isFirstChild","isLastChild","style"]),m=(0,l.useCallback)(function(e,t){return(0,l.cloneElement)(e,{gutter:c,isFirstChild:0===t,isLastChild:t===l.Children.count(r)-1})},[r,c]),b=(0,l.useCallback)(function(e,t,n,r){return e.push(t),o&&n<r.length-1&&e.push(a().createElement(w,{key:"".concat(n,"-divider")})),e},[o]);v(c);var g={marginTop:s?void 0:c/2,marginBottom:u?void 0:c/2},y=l.Children.toArray(r).filter(l.isValidElement).map(m).reduce(b,[]);return a().createElement(O,x({style:d()({},f,g),"data-align-items":n,"data-test":"row",ref:i},p),y)}j.propTypes=S;const E=j;var P=p().div.withConfig({displayName:"ColumnLayoutStyles__Styled",componentId:"sc-3eatxz-0"})(["",";flex-direction:column;"],m.mixins.reset("flex")),k=p().div.withConfig({displayName:"ColumnLayoutStyles__StyledDivider",componentId:"sc-3eatxz-1"})(["border-top:1px solid ",";height:0;"],(0,m.pick)({prisma:m.variables.neutral200,enterprise:{light:m.variables.gray92,dark:m.variables.gray60}}));function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(null,arguments)}var R={children:i().node,divider:i().oneOf(["none","vertical","horizontal"]),elementRef:i().oneOfType([i().func,i().object]),gutter:i().number};function I(e){var t=e.children,n=e.divider,r=void 0===n?"none":n,o=e.elementRef,i=e.gutter,c=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["children","divider","elementRef","gutter"]),u=s()(),d=u.family,f=u.density,p=(0,l.useCallback)(function(e,n){var a=0===n,o=n===l.Children.count(t)-1,c=i;return void 0===c&&("prisma"===d?"compact"===f?c=16:"comfortable"===f&&(c=24):"enterprise"===d&&(c=30)),(0,l.cloneElement)(e,{gutter:c,divider:"vertical"===r,isFirstChild:a,isLastChild:o})},[t,f,r,d,i]),m=(0,l.useCallback)(function(e,t,n,l){return e.push(t),"horizontal"===r&&n<l.length-1&&e.push(a().createElement(k,{key:"".concat(n,"-divider")})),e},[r]),b=l.Children.toArray(t).filter(l.isValidElement).map(p).reduce(m,[]);return a().createElement(P,L({"data-test":"column-layout",ref:o},c),b)}I.propTypes=R,I.Row=E,I.Column=C;const _=I;e.exports=r})()},91747:(e,t,n)=>{var r=n(5976),l=n(77813),a=n(16612),o=n(81704),i=Object.prototype,c=i.hasOwnProperty,s=r(function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&a(t[0],t[1],s)&&(r=1);++n<r;)for(var u=t[n],d=o(u),f=-1,p=d.length;++f<p;){var m=d[f],b=e[m];(void 0===b||l(b,i[m])&&!c.call(e,m))&&(e[m]=u[m])}return e});e.exports=s}}]);
//# sourceMappingURL=1937.1937.js.map?fbae4c655831d9fe6eb0