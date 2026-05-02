import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as r}from"../chunks/chunk-YESDDU4C.js";import{h as o}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
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
