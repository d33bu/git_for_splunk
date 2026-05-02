import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as r}from"../chunks/chunk-YESDDU4C.js";import{h as o}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_OPQATCGl:{type:"splunk.fillergauge",dataSources:{primary:"ds_search1"},options:{gaugeColor:"> value | rangeValue(gaugeColorEditorConfig)"},title:"Filler Gauge",description:"Conditional coloring",context:{gaugeColorEditorConfig:[{value:"#252214",to:9},{value:"#253223",from:9,to:29},{value:"#244333",from:29,to:60},{value:"#245442",from:60,to:70},{value:"#246451",from:70,to:80},{value:"#237561",from:80,to:90},{value:"#238570",from:90}]},showProgressBar:!1,showLastUpdated:!1},viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
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
