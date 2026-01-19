import{a as n}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as i}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_ex9bx0og:{type:"splunk.markdown",options:{markdown:`## Overview

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
