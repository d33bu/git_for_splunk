import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as a}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as s}from"../chunks/chunk-25J5MIFG.js";import{h as n}from"../chunks/chunk-ME4V5RLK.js";var i={dataSources:{ds_link:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:"| inputlookup examples.csv| fields link*| search link_ip_address!=null"},name:"Search_1"}},inputs:{},title:"Link Graph",description:"Visualize links between fields",visualizations:{viz_lvFt7DS6:{type:"splunk.linkgraph",dataSources:{primary:"ds_link"},title:"Link Graph",showProgressBar:!1,showLastUpdated:!1,description:"Default configuration",options:{nodeHeight:30,nodeSpacingX:70,nodeSpacingY:20,linkWidth:2}},viz_bHf2plmY:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.linkgraph",
    "dataSources": {
        "primary": "ds_link"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_oiBQgD6v:{type:"splunk.markdown",options:{markdown:`## Overview

The link graph shows the connections between distinct values in various fields. It highlights relationships between entities, where nodes are the entities and lines are the links between them. Values within a specific field are displayed in a column. The aggregated node values allow users to quickly visualize highly connected data points that may be otherwise overlooked.

The following examples use this query:

### SPL Query
\`\`\`
| inputlookup examples.csv
| fields link*
| search link_ip_address!=null
\`\`\`


`}},viz_pt7pepDM:{type:"splunk.linkgraph",dataSources:{primary:"ds_link"},title:"Link Graph",description:"Color, Layout and Display Options",options:{nodeHighlightColor:"#5a4575",linkColor:"#5a4575",backgroundColor:"transparent",nodeColor:"transparent",nodeWidth:200,nodeHeight:40,linkWidth:3,showNodeCounts:!1,showValueCounts:!1}},viz_rfj0B7PE:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.linkgraph",
    "dataSources": {
        "primary": "ds_link"
    },
    "options": {
        "nodeHighlightColor": "#5a4575",
        "linkColor": "#5a4575",
        "backgroundColor": "transparent",
        "nodeColor": "transparent",
        "nodeWidth": 200,
        "nodeHeight": 40,
        "linkWidth": 3,
        "showNodeCounts": false,
        "showValueCounts": false
    },
    "context": {}
}
\`\`\``}}},layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_oiBQgD6v",type:"block",position:{x:0,y:0,w:1440,h:300}},{item:"viz_lvFt7DS6",type:"block",position:{x:0,y:300,w:752,h:461}},{item:"viz_pt7pepDM",type:"block",position:{x:0,y:761,w:752,h:559}},{item:"viz_bHf2plmY",type:"block",position:{x:752,y:300,w:448,h:461}},{item:"viz_rfj0B7PE",type:"block",position:{x:752,y:761,w:448,h:559}}]}},globalInputs:[]}};var o=n(a()),t=n(s());(0,o.default)(t.default.createElement(e,{definition:i}),{pageTitle:"Link Graph",hideFooter:!0,layout:"fixed"});
