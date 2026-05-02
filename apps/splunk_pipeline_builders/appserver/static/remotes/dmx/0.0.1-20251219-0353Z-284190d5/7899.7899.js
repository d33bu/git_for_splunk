/*! For license information please see 7899.7899.js.LICENSE.txt */
(self.webpackChunkdmx=self.webpackChunkdmx||[]).push([[7899],{1613:(e,t,n)=>{"use strict";n.d(t,{i:()=>C});var l,r,a,o,i=n(57528),s=n(85959),c=n.n(s),u=n(53209),m=n(70181),d=n.n(m),f=n(12670),p=n(39400),b=n(34440),v=n(2668),_=n(99430),g=n(20787),y=n(88924),E=n(50184),h=n(98962),N="/builds/swp/ui-platform/projects/remotes/px-dmx/src/providers/PlatformConnection/MissingConnectionModal.tsx";const C=({open:e,runtime:t})=>{const n=(({isCloudProcessorSubscribed:e},t)=>t?t===f.hM||t===p.RUNTIME_PROFILE_IP?E.OI.IP:E.OI.EP:e?E.OI.IP:E.OI.EP)((0,v.Pm)(),t),{tenantName:s}=(0,b.p)(),m=(0,h.b)();return c().createElement(g.vq,{"data-test":"missing-connection-modal",open:e,width:"500px",__self:void 0,__source:{fileName:N,lineNumber:50,columnNumber:9}},c().createElement(g.vq.Header,{title:(0,u.t)(l||(l=(0,i.A)(["Welcome!"]))),__self:void 0,__source:{fileName:N,lineNumber:55,columnNumber:13}}),c().createElement(g.vq.Body,{__self:void 0,__source:{fileName:N,lineNumber:56,columnNumber:13}},c().createElement(y.wW,{__self:void 0,__source:{fileName:N,lineNumber:57,columnNumber:17}},(0,u.t)(r||(r=(0,i.A)(["You're just a few steps away from being able to create pipelines and process data using SPL2. Before you can get started, you must complete a setup process to connect this tenant to your Splunk Cloud Platform deployment. Refer to the documentation for instructions."]))))),c().createElement(g.vq.Footer,{__self:void 0,__source:{fileName:N,lineNumber:61,columnNumber:13}},c().createElement(d(),{appearance:"secondary","data-test":"back-to-home-button",label:(0,u.t)(a||(a=(0,i.A)(["Back to Home"]))),to:"/"+s+"/"+_.tB,onClick:m,__self:void 0,__source:{fileName:N,lineNumber:62,columnNumber:17}}),c().createElement(E.dG,{appearance:"primary","data-test":"first-time-setup-guide-button",label:(0,u.t)(o||(o=(0,i.A)(["First-time setup guide"]))),location:"home.setup",product:n,__self:void 0,__source:{fileName:N,lineNumber:69,columnNumber:17}})))}},9736:(e,t,n)=>{(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},l={};t.r(l),t.d(l,{default:()=>d});const r=n(85959);var a=t.n(r);const o=n(24509);var i=t.n(o);const s=n(62283);var c=new Map;c.set("outlined",function(){return a().createElement(a().Fragment,null,a().createElement("path",{d:"M13.0059 8.0022H7.99365V10.0022H13.0059C13.5582 10.0022 14.0059 9.55448 14.0059 9.0022C14.0059 8.44991 13.5582 8.0022 13.0059 8.0022Z"}),a().createElement("path",{d:"M7.99365 12.0022H11.0067C11.559 12.0022 12.0067 12.4499 12.0067 13.0022C12.0067 13.5545 11.559 14.0022 11.0067 14.0022H7.99365V12.0022Z"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9073 17.32C14.5523 18.3739 12.8495 19.0015 11 19.0015C6.58172 19.0015 3 15.4197 3 11.0015C3 6.58319 6.58172 3.00146 11 3.00146C15.4183 3.00146 19 6.58319 19 11.0015C19 12.8494 18.3734 14.551 17.3211 15.9055L20.7076 19.2919C21.0981 19.6824 21.0981 20.3156 20.7076 20.7061C20.317 21.0966 19.6839 21.0966 19.2933 20.7061L15.9073 17.32ZM17 11.0015C17 14.3152 14.3137 17.0015 11 17.0015C7.68629 17.0015 5 14.3152 5 11.0015C5 7.68776 7.68629 5.00146 11 5.00146C14.3137 5.00146 17 7.68776 17 11.0015Z"}))}),c.set("filled",function(){return a().createElement(a().Fragment,null,a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 19.0015C12.8495 19.0015 14.5524 18.3739 15.9073 17.32L19.2935 20.7062C19.684 21.0967 20.3172 21.0967 20.7077 20.7062C21.0982 20.3157 21.0982 19.6825 20.7077 19.292L17.3211 15.9054C18.3734 14.551 19 12.8494 19 11.0015C19 6.58319 15.4183 3.00146 11 3.00146C6.58172 3.00146 3 6.58319 3 11.0015C3 15.4197 6.58172 19.0015 11 19.0015ZM7.99358 8.0022H13.0059C13.5581 8.0022 14.0059 8.44991 14.0059 9.0022C14.0059 9.55448 13.5581 10.0022 13.0059 10.0022H7.99358V8.0022ZM7.99358 12.0022H11.0066C11.5589 12.0022 12.0066 12.4499 12.0066 13.0022C12.0066 13.5545 11.5589 14.0022 11.0066 14.0022H7.99358V12.0022Z"}))});var u=["default","outlined","filled"],m=function(e){return"default"===e||e&&!function(e){return u.indexOf(e)>=0}(e)?"outlined":e};const d=function(e){var t=e.children,n=e.variant,l=void 0===n?"default":n,o=function(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(t.includes(l))continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["children","variant"]),u=m(l),d="magnifiertext-".concat(u),f=(0,r.useContext)(s.IconContext),p=c.get(u);if(f&&p){var b=f.toRender;if((0,f.addIcon)(d,p()),!b)return null}return a().createElement(i(),o,t,f?a().createElement("use",{href:"#".concat(d)}):!!p&&p())};e.exports=l})()},38271:(e,t,n)=>{"use strict";n.d(t,{CP:()=>c,EQ:()=>m,eK:()=>d});var l=n(85959),r=n.n(l),a=n(1613),o=n(74929),i=n(95871),s="/builds/swp/ui-platform/projects/remotes/px-dmx/src/providers/PlatformConnection/PlatformConnectionsProvider.tsx";const c=(0,l.createContext)(null);c.displayName="PlatformConnectionsContext";const u=c.Provider,m=({children:e,runtime:t})=>{const[n,c]=(0,l.useState)(!1),[m,d]=(0,i.C)(o.OS);return(0,l.useEffect)(()=>()=>{d()},[d]),(0,l.useEffect)(()=>{m.length||c(!0)},[m.length]),r().createElement(u,{value:m,__self:void 0,__source:{fileName:s,lineNumber:43,columnNumber:9}},e,r().createElement(a.i,{open:n,runtime:t,__self:void 0,__source:{fileName:s,lineNumber:45,columnNumber:13}}))},d=()=>{const e=(0,l.useContext)(c);if(!e)throw new Error("usePlatformConnections must be used within PlatformConnectionsProvider");return e}},41133:(e,t,n)=>{"use strict";n.d(t,{t:()=>O});var l=n(85959),r=n.n(l),a=n(53209),o=n(26250),i=n.n(o),s=n(68870),c=n(70181),u=n.n(c),m=n(73592),d=n.n(m),f=n(54345),p=n.n(f),b=n(34845),v=n.n(b),_=n(68296),g=n(38485),y=n(23465),E=n(70214);const h=i().div`
    max-width: 240px;
    overflow-wrap: anywhere;
`,N=i().div`
    display: flex;
    gap: ${s.default.spacingMedium};
    justify-content: stretch;

    ${({$hasButtons:e})=>e&&o.css`
            padding: ${s.default.spacingLarge};
        `}
    > * {
        flex: 1 1 auto;
    }

    [data-test='dropdown'] {
        flex-grow: 0;
    }
`,C=i()(y.$)`
    width: 100%;
`,x=i()(u())`
    padding: ${s.default.spacingXSmall};
    flex-shrink: 0;
    span {
        padding-right: unset;
    }

    svg {
        height: 20px;
        width: 20px;
    }
`,w=({children:e})=>{const t=l.Children.toArray(e).length>0;return r().createElement(r().Fragment,null,r().createElement(N,{$hasButtons:t,"data-test":"buttons-container"},e),t&&r().createElement(E.E,null))},P=r().createElement(x,{appearance:"subtle",icon:r().createElement(v(),{inline:!1})},r().createElement(p(),null,a.t`Actions`)),k=({children:e})=>r().createElement(d(),{toggle:P},e),M=({action:e,entity:t})=>{const n=(0,l.useMemo)(()=>e.tooltip?r().createElement(h,null,e.tooltip):null,[e]),a=(0,l.useCallback)(n=>e.handler(n,t),[e,t]),o=r().createElement(C,{appearance:"default","data-test":`action-${e.key}`,className:_.HN,key:e.key,onClick:a,disabled:e.disabled,label:e.label});return e.tooltip?r().createElement(g.FS,{key:e.key,inline:!1,content:n,defaultPlacement:"below"},o):o},O=({actions:e,maximumNumberOfButtons:t=2,entity:n})=>{const a=(0,l.useMemo)(()=>null==e?void 0:e.slice(0,t),[e,t]),o=(0,l.useMemo)(()=>null==e?void 0:e.slice(t),[e,t]);return r().createElement(w,null,null==a?void 0:a.map(e=>r().createElement(M,{key:e.key,action:e,entity:n})),(null==o?void 0:o.length)?r().createElement(k,null,r().createElement(g.$6,{actions:o,entity:n})):null)}},52221:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Destinations:()=>p,default:()=>b});var l,r=n(57528),a=n(37768),o=n(43416),i=n(86210),s=n(75869),c=n(30601),u=n(85959),m=n.n(u),d=n(53209),f="/builds/swp/ui-platform/projects/remotes/px-dmx/src/views/DestinationView/Destinations.tsx";const p=({routeMatch:e})=>{const{queryParams:{selected:t}}=e;return(0,i.H)((0,d.t)(l||(l=(0,r.A)(["Destinations"])))),m().createElement(s.gZ,{"data-test":"destinations",__self:void 0,__source:{fileName:f,lineNumber:20,columnNumber:9}},m().createElement(a.Qn,{__self:void 0,__source:{fileName:f,lineNumber:21,columnNumber:13}}),m().createElement(u.Suspense,{fallback:m().createElement(c.MH,{__self:void 0,__source:{fileName:f,lineNumber:22,columnNumber:33}}),__self:void 0,__source:{fileName:f,lineNumber:22,columnNumber:13}},m().createElement(o.E,{__self:void 0,__source:{fileName:f,lineNumber:23,columnNumber:17}},m().createElement(c.ay,{selectedDatasetId:t,__self:void 0,__source:{fileName:f,lineNumber:24,columnNumber:21}}))))},b=p},75869:(e,t,n)=>{"use strict";n.d(t,{UI:()=>i,YA:()=>c,gZ:()=>o,j0:()=>s});var l=n(26250),r=n.n(l),a=n(78967);const o=r().main`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0;
`,i=r().main`
    display: flex;
    flex-direction: column;
    margin: ${a.variables.spacingLarge};
    & > .maintenance-message-container {
        margin: -${a.variables.spacingLarge} -${a.variables.spacingLarge} 0;
    }
`,s=r().div`
    display: flex;
    flex: 1 0 0;
    min-height: 0;
`,c=r().div`
    flex: 1;
    justify-content: center;
    align-items: center;
`},86210:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var l=n(85959),r=n(34440);const a=e=>{const{updatePageTitle:t}=(0,r.p)();(0,l.useEffect)(()=>(null==t||t(Array.isArray(e)?e:[e]),()=>null==t?void 0:t()),[t,e])}},86920:(e,t,n)=>{"use strict";n.d(t,{v:()=>f});var l=n(85959),r=n.n(l),a=n(26250),o=n.n(a),i=n(2543),s=n(52529),c=n.n(s),u=n(41194);const m=o()(c().Row)`
    &:hover {
        background-color: transparent !important;
    }
`,d={maxHeight:"calc(100vh - 100px)"},f=({columns:e=[],numberOfLoadingRows:t=5,className:n,style:l,stripeRows:a=!0})=>r().createElement(c(),{headType:"fixed",innerStyle:d,stripeRows:a,"data-test":"filterable-sortable-table-loading",className:n,style:l,"aria-busy":"true"},r().createElement(c().Head,null,e.map(({align:e="left",header:t,key:n,sortKey:l,width:a})=>r().createElement(u.mI,Object.assign({align:e,key:n||l},null!=a?{width:a}:{}),t))),r().createElement(c().Body,null,(0,i.range)(t).map(t=>r().createElement(m,{key:t},e.map(({key:e,sortKey:t})=>r().createElement(c().Cell,{key:e||t},r().createElement(u.nM,null)))))))},98962:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var l=n(85959),r=n(34440);const a=()=>{const{history:e}=(0,r.p)();return(0,l.useCallback)(t=>{if(e&&!t.metaKey&&t.target instanceof Element){const n=t.target.closest("a");if(n){const l=null==n?void 0:n.getAttribute("href");l&&(t.preventDefault(),e.push(l))}}},[e])}}}]);
//# sourceMappingURL=7899.7899.js.map?350a7d07078d3c55205c