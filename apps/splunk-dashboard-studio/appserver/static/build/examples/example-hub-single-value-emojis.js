import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview
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
