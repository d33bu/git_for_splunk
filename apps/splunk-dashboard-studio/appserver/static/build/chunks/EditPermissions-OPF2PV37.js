import{a as u}from"./chunk-DAPPIGTC.js";import{a as b}from"./chunk-DBXH5I2D.js";import{a as fe}from"./chunk-VSNE6L6M.js";import{a as _e}from"./chunk-MQKWWNMU.js";import{a as de}from"./chunk-4DUWRQUE.js";import{b as oe}from"./chunk-4TESD6WA.js";import{a as he}from"./chunk-JABRBY4K.js";import{a as ie}from"./chunk-WQISVSPP.js";import{a as pe}from"./chunk-SKYJKPPA.js";import{a as P}from"./chunk-FV4H6FUL.js";import"./chunk-IH6SOGZF.js";import{a as d,b as W,e as le,f as ae,i as f,j as e,k as ne,l as se,m as w,o as c,p as a,q as E}from"./chunk-NEBMNFOD.js";import{c as ue,e as me,f as M}from"./chunk-NP2JWUYQ.js";import{l as H}from"./chunk-CB7IZOOJ.js";import{a as ce}from"./chunk-KTPU6OVW.js";import"./chunk-VOUKCIF6.js";import"./chunk-MPAGGLHN.js";import"./chunk-ST4PTDTX.js";import"./chunk-XNSF3IAV.js";import"./chunk-GLBM25BR.js";import"./chunk-NGEYEGDK.js";import"./chunk-NVRGEB4W.js";import{sa as ee,ta as re,ua as te}from"./chunk-KYXUQO6T.js";import"./chunk-2BA2WA5Y.js";import"./chunk-GPB4XJC6.js";import"./chunk-YQT7ZZ4C.js";import"./chunk-LA6DL47F.js";import"./chunk-VRCBFY2H.js";import"./chunk-FQX2JRRT.js";import"./chunk-FN5SWCA2.js";import"./chunk-YESDDU4C.js";import{h as Z}from"./chunk-ME4V5RLK.js";var $=Z(ce(),1),Ge=Z(ce(),1);var Fe={filename:"/builds/devplat/dashboard-enterprise/packages/enterprise-dashboard-dialogs/EditPermissions.js",dirname:"/builds/devplat/dashboard-enterprise/packages/enterprise-dashboard-dialogs",relativefilename:"../enterprise-dashboard-dialogs/EditPermissions.js",relativedirname:"../enterprise-dashboard-dialogs",line:0},Ce={};le(Ce,{default:()=>we});ae(Ce,Ge);var ve,ge,we=(ge=(ve=$.default)==null?void 0:ve.default)!=null?ge:$.default,Ee=(r,t)=>(0,b.includes)(t,"*")?r!=="*":!1,be=(r,t)=>t.length?!!((0,b.includes)(t,"*")&&r==="*"||(0,b.includes)(t,r)):!1,k=c(se)`
    width: 550px;
`,Pe=c(oe)`
    max-width: 1000px;
    margin: 0px;
    margin-left: 30px;
`,Oe=c(fe)`
    max-width: 100%;
`,ye=c(_e)`
    width: 16px;
    height: 16px;
    align-items: center;
`,Qe=c.div`
    margin-top: 5px;
    margin-left: -27px;
    margin-right: -27px;
`,je=c(u)`
    margin-top: 10px;
`,L=c(u.HeadCell)`
    background-color: transparent;
    border-top: 1px solid ${w.variables.backgroundColorHover};
    > div {
        justify-content: center;
        padding: 3px 0px;
        font-weight: bold;
        width: 40px;
    }
`,qe=c(u.Row)`
    td:first-child {
        text-indent: 10px;
        min-width: 300px;
    }

    &:nth-child(odd) {
        background-color: ${w.variables.backgroundColorHover};
    }
`,ze=(r,t)=>M(["getDashboard",r],()=>te({id:r}),{select:n=>n.entry[0],retry:!1,enabled:t,refetchOnWindowFocus:!1}),Ue=r=>M(["roles"],ee,{select:t=>{let n=t.entry;for(let i of n)i.value=i.name;return[{name:(0,a._)("Everyone"),value:"*"},...n]},retry:!1,enabled:r,refetchOnWindowFocus:!1}),Ve=(r,t)=>me(n=>re(n),{onSuccess:n=>{t.setQueryData(["getDashboard",r],n)}}),_=ne(Fe.filename),Ye=e.memo(({handleCloseModal:r})=>e.createElement(k.Header,{title:(0,a._)("Edit Permissions"),onRequestClose:r})),Ie=e.memo(({handleCloseModal:r,handleEditPerm:t})=>e.createElement(k.Footer,null,e.createElement(E,d({appearance:"default",onClick:r,label:(0,a._)("Cancel")},_("cancel-permission"))),e.createElement(E,d({appearance:"primary",onClick:t,label:(0,a._)("Save")},_("save-permission"))))),B=({label:r,info:t})=>e.createElement(Pe,{label:r},e.createElement(Oe,d({},_(t)),e.createElement("strong",null,t))),Je=()=>e.createElement(L,null),Ke=({name:r,value:t,readPerms:n,writePerms:i,handleRead:m,handleWrite:h})=>e.createElement(qe,null,e.createElement(u.Cell,null,r),e.createElement(u.Cell,null,e.createElement(ye,d({"aria-label":`${(0,a._)("Read permissions for")} ${r}`,value:t,onClick:m,selected:be(t,n),disabled:Ee(t,n)},_(`${r}-read`)))),e.createElement(u.Cell,null,e.createElement(ye,d({"aria-label":`${(0,a._)("Write permissions for")} ${r}`,value:t,onClick:h,selected:be(t,i),disabled:Ee(t,i)},_(`${r}-write`))))),Ne=({roles:r,readPerms:t,writePerms:n,handleRead:i,handleWrite:m})=>e.createElement(je,null,e.createElement(u.Head,null,e.createElement(Je,null),e.createElement(L,null,(0,a._)("Read")),e.createElement(L,null,(0,a._)("Write"))),e.createElement(u.Body,null,r.map(h=>e.createElement(Ke,{key:h.name,name:h.name,value:h.value,readPerms:t,writePerms:n,handleRead:i,handleWrite:m})))),xe={read:void 0,write:void 0},Xe={height:"14px"},Se={marginLeft:0},Ze=[],er=({open:r,onCloseModal:t,dashboardTitle:n,dashboardId:i,trackEvent:m,telemetry:h,onUpdateSharing:A})=>{var F,G,O,Q,j,q,z;let[U,V]=(0,f.useState)(void 0),[C,D]=(0,f.useState)(xe),[Y,y]=(0,f.useState)([]),[I,ke]=(0,f.useState)(!1),De=ue(),{isLoading:Re,data:l,isError:Te}=ze(i,r),{isLoading:We,data:J,isError:He}=Ue(r),{mutate:Me}=Ve(i,De),x=null;(We||Re)&&(x=e.createElement(he,{size:"small",style:Xe})),(He||Te)&&(x=e.createElement(ie,{type:"error"},(0,a._)("Permission editing is currently unavailable. Try again in a few minutes.")));let p=(F=U!=null?U:l==null?void 0:l.acl.sharing)!=null?F:"",v=(Q=(O=C.read)!=null?O:(G=l==null?void 0:l.acl.perms)==null?void 0:G.read)!=null?Q:[],g=(z=(q=C.write)!=null?q:(j=l==null?void 0:l.acl.perms)==null?void 0:j.write)!=null?z:[],K=o=>{m?m(o):h.emit(o)},R=P(o=>{y([]),D(xe),V(void 0),t(o)}),Be=()=>ke(!I),$e=o=>{if(Y.length){Be();return}Me({id:i,display:p,owner:l==null?void 0:l.acl.owner,readPerms:v,writePerms:g},{onSuccess:()=>{A==null||A(p),K(H({name:n,sharing:p,selectedRead:v.length,selectedWrite:g.length},m===void 0,!0)),R(o)},onError:s=>{y([s.message]),K(H({name:n,sharing:p,selectedRead:v.length,selectedWrite:g.length},m===void 0,!1))}})},N=(0,f.useCallback)((o,s)=>{!o.length&&!s.length?y([(0,a._)('You must select at least one "Read" or "Write" permission.')]):y([])},[]),X=(0,f.useCallback)((o,s)=>(y([]),(0,b.includes)(o,s)?(0,b.without)(o,s):[...o,s]),[]),Le=P((o,{value:s})=>{let S=X(v,s);N(S,g),D(W(d({},C),{read:S}))}),Ae=P((o,{value:s})=>{let S=X(g,s);N(v,S),D(W(d({},C),{write:S}))}),T=(0,f.useCallback)((o,{value:s})=>{V(s)},[]);return e.createElement(k,{open:r},e.createElement(Ye,{handleCloseModal:R}),e.createElement(k.Body,null,x!=null?x:e.createElement(e.Fragment,null,e.createElement(de,{errors:Y,errorA11yToggle:I}),e.createElement(B,{label:(0,a._)("Dashboard"),info:n}),e.createElement(B,{label:(0,a._)("Owner"),info:l==null?void 0:l.author}),e.createElement(B,{label:(0,a._)("App"),info:l==null?void 0:l.acl.app}),e.createElement(Pe,{label:(0,a._)("Display")},e.createElement(we,null,e.createElement(E,d({appearance:"default",label:(0,a._)("Owner"),onClick:T,selected:p==="user",disabled:!(l!=null&&l.acl.can_share_user),value:"user"},_("user-permission"))),e.createElement(E,d({style:Se,appearance:"default",label:(0,a._)("App"),onClick:T,selected:p==="app",disabled:!(l!=null&&l.acl.can_share_app),value:"app"},_("app-permission"))),e.createElement(E,d({style:Se,appearance:"default",label:(0,a._)("All apps"),onClick:T,selected:p==="global",disabled:!(l!=null&&l.acl.can_share_global),value:"global"},_("global-permission"))))),p!=="user"?e.createElement(Qe,null,e.createElement(Ne,{roles:J!=null?J:Ze,readPerms:v,writePerms:g,handleRead:Le,handleWrite:Ae})):null)),x?null:e.createElement(Ie,{handleCloseModal:R,handleEditPerm:$e}))},rr=pe(er),Wr=(0,w.withSplunkTheme)(rr);export{Wr as default};
