import{a}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_fKWCh9Ee:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalueradial",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Single Value Radial",
    "description": "Trend Off",
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false,
    "options": {
        "majorValue": "> primary | seriesByIndex(0) | lastPoint()",
        "trendValue": "> primary | seriesByIndex(0) | delta(-2)",
        "trendDisplay": "off"
    }
}
\`\`\``}},viz_aik8jLHV:{type:"splunk.singlevalueradial",dataSources:{primary:"ds_search1"},title:"Single Value Radial",description:"Unit, Precision, Custom Background Color,  Trend as %, Label",showProgressBar:!1,showLastUpdated:!1,options:{majorValue:"> primary | seriesByIndex(0) | lastPoint()",trendValue:"> primary | seriesByIndex(0) | delta(-2)",unit:"$",unitPosition:"before",numberPrecision:2,underLabel:"Sample Label",trendDisplay:"percent"}},viz_iRCGXrSr:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalueradial",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Single Value Radial",
    "description": "Unit, Precision, Custom Background Color,  Trend as %, Label",
    "showProgressBar": false,
    "showLastUpdated": false,
    "options": {
        "majorValue": "> primary | seriesByIndex(0) | lastPoint()",
        "trendValue": "> primary | seriesByIndex(0) | delta(-2)",
        "unit": "$",
        "unitPosition": "before",
        "numberPrecision": 2,
        "underLabel": "Sample Label",
        "trendDisplay": "percent"
    },
    "context": {}
}
\`\`\``}},viz_kK99DS2i:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalueradial",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Single Value Radial",
    "description": "Default SVR",
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false,
    "options": {
        "majorValue": "> primary | seriesByIndex(0) | lastPoint()",
        "trendValue": "> primary | seriesByIndex(0) | delta(-2)"
    }
}
\`\`\``}},viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview

A single value is used for showing a metric or KPI and its related context. Single value visualizations display results and context for searches returning a discrete number. A single value can be a count or other aggregation of specific events. 

Any query returning aggregate data using the \`stats\` command is suitable for a Single Value. You can also use a \`timechart\` command to generate a sparkline and then use the visualization DSL to control the major and delta values.

This page covers the basic functionality of a Single Value Radial visualization, which is similar to a regular single value however it shows context with a radial gauge and delta value indicator rather than a sparkline. 


### SPL for Single Value Radial
\`\`\`
| makeresults
| eval count = random() % 1000
| append
[| makeresults | eval count = random() % 1000]
| fields count
\`\`\``}},viz_64v6gAPa:{type:"splunk.singlevalueradial",dataSources:{primary:"ds_search1"},title:"Single Value Radial",description:"Default SVR",context:{},showProgressBar:!1,showLastUpdated:!1,options:{majorValue:"> primary | seriesByIndex(0) | lastPoint()",trendValue:"> primary | seriesByIndex(0) | delta(-2)"}},viz_dKCDzdJs:{type:"splunk.singlevalueradial",dataSources:{primary:"ds_search1"},title:"Single Value Radial",description:"Trend Off",context:{},showProgressBar:!1,showLastUpdated:!1,options:{majorValue:"> primary | seriesByIndex(0) | lastPoint()",trendValue:"> primary | seriesByIndex(0) | delta(-2)",trendDisplay:"off"}},viz_lKJ8gmA9:{type:"splunk.singlevalueradial",title:"Single Value Radial",dataSources:{primary:"ds_search1"},description:"Max Value 1000, Radial Stroke and Background Color",showProgressBar:!1,showLastUpdated:!1,options:{majorValue:"> primary | seriesByIndex(0) | lastPoint()",trendValue:"> primary | seriesByIndex(0) | delta(-2)",radialBackgroundColor:"#DC4E41",radialStrokeColor:"#F1813F",maxValue:1e3}},viz_UKMG3TLk:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.singlevalueradial",
    "title": "Single Value Radial",
    "dataSources": {
        "primary": "ds_search1"
    },
    "description": "Radial Stroke and Background Color",
    "showProgressBar": false,
    "showLastUpdated": false,
    "options": {
        "majorValue": "> primary | seriesByIndex(0) | lastPoint()",
        "trendValue": "> primary | seriesByIndex(0) | delta(-2)",
        "radialBackgroundColor": "#DC4E41",
        "radialStrokeColor": "#F1813F",
        "maxValue": 1000
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count = random() % 1000
| append
[| makeresults | eval count = random() % 1000]
| fields count`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Represent high level metrics and their context with a radial gauge",title:"Single Value Radial",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_YxUwAzLI",type:"block",position:{x:0,y:0,w:1440,h:317}},{item:"viz_64v6gAPa",type:"block",position:{x:0,y:317,w:333,h:311}},{item:"viz_aik8jLHV",type:"block",position:{x:0,y:628,w:333,h:360}},{item:"viz_kK99DS2i",type:"block",position:{x:333,y:317,w:267,h:311}},{item:"viz_iRCGXrSr",type:"block",position:{x:333,y:628,w:267,h:360}},{item:"viz_dKCDzdJs",type:"block",position:{x:600,y:317,w:296,h:311}},{item:"viz_lKJ8gmA9",type:"block",position:{x:600,y:628,w:300,h:360}},{item:"viz_fKWCh9Ee",type:"block",position:{x:896,y:317,w:304,h:311}},{item:"viz_UKMG3TLk",type:"block",position:{x:900,y:628,w:300,h:360}}]}},globalInputs:[]}};var i=e(s()),t=e(r());(0,i.default)(t.default.createElement(a,{definition:n}),{pageTitle:"Single Value Radial",hideFooter:!0,layout:"fixed"});
