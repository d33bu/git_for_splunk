import{a as n}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_ex9bx0og:{type:"splunk.markdown",options:{markdown:`## Overview

Punchcards can visualize cyclical trends in your data. Using a punchcard, you can see relative values for a metric where the dimensions intersect.

A punchcard can be used with any data using some sort of timestamp and a metric you want to track. You can also use a query that returns a another field indicating color to visually separate categories, examples for coloring can be seen in the Punchcard Coloring page.`}},viz_U1QozhCt:{type:"splunk.punchcard",dataSources:{primary:"ds_search1"},title:"Punchcard",description:"Default Configuration, global row scale, bubble scale area",options:{},context:{},showProgressBar:!1,showLastUpdated:!1},viz_g1eVJOyU:{type:"splunk.markdown",options:{markdown:`### SPL Query
\`\`\`
| inputlookup examples.csv
| where punch_count > 0
| fields punch_hour punch_day punch_count punch_region
\`\`\`

### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}

\`\`\``}},viz_EdD4tUJI:{type:"splunk.punchcard",options:{bubbleLabelDisplay:"off",showDefaultSort:!0},dataSources:{primary:"ds_search1"},title:"Punchcard",description:"No Label on bubbles,  sort axis labels",showProgressBar:!1,showLastUpdated:!1},viz_whIwQh9E:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "options": {
        "bubbleLabelDisplay": "off",
	       "showDefaultSort":true
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}

\`\`\``}},viz_vfZZQhO2:{type:"splunk.punchcard",options:{bubbleRowScale:"row",bubbleLabelDisplay:"max"},dataSources:{primary:"ds_search1"},title:"Punchcard",description:"Bubble label on max value, bubble row scale per row, bubble scale radius",showProgressBar:!1,showLastUpdated:!1},viz_kUufQvMu:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "options": {
        "bubbleRowScale": "row",
        "bubbleLabelDisplay": "max"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}

\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup examples.csv
| where punch_count > 0
| fields punch_hour punch_day punch_count punch_region`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Aggregate metrics over two dimensions to visualize cyclical trends in your data",title:"Punchcards",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_ex9bx0og",type:"block",position:{x:0,y:0,w:1440,h:180}},{item:"viz_U1QozhCt",type:"block",position:{x:0,y:180,w:748,h:400}},{item:"viz_EdD4tUJI",type:"block",position:{x:0,y:580,w:748,h:400}},{item:"viz_vfZZQhO2",type:"block",position:{x:0,y:980,w:748,h:400}},{item:"viz_g1eVJOyU",type:"block",position:{x:748,y:180,w:452,h:400}},{item:"viz_whIwQh9E",type:"block",position:{x:748,y:580,w:452,h:400}},{item:"viz_kUufQvMu",type:"block",position:{x:748,y:980,w:452,h:400}}]}},globalInputs:[]}};var t=e(s()),a=e(i());(0,t.default)(a.default.createElement(n,{definition:o}),{pageTitle:"Punchcard",hideFooter:!0,layout:"fixed"});
