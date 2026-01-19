import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as i}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as o}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
A marker gauge shows value ranges and colors with a marker that moves to indicate one single value from a datasource. It is best used to track KPI's as part of a larger goal or to indicate progression or health. This page shows available coloring options for marker gauges.

The following examples use the following \`makeresults\` query
### SPL
\`\`\`
| makeresults
| eval count=random()%100
| fields count
\`\`\``}},viz_8DHPZzts:{type:"splunk.markergauge",options:{orientation:"horizontal",backgroundColor:"#5a4575",gaugeRanges:[{from:100,value:"#53a051",to:110},{from:80,value:"#f1813f",to:100},{from:70,value:"#dc4e41",to:80},{from:60,value:"#f8be34",to:70},{from:50,to:60,value:"#CBA700"},{from:20,value:"#0877a6",to:50},{from:0,to:20,value:"#118832"}]},dataSources:{primary:"ds_search1"},title:"Marker Gauge",description:"Horizontal, Background Purple, additional Range",showProgressBar:!1,showLastUpdated:!1},viz_wTp98CwR:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.markergauge",
    "options": {
        "orientation": "horizontal",
        "backgroundColor": "#5a4575",
        "gaugeRanges": [
            {
                "from": 100,
                "value": "#53a051",
                "to": 110
            },
            {
                "from": 80,
                "value": "#f1813f",
                "to": 100
            },
            {
                "from": 70,
                "value": "#dc4e41",
                "to": 80
            },
            {
                "from": 60,
                "value": "#f8be34",
                "to": 70
            },
            {
                "from": 50,
                "to": 60,
                "value": "#CBA700"
            },
            {
                "from": 20,
                "value": "#0877a6",
                "to": 50
            },
            {
                "from": 0,
                "to": 20,
                "value": "#118832"
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count= random()%100
| fields count`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust Coloring for Marker Gauges",title:"Marker Gauge Coloring",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_omCpZ2ww",type:"block",position:{x:0,y:0,w:1440,h:268}},{item:"viz_8DHPZzts",type:"block",position:{x:0,y:268,w:440,h:498}},{item:"viz_wTp98CwR",type:"block",position:{x:440,y:268,w:760,h:498}}]}},globalInputs:[]}};var n=o(i()),t=o(r());(0,n.default)(t.default.createElement(e,{definition:a}),{pageTitle:"Marker Gauge Coloring",hideFooter:!0,layout:"fixed"});
