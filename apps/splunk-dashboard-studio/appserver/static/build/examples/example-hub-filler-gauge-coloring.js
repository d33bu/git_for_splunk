import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as i}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as o}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_OPQATCGl:{type:"splunk.fillergauge",dataSources:{primary:"ds_search1"},options:{gaugeColor:"> value | rangeValue(gaugeColorEditorConfig)"},title:"Filler Gauge",description:"Conditional coloring",context:{gaugeColorEditorConfig:[{value:"#252214",to:9},{value:"#253223",from:9,to:29},{value:"#244333",from:29,to:60},{value:"#245442",from:60,to:70},{value:"#246451",from:70,to:80},{value:"#237561",from:80,to:90},{value:"#238570",from:90}]},showProgressBar:!1,showLastUpdated:!1},viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
A Filler gauges shows value ranges and colors with a Filler that moves to indicate the current value. This page shows available coloring options for filler gauges.

The following examples use this makeresults query
### SPL
\`\`\`
| makeresults
| eval count= random()%100
| fields count
\`\`\``}},viz_02J4knli:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "gaugeColor": "> value | rangeValue(gaugeColorEditorConfig)"
    },
    "context": {
        "gaugeColorEditorConfig": [
            {
                "value": "#252214",
                "to": 9
            },
            {
                "value": "#253223",
                "from": 9,
                "to": 29
            },
            {
                "value": "#244333",
                "from": 29,
                "to": 60
            },
            {
                "value": "#245442",
                "from": 60,
                "to": 70
            },
            {
                "value": "#246451",
                "from": 70,
                "to": 80
            },
            {
                "value": "#237561",
                "from": 80,
                "to": 90
            },
            {
                "value": "#238570",
                "from": 90
            }
        ]
    }
}
\`\`\``}},viz_8DHPZzts:{type:"splunk.fillergauge",options:{orientation:"horizontal",backgroundColor:"#5a4575"},dataSources:{primary:"ds_search1"},title:"Filler Gauge",description:"Horizontal, Background Purple",showProgressBar:!1,showLastUpdated:!1},viz_wTp98CwR:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.fillergauge",
    "options": {
        "orientation": "horizontal",
        "backgroundColor": "#5a4575"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count=random()%100
| fields count`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust Coloring for Filler Gauges",title:"Filler Gauge Coloring",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_omCpZ2ww",type:"block",position:{x:0,y:0,w:1440,h:268}},{item:"viz_OPQATCGl",type:"block",position:{x:0,y:268,w:300,h:462}},{item:"viz_02J4knli",type:"block",position:{x:300,y:268,w:300,h:462}},{item:"viz_8DHPZzts",type:"block",position:{x:600,y:268,w:294,h:462}},{item:"viz_wTp98CwR",type:"block",position:{x:894,y:268,w:306,h:462}}]}},globalInputs:[]}};var t=o(i()),a=o(r());(0,t.default)(a.default.createElement(e,{definition:n}),{pageTitle:"Filler Gauge Coloring",hideFooter:!0,layout:"fixed"});
