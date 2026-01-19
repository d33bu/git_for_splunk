/*! For license information please see 6226.6226.js.LICENSE.txt */
"use strict";(self.webpackChunkdmx=self.webpackChunkdmx||[]).push([[6226],{26226:(e,r,t)=>{t.r(r),t.d(r,{EnterpriseEdgeProcessing:()=>P,default:()=>j,parseEdgeProcessingProps:()=>I});var s=t(30168),l=t(12650),n=t.n(l),o=t(19395),a=t(17563),i=t(96814),c=t(97026),m=t.n(c),u=t(35912),d=t.n(u),p=t(25947);const b=m().div`
    display: flex;
    align-items: center;
    gap: ${p.variables.spacingSmall};
    background-color: ${(0,p.pick)({dark:"#3C4354",light:"#E6E9F1"})};
    justify-content: space-between;
    & > nav {
        padding: ${p.variables.spacingSmall};
    }
`,_=m().div`
    display: flex;
    margin: ${p.variables.spacingXSmall};
    flex-wrap: wrap;
    height: fit-content;
    gap: ${p.variables.spacingSmall};
    justify-content: flex-end;

    & > * {
        flex: 0 0 auto;

        &[data-inline] {
            margin-left: 0 !important;
        }
    }
`,f=({breadcrumbs:e,className:r,style:t,children:s})=>{const o=(0,l.useMemo)(()=>e.map(e=>n().createElement(d().Item,{key:e.label,to:e.to||"",label:e.label})),[e]);return n().createElement(b,{className:r,style:t},n().createElement(d(),null,o),s&&n().createElement(_,null,s))};var N=t(4448),g=t(15917),v=t(51989);const E=({children:e})=>{const{history:r}=(0,v.y)(),t=(0,l.useCallback)((e,{openInNewContext:t,to:s})=>{!t&&(0,g.isInternalLink)(s)&&(e.preventDefault(),r.push(s))},[r]);return n().createElement(g.NavigationProvider,{onClick:t,__self:void 0,__source:{fileName:"/builds/swp/ui-platform/projects/remotes/px-dmx/src/providers/HistoryNavigationProvider.tsx",lineNumber:19,columnNumber:9}},e)};var h,x=t(87982),k=t(46627),y=t(84530),S=t(51307),w=t(31177),C="/builds/swp/ui-platform/projects/remotes/px-dmx/src/components/EnterpriseRoot/EnterpriseEdgeProcessing.tsx";const I=e=>{const r=(0,a.parse)(e);return{processorId:"string"==typeof r.node?r.node:void 0,sharedSettings:!("shared-settings"!==r.tab)}},P=({processorId:e,sharedSettings:r})=>{const{edgeProcessors:t}=(0,N.YM)(),a=(0,l.useMemo)(()=>[{label:w.pY,to:t()},{label:(0,o.t)(h||(h=(0,s.Z)(["Shared settings"])))}],[t]);return e?n().createElement(y.EdgeProcessorNode,{processorId:e,__self:void 0,__source:{fileName:C,lineNumber:51,columnNumber:16}}):r?n().createElement(n().Fragment,null,n().createElement(E,{__self:void 0,__source:{fileName:C,lineNumber:57,columnNumber:17}},n().createElement(f,{breadcrumbs:a,__self:void 0,__source:{fileName:C,lineNumber:58,columnNumber:21}})),n().createElement(x.l,{__self:void 0,__source:{fileName:C,lineNumber:60,columnNumber:17}})):n().createElement(S.H,{selected:"dmx_edge_processors",__self:void 0,__source:{fileName:C,lineNumber:66,columnNumber:9}},n().createElement(k.default,{__self:void 0,__source:{fileName:C,lineNumber:67,columnNumber:13}}))},j=()=>{const{search:e}=(0,i.useLocation)(),{processorId:r,sharedSettings:t}=(0,l.useMemo)(()=>I(e),[e]);return n().createElement(P,{processorId:r,sharedSettings:t,__self:void 0,__source:{fileName:C,lineNumber:80,columnNumber:9}})}},51307:(e,r,t)=>{t.d(r,{H:()=>N});var s,l=t(30168),n=t(12650),o=t.n(n),a=t(97026),i=t.n(a),c=t(35800),m=t(21149),u=t(80898),d=t(6514),p=t(96814),b=t(25136),_="/builds/swp/ui-platform/projects/remotes/px-dmx/src/components/EnterpriseRoot/WithSideNav.tsx";const f=i()(u.Hz)(s||(s=(0,l.Z)(["\n    height: 100%;\n"]))),N=({selected:e,children:r})=>{const t=(()=>{const e=(0,p.useHistory)(),r=(0,b.j)();return(0,n.useCallback)(t=>{if(e&&!t.metaKey&&t.target instanceof Element){const s=t.target.closest("a"),l=null==s?void 0:s.getAttribute("href");null!=r&&r.has(l)&&(t.preventDefault(),e.push(l))}},[e,r])})();return o().createElement(f,{onClick:t,__self:void 0,__source:{fileName:_,lineNumber:43,columnNumber:9}},o().createElement(m.K,{selected:e,__self:void 0,__source:{fileName:_,lineNumber:44,columnNumber:13}}),o().createElement(c.ErrorBoundary,{FallbackComponent:d.Z,__self:void 0,__source:{fileName:_,lineNumber:45,columnNumber:13}},r))}}}]);
//# sourceMappingURL=6226.6226.js.map?3cbebaaf35b2e065aec7