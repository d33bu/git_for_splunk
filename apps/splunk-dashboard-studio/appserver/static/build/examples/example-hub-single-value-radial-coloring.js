import{a}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as l}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as t}from"../chunks/chunk-25J5MIFG.js";import{h as n}from"../chunks/chunk-ME4V5RLK.js";var e={visualizations:{viz_kK99DS2i:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalueradial",
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {
        "fillRangeValueContext": [
            {
                "from": 100,
                "value": "#cb3b43"
            },
            {
                "from": 70,
                "to": 100,
                "value": "#ff7152"
            },
            {
                "from": 50,
                "to": 70,
                "value": "#fc9850"
            },
            {
                "from": 30,
                "to": 50,
                "value": "#f4df7a"
            },
            {
                "from": 10,
                "to": 30,
                "value": "#4beba8"
            },
            {
                "to": 10,
                "value": "#5fbcff"
            }
        ],
        "backgroundColorEditorConfig": [
            {
                "value": "#D41F1F",
                "to": 100
            },
            {
                "value": "#D94E17",
                "from": 100,
                "to": 200
            },
            {
                "value": "#CBA700",
                "from": 200,
                "to": 300
            },
            {
                "value": "#669922",
                "from": 300,
                "to": 400
            },
            {
                "value": "#118832",
                "from": 400
            }
        ]
    },
    "showProgressBar": false,
    "showLastUpdated": false,
    "options": {
        "majorValue": "> primary | seriesByIndex(0) | lastPoint()",
        "trendValue": "> primary | seriesByIndex(0) | delta(-2)",
        "backgroundColor": "> majorValue | rangeValue(backgroundColorEditorConfig)"
    },
}
\`\`\``}},viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview

A single value is used for showing a metric or KPI and its related context. Single value visualizations display results and context for searches returning a discrete number. A single value can be a count or other aggregation of specific events. 

Any query returning aggregate data using the \`stats\` command is suitable for a Single Value. You can also use a \`timechart\` command to generate a sparkline and then use the visualization DSL to control the major and delta values.

This page covers the coloring options of a Single Value Radial visualization, which is similar to a regular single value however it shows context with a radial gauge and delta value indicator rather than a sparkline. 


### SPL for Single Value Radial
\`\`\`
| makeresults
| eval count = random() % 1000
| append
[| makeresults | eval count = random() % 1000]
| fields count
\`\`\``}},viz_2m8dKv9L:{type:"splunk.singlevalueradial",dataSources:{primary:"ds_search1"},context:{fillRangeValueContext:[{from:100,value:"#cb3b43"},{from:70,to:100,value:"#ff7152"},{from:50,to:70,value:"#fc9850"},{from:30,to:50,value:"#f4df7a"},{from:10,to:30,value:"#4beba8"},{to:10,value:"#5fbcff"}],backgroundColorEditorConfig:[{value:"#D41F1F",to:100},{value:"#D94E17",from:100,to:200},{value:"#CBA700",from:200,to:300},{value:"#669922",from:300,to:400},{value:"#118832",from:400}]},showProgressBar:!1,showLastUpdated:!1,options:{majorValue:"> primary | seriesByIndex(0) | lastPoint()",trendValue:"> primary | seriesByIndex(0) | delta(-2)",backgroundColor:"> majorValue | rangeValue(backgroundColorEditorConfig)"},title:"Dynamic Background"},viz_wHENNaGN:{type:"splunk.singlevalueradial",options:{majorColor:"> majorValue | rangeValue(majorColorEditorConfig)",trendColor:"> trendValue | rangeValue(trendColorEditorConfig)"},dataSources:{primary:"ds_search1"},context:{majorColorEditorConfig:[{value:"#D41F1F",to:100},{value:"#D94E17",from:100,to:200},{value:"#CBA700",from:200,to:300},{value:"#669922",from:300,to:400},{value:"#118832",from:400}],trendColorEditorConfig:[{to:0,value:"#9E2520"},{from:0,value:"#1C6B2D"}]},title:"Dynamic Major Value and Trend"},viz_Ewb9FDj6:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalueradial",
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {
        "fillRangeValueContext": [
            {
                "from": 100,
                "value": "#cb3b43"
            },
            {
                "from": 70,
                "to": 100,
                "value": "#ff7152"
            },
            {
                "from": 50,
                "to": 70,
                "value": "#fc9850"
            },
            {
                "from": 30,
                "to": 50,
                "value": "#f4df7a"
            },
            {
                "from": 10,
                "to": 30,
                "value": "#4beba8"
            },
            {
                "to": 10,
                "value": "#5fbcff"
            }
        ],
        "backgroundColorEditorConfig": [
            {
                "value": "#D41F1F",
                "to": 100
            },
            {
                "value": "#D94E17",
                "from": 100,
                "to": 200
            },
            {
                "value": "#CBA700",
                "from": 200,
                "to": 300
            },
            {
                "value": "#669922",
                "from": 300,
                "to": 400
            },
            {
                "value": "#118832",
                "from": 400
            }
        ]
    },
    "showProgressBar": false,
    "showLastUpdated": false,
    "options": {
        "majorValue": "> primary | seriesByIndex(0) | lastPoint()",
        "trendValue": "> primary | seriesByIndex(0) | delta(-2)",
        "backgroundColor": "> majorValue | rangeValue(backgroundColorEditorConfig)"
    },
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count = random() % 1000
| append
[| makeresults| eval count = random() % 1000]
| fields count`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Dynamically color various parts of the Single Value Radial visualization based on your data",title:"Single Value Radial Coloring",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_YxUwAzLI",type:"block",position:{x:0,y:0,w:1440,h:418}},{item:"viz_2m8dKv9L",type:"block",position:{x:0,y:418,w:603,h:380}},{item:"viz_wHENNaGN",type:"block",position:{x:0,y:798,w:603,h:400}},{item:"viz_kK99DS2i",type:"block",position:{x:603,y:418,w:597,h:380}},{item:"viz_Ewb9FDj6",type:"block",position:{x:603,y:798,w:597,h:400}}]}},globalInputs:[]}};var o=n(l()),r=n(t());(0,o.default)(r.default.createElement(a,{definition:e}),{pageTitle:"Single Value Radial Coloring",hideFooter:!0,layout:"fixed"});
