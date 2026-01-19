import{c as Ue}from"./chunk-VM6CT5YT.js";import{P as ze,R as Ie,S as Ge,b as _e,c as He,ea as Ne,f as Me,la as Re,ma as $e}from"./chunk-25J5MIFG.js";import{f as ce}from"./chunk-ME4V5RLK.js";var de=ce((Ke,J)=>{/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */(function(c,k){typeof J!="undefined"&&J.exports?J.exports=k():typeof define=="function"&&define.amd?define(k):this[c]=k()})("$script",function(){var c=document,k=c.getElementsByTagName("head")[0],K="string",I=!1,S="push",v="readyState",P="onreadystatechange",C={},T={},B={},x={},q,j;function O(r,d){for(var a=0,f=r.length;a<f;++a)if(!d(r[a]))return I;return 1}function A(r,d){O(r,function(a){return d(a),1})}function p(r,d,a){r=r[S]?r:[r];var f=d&&d.call,s=f?d:a,i=f?r.join(""):d,Q=r.length;function N(b){return b.call?b():C[b]}function L(){if(!--Q){C[i]=1,s&&s();for(var b in B)O(b.split("|"),N)&&!A(B[b],N)&&(B[b]=[])}}return setTimeout(function(){A(r,function b(g,_){if(g===null)return L();if(!_&&!/^https?:\/\//.test(g)&&q&&(g=g.indexOf(".js")===-1?q+g+".js":q+g),x[g])return i&&(T[i]=1),x[g]==2?L():setTimeout(function(){b(g,!0)},0);x[g]=1,i&&(T[i]=1),G(g,L)})},0),p}function G(r,d){var a=c.createElement("script"),f;a.onload=a.onerror=a[P]=function(){a[v]&&!/^c|loade/.test(a[v])||f||(a.onload=a[P]=null,f=1,x[r]=2,d())},a.async=1,a.src=j?r+(r.indexOf("?")===-1?"?":"&")+j:r,k.insertBefore(a,k.lastChild)}return p.get=G,p.order=function(r,d,a){(function f(s){s=r.shift(),r.length?p(s,f):p(s,d,a)})()},p.path=function(r){q=r},p.urlArgs=function(r){j=r},p.ready=function(r,d,a){r=r[S]?r:[r];var f=[];return!A(r,function(s){C[s]||f[S](s)})&&O(r,function(s){return C[s]})?d():function(s){B[s]=B[s]||[],B[s][S](d),a&&a(f)}(r.join("|")),p},p.done=function(r){p([null],r)},p})});var Je=ce((Qe,se)=>{(()=>{"use strict";var c={};c.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return c.d(n,{a:n}),n},c.d=(e,n)=>{for(var t in n)c.o(n,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},c.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),c.r=e=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var k={};c.r(k),c.d(k,{AppBar:()=>d,SplunkBar:()=>r,default:()=>Ae});let K=He(),I=Me();var S=c.n(I);let v=Ie();function P(){var e=j([`
    animation-name: `,`;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    background-color: `,`;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    display: inline-block;
    margin-right: `,`;

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:nth-child(3) {
        animation-delay: 0.4s;
    }
`]);return P=function(){return e},e}function C(){var e=j([`
    color: `,`;
    padding-top: 30vh;
    text-align: center;
    min-height: 400px;
`]);return C=function(){return e},e}function T(){var e=j([`
    background-color: `,`;
    min-height: `,`px;
`]);return T=function(){return e},e}function B(){var e=j([`
    padding: 0;
    background-color: `,`;
    height: `,`px;
`]);return B=function(){return e},e}function x(){var e=j([`
    background-color: `,`;
    position: fixed;
    opacity: 1;
    z-index: 10000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`]);return x=function(){return e},e}function q(){var e=j([`
    0% {
        opacity: 0.2;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0.2;
    }
`]);return q=function(){return e},e}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=45,A=34,p=(0,I.keyframes)(q()),G=S().div(x(),v.variables.backgroundColorPage),r=S().div(B(),(0,v.pick)({prisma:v.variables.backgroundColorSection,enterprise:v.variables.gray20}),A),d=S().div(T(),(0,v.pick)({prisma:v.variables.backgroundColorPopup,enterprise:v.variables.gray30}),O),a=S().div(C(),v.variables.contentColorInverted),f=S().div(P(),p,v.variables.neutral500,(0,v.pick)({prisma:v.variables.spacingMedium,enterprise:v.variables.spacingHalf}));let s=_e();var i=c.n(s);let Q=de();var N=c.n(Q);let L=Ne(),b=Ue(),g=ze();var _=c.n(g);let fe=Ge();var H=c.n(fe);let ve=Re();var pe=c.n(ve);let me=$e();var ge={hideAppBar:H().bool,hideChrome:H().bool,hideSplunkBar:H().bool,AppBarFallback:H().elementType,SplunkBarFallback:H().elementType},he={hideAppBar:!1,hideChrome:!1,hideSplunkBar:!1,AppBarFallback:d,SplunkBarFallback:r};function V(e){var n=e.hideAppBar,t=e.hideChrome,u=e.hideSplunkBar,o=e.SplunkBarFallback,l=e.AppBarFallback;return i().createElement(G,null,!t&&!u&&i().createElement(o,null),!t&&!n&&i().createElement(l,null),i().createElement(a,null,i().createElement(f,null),i().createElement(f,null),i().createElement(f,null),i().createElement(pe(),null,(0,me._)("Loading"))))}V.propTypes=ge,V.defaultProps=he;let be=V;function ye(e,n){if(e==null)return{};var t=ke(e,n),u,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)u=l[o],!(n.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(e,u)&&(t[u]=e[u])}return t}function ke(e,n){if(e==null)return{};var t={},u=Object.keys(e),o,l;for(l=0;l<u.length;l++)o=u[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Se="build/api/layout.js",je="build/api/layout-dark.js",Be='header[data-view="splunkjs/mvc/headerview"]';function Ee(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=t.loader,o=u===void 0?"scriptjs":u,l=e==="dark"?je:Se,E=(0,b.createStaticURL)(l);if(o==="scriptjs")N()(E,function(){n(window.__splunk_layout__)});else if(o==="requirejs")if(window.requirejs)window.requirejs([E],n);else throw new Error('Error in react-page: options.loader = "requirejs" was set but window.requirejs does not exist.');else throw new Error('Invalid options.loader configuration: must be "scriptjs" or "requirejs".')}function we(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.hideSplunkBar,u=n.hideAppBar,o=n.headerHeight,l=e.children[0],E=l&&getComputedStyle(l).backgroundColor;if(!(t||u)){var M=l==null?void 0:l.offsetHeight,z=e.children[1],U=z&&getComputedStyle(z).backgroundColor,m=Math.round(M/o*100);return`linear-gradient(
                `.concat(E,` 0%,
                `).concat(E," ").concat(m,`%,
                `).concat(U," ").concat(m,`%,
                `).concat(U,` 100%
            )`)}return E}function Z(e,n,t){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},l=u?i().createElement(L.LayerStackGlobalProvider,null,i().createElement(_(),o,e)):i().createElement(_(),o,e);return n(l,t)}function Ce(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=t.useGlobalLayerStack,o=u===void 0?!0:u,l=t.pageTitle,E=t.theme,M=E===void 0?"light":E,z=t.loader,U=z===void 0?"scriptjs":z,m=ye(t,["useGlobalLayerStack","pageTitle","theme","loader"]);l&&(document.title=l);var R=m.hideChrome,W=m.hideAppBar,X=m.hideSplunkBar,ee=m.SplunkBarFallback,ne=ee===void 0?r:ee,re=m.AppBarFallback,te=re===void 0?d:re,ae=m.lazyLoadLayout,ie=ae===void 0?!1:ae,F=m.onLayoutComplete,D=m.onLayoutStart,w=document.createElement("div"),y=document.createElement("div");D==null||D({headerContainer:y,bodyContainer:w});var Fe=M==="light"||M==="enterprise"?"light":"dark",Y={family:"enterprise",colorScheme:Fe,density:"comfortable"},$,oe;if(ie){if(!R){document.body.appendChild(y),oe=n(i().createElement(i().Fragment,null,!X&&i().createElement(ne,null),!W&&i().createElement(te,null)),y);var le=y.offsetHeight,Pe=we(y,{hideSplunkBar:X,hideAppBar:W,headerHeight:le,AppBarFallback:te,SplunkBarFallback:ne});y.style.height="".concat(le,"px"),y.style.background="".concat(Pe)}document.body.appendChild(w),$=Z(e,n,w,o,Y)}else document.body.appendChild(w),$=n(i().createElement(_(),Y,i().createElement(be,m)),w);Ee(M,function(ue){var h;if(ue?(h=ue.create(m).getContainerElement(),m.layout==="fixed"&&((!h.style.flex||h.style.flex==="1 0 0px")&&(h.style.flex="1 0 0%"),h.style.overflow||(h.style.overflow="hidden"),h.style.width||(h.style.width="100vw"))):(console.error("Unable to load layout."),h=document.createElement("div"),document.body.appendChild(h)),ie){if(!R){oe.unmount(y);var Te=document.querySelector(Be),Le=(!R&&!X?A:0)+(!R&&!W?O:0);y.style.minHeight="".concat(Le,"px"),y.style.height="auto",y.appendChild(Te)}h.appendChild(w),F==null||F()}else setTimeout(function(){$.unmount(w),$=Z(e,n,w,o,Y),h.appendChild(w),F==null||F()},30)},{loader:U})}let xe=Ce;var qe=function(n,t){return(0,K.render)(n,t),{unmount:function(){return(0,K.unmountComponentAtNode)(t)}}};function Oe(e,n){xe(e,qe,n)}let Ae=Oe;se.exports=k})()});export{de as a,Je as b};
