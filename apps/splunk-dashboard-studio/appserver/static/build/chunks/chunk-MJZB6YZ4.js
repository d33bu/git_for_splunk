import{b as io}from"./chunk-SH4R7UWG.js";import{$a as x,B as lo,R as T,U as B,V as M,e as to,j as ao,p as so}from"./chunk-KKL7RZI7.js";import{b as P}from"./chunk-37NLSUUP.js";import{r as eo}from"./chunk-KYXUQO6T.js";import{m as no}from"./chunk-GPB4XJC6.js";import{c as Z}from"./chunk-FN5SWCA2.js";import{O as Q,Q as X,R as O,b as S,f as L,la as oo,wb as ro}from"./chunk-YESDDU4C.js";import{a as y,b as D,h as a}from"./chunk-ME4V5RLK.js";var U=a(io()),u=a(to()),_=a(lo()),$=a(ao()),H=a(eo()),q=a(no()),C=a(Z()),G=a(Q()),K=a(P()),I=a(O()),l=a(S()),f=a(L());var E=a(P(),1),po="full source",co=(o,e)=>{var r,t;Object.values((t=(r=o.layout)==null?void 0:r.layoutDefinitions)!=null?t:{}).forEach(n=>{let s=[];n.structure.forEach(d=>{var m;if(d.item===e){let h=(m=n.options)==null?void 0:m.height;h&&(n.options.height=h-d.position.h);return}s.push(d)}),n.structure=s})},uo=o=>{var e;return Object.entries((e=o.visualizations)!=null?e:{}).find(([r,t])=>{var n;return t.type==="splunk.markdown"&&((n=t.options)==null?void 0:n.markdown)&&typeof t.options.markdown=="string"&&t.options.markdown.toLowerCase().includes(po)})},mo=o=>{var t;let[e]=(t=uo(o))!=null?t:[];if(!e)return o;let r=(0,E.default)(o);return delete r.visualizations[e],co(r,e),r},N=mo;var J=a(ro()),R=a(oo()),i=a(S()),go=(0,i.lazy)(()=>import("./CloneDashboard-U5TXSPTI.js")),fo=(o,{dashboardURL:e})=>{o&&window.open(e,"_blank")},ho=({definition:o,dashboardTitle:e})=>{let[r,t]=(0,i.useState)(!1),n=(0,i.useMemo)(()=>N(o),[o]),s=(0,i.useCallback)(()=>{t(!0)},[]),d=(0,i.useCallback)(()=>t(!1),[]),m=i.default.createElement(i.Suspense,{fallback:null},i.default.createElement(go,{open:r,dashboardTitle:e,dashboardType:"UDF",getUdfDefinition:(0,i.useCallback)(()=>n,[n]),handleSuccess:fo,onCloseModal:d,fromExamplesHub:!0}));return i.default.createElement(i.default.Fragment,null,m,i.default.createElement(J.default,{label:(0,R._)("Clone in Studio"),onClick:s,"data-clickable":!0,"data-test":"clone-button",appearance:"pill"}))},V=ho;var j=a(so()),A=a(X()),b=a(O()),c=a(S()),v=a(L()),bo=["bash","clike","css","html","json","javascript","js","jsx","typescript","ts","tsx","markup","mathml","svg","xml"],Co={content:"",language:"json"},yo=v.default.div`
    background-color: ${(0,A.pick)({enterprise:{light:"#121316",dark:"#121316"},prisma:"#121316"})};
    overflow: hidden;
    height: ${o=>o.height?o.height:200}px;
    color: #9cdcfe;
`,ko=v.default.div`
    padding: 12px 24px;
    overflow: auto;
    height: 100%;
`,k=({height:o,options:{content:e,language:r}=Co})=>{let t=(0,c.useRef)(null),[n,s]=(0,c.useState)(!1),d=(0,c.useCallback)(()=>{if(!(!t.current||!document.createRange||!window.getSelection))if(n){let p=window.getSelection();p==null||p.removeAllRanges(),s(!1)}else{let p=document.createRange();p.selectNodeContents(t.current);let g=window.getSelection();g==null||g.removeAllRanges(),g==null||g.addRange(p),s(!0)}},[n]),m=(0,c.useCallback)(()=>{if(!(!t.current||!document.createRange||!window.getSelection)&&n){let p=window.getSelection();p==null||p.removeAllRanges(),s(!1)}},[n]),h=(0,c.useCallback)(p=>{t.current=p},[]);return c.default.createElement(yo,{height:o},c.default.createElement(ko,null,c.default.createElement(j.default,{value:e,language:r,onDoubleClick:d,onClick:m,elementRef:h})))};k.propTypes={options:b.default.shape({content:b.default.string,language:b.default.oneOf(bo)}),height:b.default.number.isRequired};k.defaultProps={options:{content:"",language:"json"}};k.showTitleAndDescription=!0;var W=k;var wo=D(y({},x),{visualizations:D(y({},x.visualizations),{"viz.code":W})}),Do=f.default.div`
    display: flex;
    flex-direction: row;
    ${o=>(0,H.toDimension)({width:o.width,height:o.height})};
`,So=f.default.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    min-width: 0;
`,xo=(0,f.default)("div")`
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    padding: 0px 0px 8px 0px;
    background-color: ${$.customThemeVariables.dashboardBackgroundColor};
