import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as a}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as s}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_n4X3Gy80:{type:"splunk.markdown",options:{markdown:`## Overview
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
