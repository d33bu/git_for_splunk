import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as a}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_6nQA9HbF:{type:"splunk.markdown",options:{markdown:"## Overview\nBubble charts are useful for finding correlation between three or four dimensions of data. The first two dimensions are the coordinates of the chart, the third is the size of the bubble and the fourth is the color of the bubble. When comparing multiple categories, color can be an easy way to differentiate between bubbles on the chart.\n\nThe best way to generate a bubble chart is to have a search that returns multiple data series, which can be done with a `stats` command. Leverage the visualization DSL in the options to control your `x`, `y` and `category` fields for finer control which is an alternate to formatting your SPL. In the following examples we use a combination of SPL and DSL to format the fields correctly.\n"}},viz_dEmLSTLC:{type:"splunk.bubble",dataSources:{primary:"ds_search1"},title:"Bubble Chart",description:"Default Configuration"},viz_DWRcsfE2:{type:"splunk.markdown",options:{markdown:`### SPL Query
\`\`\`
| inputlookup examples.csv| fields nutrients*
| search "nutrients_protein (g)" != null| head 500
| table "nutrients_protein (g)" nutrients_calories "nutrients_carbohydrate (g)" nutrients_group
\`\`\`

### Source Definition 
\`\`\`
{
    "type": "splunk.bubble",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {},
}
\`\`\``}},viz_DsjRH59i:{type:"splunk.bubble",options:{category:"> primary | seriesByIndex(3)"},dataSources:{primary:"ds_search1"},title:"Bubble Chart",description:"Fields Specified"},viz_G2zjCGiT:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "splunk.bubble",
    "options": {
        "category": "> primary | seriesByIndex(3)"
    },
    "dataSources": {
        "primary": "ds_dczSkyIq"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:'| inputlookup examples.csv| fields nutrients*| search "nutrients_protein (g)" != null| head 500| table "nutrients_protein (g)" nutrients_calories "nutrients_carbohydrate (g)" nutrients_group',queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Use bubble charts to represent data in three dimensions",title:"Bubble Chart",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_6nQA9HbF",type:"block",position:{x:0,y:0,w:1440,h:217}},{item:"viz_dEmLSTLC",type:"block",position:{x:0,y:217,w:704,h:418}},{item:"viz_DsjRH59i",type:"block",position:{x:0,y:635,w:704,h:382}},{item:"viz_DWRcsfE2",type:"block",position:{x:704,y:217,w:496,h:418}},{item:"viz_G2zjCGiT",type:"block",position:{x:704,y:635,w:496,h:382}}]}},globalInputs:[]}};var i=e(a()),o=e(r());(0,i.default)(o.default.createElement(t,{definition:n}),{pageTitle:"Bubble Chart",hideFooter:!0,layout:"fixed"});
