import{c as Re}from"./chunk-FN5SWCA2.js";import{O as Ge,Q as Ne,R as Ue,b as He,c as Me,da as De,f as Ie,ka as $e,la as Je}from"./chunk-YESDDU4C.js";import{f as fe}from"./chunk-ME4V5RLK.js";var ve=fe((Qe,J)=>{/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */(function(l,S){typeof J!="undefined"&&J.exports?J.exports=S():typeof define=="function"&&define.amd?define(S):this[l]=S()})("$script",function(){var l=document,S=l.getElementsByTagName("head")[0],K="string",I=!1,j="push",v="readyState",T="onreadystatechange",B={},_={},w={},x={},q,E;function O(r,u){for(var a=0,s=r.length;a<s;++a)if(!u(r[a]))return I;return 1}function F(r,u){O(r,function(a){return u(a),1})}function p(r,u,a){r=r[j]?r:[r];var s=u&&u.call,c=s?u:a,i=s?r.join(""):u,Q=r.length;function N(b){return b.call?b():B[b]}function L(){if(!--Q){B[i]=1,c&&c();for(var b in w)O(b.split("|"),N)&&!F(w[b],N)&&(w[b]=[])}}return setTimeout(function(){F(r,function b(m,z){if(m===null)return L();if(!z&&!/^https?:\/\//.test(m)&&q&&(m=m.indexOf(".js")===-1?q+m+".js":q+m),x[m])return i&&(_[i]=1),x[m]==2?L():setTimeout(function(){b(m,!0)},0);x[m]=1,i&&(_[i]=1),G(m,L)})},0),p}function G(r,u){var a=l.createElement("script"),s;a.onload=a.onerror=a[T]=function(){a[v]&&!/^c|loade/.test(a[v])||s||(a.onload=a[T]=null,s=1,x[r]=2,u())},a.async=1,a.src=E?r+(r.indexOf("?")===-1?"?":"&")+E:r,S.insertBefore(a,S.lastChild)}return p.get=G,p.order=function(r,u,a){(function s(c){c=r.shift(),r.length?p(c,s):p(c,u,a)})()},p.path=function(r){q=r},p.urlArgs=function(r){E=r},p.ready=function(r,u,a){r=r[j]?r:[r];var s=[];return!F(r,function(c){B[c]||s[j](c)})&&O(r,function(c){return B[c]})?u():(function(c){w[c]=w[c]||[],w[c][j](u),a&&a(s)})(r.join("|")),p},p.done=function(r){p([null],r)},p})});var Ke=fe((Ve,pe)=>{(()=>{"use strict";var l={};l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),l.r=e=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var S={};l.r(S),l.d(S,{AppBar:()=>u,SplunkBar:()=>r,default:()=>Pe});let K=Me(),I=Ie();var j=l.n(I);let v=Ne();function T(){var e=E([`
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
`]);return T=function(){return e},e}function B(){var e=E([`
    color: `,`;
    padding-top: 30vh;
    text-align: center;
    min-height: 400px;
`]);return B=function(){return e},e}function _(){var e=E([`
    background-color: `,`;
    min-height: `,`px;
`]);return _=function(){return e},e}function w(){var e=E([`
    padding: 0;
    background-color: `,`;
    height: `,`px;
`]);return w=function(){return e},e}function x(){var e=E([`
    background-color: `,`;
    position: fixed;
    opacity: 1;
    z-index: 10000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`]);return x=function(){return e},e}function q(){var e=E([`
    0% {
        opacity: 0.2;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0.2;
    }
`]);return q=function(){return e},e}function E(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=45,F=34,p=(0,I.keyframes)(q()),G=j().div(x(),v.variables.backgroundColorPage),r=j().div(w(),(0,v.pick)({prisma:v.variables.backgroundColorSection,enterprise:v.variables.gray20}),F),u=j().div(_(),(0,v.pick)({prisma:v.variables.backgroundColorPopup,enterprise:v.variables.gray30}),O),a=j().div(B(),v.variables.contentColorInverted),s=j().div(T(),p,v.variables.neutral500,(0,v.pick)({prisma:v.variables.spacingMedium,enterprise:v.variables.spacingSmall}));let c=He();var i=l.n(c);let Q=ve();var N=l.n(Q);let L=De(),b=Re(),m=Ge();var z=l.n(m);let me=Ue();var H=l.n(me);let ge=$e();var he=l.n(ge);let ye=Je();var be={hideAppBar:H().bool,hideChrome:H().bool,hideSplunkBar:H().bool,AppBarFallback:H().elementType,SplunkBarFallback:H().elementType};function Z(e){var n=e.AppBarFallback,t=n===void 0?u:n,o=e.hideAppBar,f=e.hideChrome,d=e.hideSplunkBar,g=e.SplunkBarFallback,A=g===void 0?r:g;return i().createElement(G,null,!f&&!d&&i().createElement(A,null),!f&&!o&&i().createElement(t,null),i().createElement(a,null,i().createElement(s,null),i().createElement(s,null),i().createElement(s,null),i().createElement(he(),null,(0,ye._)("Loading"))))}Z.propTypes=be;let ke=Z;function Se(e,n){if(e==null)return{};var t,o,f=je(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)t=d[o],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(f[t]=e[t])}return f}function je(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.includes(o))continue;t[o]=e[o]}return t}var Ee="build/api/layout.js",we="build/api/layout-dark.js",Ce='header[data-view="splunkjs/mvc/headerview"]';function Be(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=t.loader,f=o===void 0?"scriptjs":o,d=e==="dark"?we:Ee,g=(0,b.createStaticURL)(d);if(f==="scriptjs")N()(g,(function(){n(window.__splunk_layout__)}));else if(f==="requirejs")if(window.requirejs)window.requirejs([g],n);else throw new Error('Error in react-page: options.loader = "requirejs" was set but window.requirejs does not exist.');else throw new Error('Invalid options.loader configuration: must be "scriptjs" or "requirejs".')}function xe(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.hideSplunkBar,o=n.hideAppBar,f=n.headerHeight,d=e.children[0],g=d&&getComputedStyle(d).backgroundColor;if(!(t||o)){var A=d==null?void 0:d.offsetHeight,U=e.children[1],M=U&&getComputedStyle(U).backgroundColor,D=Math.round(A/f*100);return`linear-gradient(
                `.concat(g,` 0%,
                `).concat(g," ").concat(D,`%,
                `).concat(M," ").concat(D,`%,
                `).concat(M,` 100%
            )`)}return g}function ee(e,n,t){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},d=o?i().createElement(L.LayerStackGlobalProvider,null,i().createElement(z(),f,e)):i().createElement(z(),f,e);return n(d,t)}function qe(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=t.useGlobalLayerStack,f=o===void 0?!0:o,d=t.pageTitle,g=t.theme,A=g===void 0?"light":g,U=t.themeDensity,M=t.loader,D=M===void 0?"scriptjs":M,h=Se(t,["useGlobalLayerStack","pageTitle","theme","themeDensity","loader"]);d&&(document.title=d);var R=h.hideChrome,ne=h.themeFamily,re=ne===void 0?"enterprise":ne,V=h.hideAppBar,W=h.hideSplunkBar,te=h.SplunkBarFallback,ae=te===void 0?r:te,ie=h.AppBarFallback,oe=ie===void 0?u:ie,le=h.lazyLoadLayout,ue=le===void 0?!1:le,P=h.onLayoutComplete,X=h.onLayoutStart,C=document.createElement("div"),k=document.createElement("div");X==null||X({headerContainer:k,bodyContainer:C});var Te=A==="light"||A==="enterprise"?"light":"dark",Y={family:re,colorScheme:Te,density:U||(re==="prisma"?"compact":"comfortable")},$,ce;if(ue){if(!R){document.body.appendChild(k),ce=n(i().createElement(i().Fragment,null,!W&&i().createElement(ae,null),!V&&i().createElement(oe,null)),k);var de=k.offsetHeight,_e=xe(k,{hideSplunkBar:W,hideAppBar:V,headerHeight:de,AppBarFallback:oe,SplunkBarFallback:ae});k.style.height="".concat(de,"px"),k.style.background="".concat(_e)}document.body.appendChild(C),$=ee(e,n,C,f,Y)}else document.body.appendChild(C),$=n(i().createElement(z(),Y,i().createElement(ke,h)),C);Be(A,(function(se){var y;if(se?(y=se.create(h).getContainerElement(),h.layout==="fixed"&&((!y.style.flex||y.style.flex==="1 0 0px")&&(y.style.flex="1 0 0%"),y.style.overflow||(y.style.overflow="hidden"),y.style.width||(y.style.width="100vw"))):(console.error("Unable to load layout."),y=document.createElement("div"),document.body.appendChild(y)),ue){if(!R){ce.unmount(k);var Le=document.querySelector(Ce),ze=(!R&&!W?F:0)+(!R&&!V?O:0);k.style.minHeight="".concat(ze,"px"),k.style.height="auto",k.appendChild(Le)}y.appendChild(C),P==null||P()}else setTimeout((function(){$.unmount(C),$=ee(e,n,C,f,Y),y.appendChild(C),P==null||P()}),30)}),{loader:D})}let Ae=qe;var Oe=function(n,t){return(0,K.render)(n,t),{unmount:function(){return(0,K.unmountComponentAtNode)(t)}}};function Fe(e,n){Ae(e,Oe,n)}let Pe=Fe;pe.exports=S})()});export{ve as a,Ke as b};
