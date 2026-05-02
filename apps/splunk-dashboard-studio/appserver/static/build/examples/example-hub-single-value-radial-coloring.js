import{a}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as l}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as t}from"../chunks/chunk-YESDDU4C.js";import{h as n}from"../chunks/chunk-ME4V5RLK.js";var e={visualizations:{viz_kK99DS2i:{type:"splunk.markdown",options:{markdown:`### Source Definition
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