`,vo=f.default.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    z-index: 5;
`,zo=(0,f.default)(q.default)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,Y=u.GeoRegistry.create();Y.addDefaultProvider(new u.GeoJsonProvider);var F=u.IconRegistry.create();F.addDefaultProvider(new u.LocalIconProvider);F.addProvider(new u.StandardIconProvider);var Io=new _.SWACollector,z,Fo={enableRiskyCommand:!!((z=window.$C)!=null&&z.ENABLE_RISKY_COMMAND_CHECK_DASHBOARD)},Lo=o=>{var e;(e=o.layout)!=null&&e.layoutDefinitions&&Object.values(o.layout.layoutDefinitions).forEach(r=>{var t,n,s,d;(n=(t=r.options)==null?void 0:t.backgroundImage)!=null&&n.src&&w((d=(s=r.options)==null?void 0:s.backgroundImage)==null?void 0:d.src)&&(r.options.backgroundImage.src=(0,C.createURL)(r.options.backgroundImage.src))})},Oo=o=>{o.visualizations&&Object.values(o.visualizations).forEach(e=>{var t,n;(t=e.options)!=null&&t.src&&w(e.options.src)&&(e.options.src=(0,C.createURL)(e.options.src)),(n=e.options)!=null&&n.icon&&w(e.options.icon)&&(e.options.icon=(0,C.createURL)(e.options.icon));let{eventHandlers:r=[]}=e;r.forEach(s=>{var d;(d=s.options)!=null&&d.url&&w(s.options.url)&&(s.options.url=(0,C.createURL)(s.options.url))})})},w=o=>!!(o!=null&&o.startsWith("/")),Po=o=>{let e=(0,K.default)(o);return Lo(e),Oo(e),e},To=({definition:o,isCompleteDashboard:e=!1,dashboardTitle:r})=>{let t=T(),[n,s]=(0,l.useState)({}),d=(0,l.useMemo)(()=>Po(o),[o]),m=(0,l.useMemo)(()=>[l.default.createElement(V,{definition:o,dashboardTitle:r})],[o,r]);return l.default.createElement(u.DashboardContextProvider,{featureFlags:t,geoRegistry:Y,iconRegistry:F,mapTileConfig:M,metricsCollectors:Io,preset:wo,initialDefinition:d,onTokenBindingChange:s,initialTokenBinding:n,dataSourceContext:Fo},l.default.createElement(G.default,{family:"enterprise",colorScheme:"dark",density:"comfortable"},l.default.createElement(Do,{width:"100%",height:"calc(100vh - 78px)"},l.default.createElement(So,null,l.default.createElement(vo,null,l.default.createElement(xo,null,l.default.createElement(U.Dashboard,{toolbarItems:e?m:void 0,width:"100%",height:"100%"})))))))},Bo=o=>l.default.createElement(B,{initialWebFlags:o.webFeatureFlags},l.default.createElement(To,y({},o)));Bo.propTypes={definition:I.default.object.isRequired,webFeatureFlags:I.default.object};export{Bo as a};
