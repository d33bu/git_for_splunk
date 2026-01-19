import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as i}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview
A single value is used for showing a metric or KPI and its related context. Single value visualizations display results and context for searches returning a discrete number. A single value can be a count or other aggregation of specific events.

Any query returning aggregate data using the \`stats\` command is suitable for a Single Value. You can also use a \`timechart\` command to generate a sparkline and then use the visualization DSL to control the major and delta values.

This page covers how to use an emoji to represent a value using a case function in SPL, rather than displaying a number or string.`}},viz_U7wayoPl:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| makeresults 
| eval n="\u{1F333}\u{1F44D}"
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.singlevalue",
    "options": {
        "sparklineDisplay": "off",
        "trendDisplay": "off"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}},viz_xEWPDJdb:{type:"splunk.singlevalue",options:{sparklineDisplay:"off",trendDisplay:"off"},dataSources:{primary:"ds_search1"},context:{},title:"Basic Emoji"},viz_CJrQvPIi:{type:"splunk.singlevalue",options:{sparklineDisplay:"off",trendDisplay:"off"},dataSources:{primary:"ds_search2"},context:{},title:"Conditionally Chosen Emoji"},viz_LoduGjVj:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| makeresults
| eval count = random()%1000
| eval output=case(count<400,"\u2600\uFE0F", count>400 AND count<600,"\u{1F324}", count >600,"\u{1F326}")
| table output
| head 1
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.singlevalue",
    "options": {
        "sparklineDisplay": "off",
        "trendDisplay": "off"
    },
    "dataSources": {
        "primary": "ds_search2"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| makeresults 
| eval n="\u{1F333}\u{1F44D}"`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| makeresults
| eval count = random()%1000
| eval output=case(count<400,"\u2600\uFE0F", count>400 AND count<600,"\u{1F324}", count >600,"\u{1F326}")
| table output
| head 1`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Display high level insight by using Emojis to represent values",title:"Single Value with Emoji",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_YxUwAzLI",type:"block",position:{x:0,y:0,w:1440,h:148}},{item:"viz_xEWPDJdb",type:"block",position:{x:0,y:148,w:297,h:457}},{item:"viz_U7wayoPl",type:"block",position:{x:297,y:148,w:303,h:457}},{item:"viz_CJrQvPIi",type:"block",position:{x:600,y:148,w:307,h:457}},{item:"viz_LoduGjVj",type:"block",position:{x:907,y:148,w:293,h:457}}]}},globalInputs:[]}};var a=e(s()),o=e(i());(0,a.default)(o.default.createElement(t,{definition:n}),{pageTitle:"Single Value with Emoji",hideFooter:!0,layout:"fixed"});
