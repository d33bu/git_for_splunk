import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as a}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as s}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_n4X3Gy80:{type:"splunk.markdown",options:{markdown:`## Overview
Drilldowns can be used to direct users to another URL by interacting with a visualization on the dashboard. The configuration can be done through the UI editor and can force a new tab to open when the drilldown is triggered. 

In this example, we also showcase how one can use a dropdown to select a URL and have the drilldown be different depending on the URL being selected. `}},viz_dq5gn4D8:{type:"splunk.singlevalue",dataSources:{primary:"ds_search1"},eventHandlers:[{type:"drilldown.customUrl",options:{url:"https://docs.splunk.com/Documentation/SplunkCloud/latest/DashStudio/IntroFrame",newTab:!0}}],title:"Link To Dashboard Docs"},viz_dZTClhP1:{type:"splunk.singlevalue",dataSources:{primary:"ds_search1"},eventHandlers:[{type:"drilldown.customUrl",options:{url:"$web$",newTab:!0}}],title:"Link to Website in Dropdown"},viz_tQCsZrf1:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalue",
    "options": {},
    "dataSources": {
        "primary": "ds_search1"
    },
    "eventHandlers": [
        {
            "type": "drilldown.customUrl",
            "options": {
                "url": "https://docs.splunk.com/Documentation/SplunkCloud/latest/DashStudio/IntroFrame",
                "newTab": true
            }
        }
    ],
    "context": {}
}
\`\`\`
`}},viz_63iFyFet:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalue",
    "options": {},
    "dataSources": {
        "primary": "ds_search1"
    },
    "eventHandlers": [
        {
            "type": "drilldown.customUrl",
            "options": {
                "url": "$website$",
                "newTab": true
            }
        }
    ],
    "context": {}
}
\`\`\`
`}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults 
| eval SV= "Click Here"`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_g8i6DHFR:{options:{items:[{label:"Splunk Dev",value:"https://dev.splunk.com/"},{label:"Splunk Products",value:"https://www.splunk.com/en_us/software.html"},{label:"Splunk Docs",value:"https://docs.splunk.com"}],defaultValue:"https://dev.splunk.com/",token:"web"},title:"Select Website",type:"input.dropdown"}},description:"Direct users to external URLs by interacting with the dashboard",title:"Drilldown to Custom URL",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_n4X3Gy80",type:"block",position:{x:0,y:0,w:1440,h:151}},{item:"viz_dq5gn4D8",type:"block",position:{x:0,y:151,w:600,h:118}},{item:"viz_tQCsZrf1",type:"block",position:{x:0,y:269,w:600,h:389}},{item:"viz_dZTClhP1",type:"block",position:{x:600,y:151,w:600,h:118}},{item:"viz_63iFyFet",type:"block",position:{x:600,y:269,w:600,h:389}}]}},globalInputs:["input_g8i6DHFR"]}};var o=e(a()),i=e(s());(0,o.default)(i.default.createElement(t,{definition:n}),{pageTitle:"Drilldown to Custom URL",hideFooter:!0,layout:"fixed"});
