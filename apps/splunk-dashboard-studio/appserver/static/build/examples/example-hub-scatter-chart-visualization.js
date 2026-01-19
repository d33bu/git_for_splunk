import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as a}from"../chunks/chunk-25J5MIFG.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_6nQA9HbF:{type:"splunk.markdown",options:{markdown:`## Overview
Scatter charts are used to identify correlations between discrete points by plotting multiple data points on a graph. The shape that the points make can indicate positive, negative or no correlation between the fields on the x and y axis. Multiple series can also be plotted, with each series being a separate color. 

Using the \`table\` command to return three columns is a good rule of thumb when plotting a scatter chart. By default, the order of columns returned would map to the x-axis, y-axis, and the categories of interest respectively. 

`}},viz_dEmLSTLC:{type:"splunk.scatter",dataSources:{primary:"ds_scatter"},title:"Scatter Chart",description:"Default Configuration"},viz_DWRcsfE2:{type:"splunk.markdown",options:{markdown:`### SPL Query
\`\`\`
| inputlookup examples.csv
| fields nutrients*
| search "nutrients_protein (g)" != null
| head 500
| table "nutrients_protein (g)" nutrients_calories  nutrients_group
\`\`\`
### Source Definition 
\`\`\`
{
    "type": "splunk.scatter",
    "dataSources": {
        "primary": "ds_scatter"
    },
    "options": {},
    "context": {}
}

\`\`\``}},viz_DsjRH59i:{type:"splunk.scatter",options:{x:"> primary | seriesByName('nutrients_calories')",y:"> primary | seriesByName('nutrients_protein (g)')",markerSize:1},dataSources:{primary:"ds_scatter"},title:"Scatter Chart",description:"X and Y Fields Specified, Smaller Markers"},viz_G2zjCGiT:{type:"splunk.markdown",options:{markdown:`### Source Definition 
\`\`\`
{
    "type": "splunk.scatter",
    "options": {
        "x": "> primary | seriesByName('nutrients_calories')",
        "y": "> primary | seriesByName('nutrients_protein (g)')",
        "markerSize": 1
    },
    "dataSources": {
        "primary": "ds_scatter"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_scatter:{type:"ds.search",options:{query:'| inputlookup examples.csv| fields nutrients*| search "nutrients_protein (g)" != null| head 500| table "nutrients_protein (g)" nutrients_calories  nutrients_group',queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Examine correlations in your data",title:"Scatter Chart",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_6nQA9HbF",type:"block",position:{x:0,y:0,w:1440,h:158}},{item:"viz_dEmLSTLC",type:"block",position:{x:0,y:158,w:694,h:400}},{item:"viz_DsjRH59i",type:"block",position:{x:0,y:558,w:694,h:400}},{item:"viz_DWRcsfE2",type:"block",position:{x:694,y:158,w:506,h:400}},{item:"viz_G2zjCGiT",type:"block",position:{x:694,y:558,w:506,h:400}}]}},globalInputs:[]}};var n=t(s()),r=t(a());(0,n.default)(r.default.createElement(e,{definition:i}),{pageTitle:"Scatter Chart",hideFooter:!0,layout:"fixed"});
