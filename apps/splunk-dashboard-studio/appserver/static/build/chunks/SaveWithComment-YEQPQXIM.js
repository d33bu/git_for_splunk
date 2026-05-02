import{a as T}from"./chunk-OOV7QOII.js";import{a as S}from"./chunk-4DUWRQUE.js";import{b}from"./chunk-4TESD6WA.js";import"./chunk-WQISVSPP.js";import{a as l}from"./chunk-6YQP574K.js";import{A as y,z as M}from"./chunk-IH6SOGZF.js";import{a as u,i as t,j as e,k as C,l as n,m as i,o as r,p as a,q as f}from"./chunk-NEBMNFOD.js";import"./chunk-U3FJYIKH.js";import"./chunk-GLBM25BR.js";import"./chunk-NGEYEGDK.js";import"./chunk-UMIX3X4X.js";import"./chunk-YQT7ZZ4C.js";import"./chunk-FQX2JRRT.js";import"./chunk-YESDDU4C.js";import"./chunk-ME4V5RLK.js";var B={filename:"/builds/devplat/dashboard-enterprise/packages/enterprise-dashboard-dialogs/SaveWithComment.js",dirname:"/builds/devplat/dashboard-enterprise/packages/enterprise-dashboard-dialogs",relativefilename:"../enterprise-dashboard-dialogs/SaveWithComment.js",relativedirname:"../enterprise-dashboard-dialogs",line:0},G=r(n)`
    width: 600px;
`,N=r(n.Footer)`
    display: flex;
    justify-content: flex-end;
    column-gap: 14px;
`,P=r(n.Body)`
    padding: 20px 28px;
`,A=r(T)`
    > * {
        padding: 4px 8px;
    }
`,H=r(b)`
    label {
        padding-bottom: 0px;
    }
    margin-bottom: 0px;
`,D=r.div`
    display: flex;
    flex-direction: column;
`,V=r(l)`
    font-size: 12px;
`,W=r(l)`
    font-size: 12px;
    color: ${i.variables.errorColorD10};
`,j=r(l)`
    margin-bottom: 0;
    font-weight: 500;
`,z=r(l)`
    font-size: 13px;
    color: ${i.variables.textGray};
`,k=C(B.filename),F=100,R=({commentLength:d})=>{let s=y(d);return e.createElement(W,null,s)},I=({open:d,onCloseModal:s,onSave:_,revertInformation:p})=>{let[c,h]=(0,t.useState)(""),[o,g]=(0,t.useState)(!1),[v,E]=(0,t.useState)(!1),L=(0,t.useCallback)(($,{value:x})=>{let w=x.length>F;g(w),h(x)},[]),m=(0,t.useCallback)(()=>{h(""),g(!1),E(!1),s()},[s]),O=(0,t.useCallback)(()=>{E(o),o||(_({comment:c,from:"dialog"}),m())},[_,m,c,o]);return e.createElement(G,{open:d},e.createElement(n.Header,{title:(0,a._)("Add comment and save version"),onRequestClose:m}),e.createElement(P,null,v?e.createElement(S,{appearance:"fill",errorA11yToggle:v,errors:[M]}):null,p&&e.createElement(e.Fragment,null,e.createElement(l,null,(0,a._)("Revert version")),e.createElement(j,null,p.versionDate),e.createElement(z,null,p.versionMessage)),e.createElement(H,{label:(0,a._)("Comment"),labelPosition:"top",error:o},e.createElement(A,{rowsMax:7,rowsMin:6,onChange:L,error:o})),e.createElement(D,null,e.createElement(V,{style:{marginBottom:"0px"}},(0,a._)("100 character limit")),o?e.createElement(R,{commentLength:c.length}):null)),e.createElement(N,null,e.createElement("div",null,e.createElement(f,u({appearance:"default",onClick:m,label:(0,a._)("Cancel")},k("modal-cancel")))),e.createElement("div",null,e.createElement(f,u({appearance:"primary",onClick:O,label:(0,a._)("Save")},k("modal-save"))))))},de=(0,i.withSplunkTheme)(I);export{de as default};
