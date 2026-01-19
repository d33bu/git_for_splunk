import{a}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as i}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var t={visualizations:{viz_OPQATCGl:{type:"splunk.markergauge",dataSources:{primary:"ds_search1"},title:"Marker Gauge",description:"Default Confguration",options:{},context:{},showProgressBar:!1,showLastUpdated:!1},viz_omCpZ2ww:{type:"splunk.markdown",options:{markdown:`## Overview
A marker gauge shows value ranges and colors with a marker that moves to indicate a single value from a data source. It is best used to show a KPI or to indicate progression or service health. 

The following examples use the following \`makeresults\` query
### SPL
\`\`\`
| makeresults
| eval count= random()%100
| fields count
\`\`\``}},viz_02J4knli:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.markergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_8DHPZzts:{type:"splunk.markergauge",options:{orientation:"horizontal",labelDisplay:"off",backgroundColor:"transparent"},dataSources:{primary:"ds_search1"},title:"Marker Gauge",description:"Horizontal, Background Transparent, No Labels",showProgressBar:!1,showLastUpdated:!1},viz_wTp98CwR:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.markergauge",
    "options": {
        "orientation": "horizontal",
        "labelDisplay": "off",
        "backgroundColor": "transparent"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\``}},viz_89VZhpcS:{type:"splunk.markergauge",dataSources:{primary:"ds_search1"},title:"Marker Gauge",description:"Percentages for Value and Range",options:{labelDisplay:"percentage",valueDisplay:"percentage"},showProgressBar:!1,showLastUpdated:!1},viz_fUNTuXpK:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.markergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "labelDisplay": "percentage",
        "valueDisplay": "percentage"
    },
    "context": {}
}
\`\`\``}},viz_SvRSI63X:{type:"splunk.markergauge",title:"Marker Gauge",description:"Major Tick Marks in Units of 25",dataSources:{primary:"ds_search1"},showProgressBar:!1,showLastUpdated:!1,options:{majorTickInterval:25}},viz_4lxUHIyp:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.markergauge",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "majorTickInterval": 25
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults
| eval count= random()%100
| fields count`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Visualize a single numeric value and represent values in relation to a limit with a marker gauge",title:"Marker Gauge",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_omCpZ2ww",type:"block",position:{x:0,y:0,w:1440,h:268}},{item:"viz_OPQATCGl",type:"block",position:{x:0,y:268,w:300,h:311}},{item:"viz_89VZhpcS",type:"block",position:{x:0,y:579,w:300,h:332}},{item:"viz_02J4knli",type:"block",position:{x:300,y:268,w:300,h:311}},{item:"viz_fUNTuXpK",type:"block",position:{x:300,y:579,w:300,h:332}},{item:"viz_8DHPZzts",type:"block",position:{x:600,y:268,w:294,h:311}},{item:"viz_SvRSI63X",type:"block",position:{x:600,y:579,w:294,h:332}},{item:"viz_wTp98CwR",type:"block",position:{x:894,y:268,w:306,h:311}},{item:"viz_4lxUHIyp",type:"block",position:{x:894,y:579,w:306,h:332}}]}},globalInputs:[]}};var o=e(i()),n=e(r());(0,o.default)(n.default.createElement(a,{definition:t}),{pageTitle:"Marker Gauge",hideFooter:!0,layout:"fixed"});
