import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as a}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as s}from"../chunks/chunk-YESDDU4C.js";import{h as n}from"../chunks/chunk-ME4V5RLK.js";var i={dataSources:{ds_link:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:"| inputlookup examples.csv| fields link*| search link_ip_address!=null"},name:"Search_1"}},inputs:{},title:"Link Graph",description:"Visualize links between fields",visualizations:{viz_lvFt7DS6:{type:"splunk.linkgraph",dataSources:{primary:"ds_link"},title:"Link Graph",showProgressBar:!1,showLastUpdated:!1,description:"Default configuration",options:{nodeHeight:30,nodeSpacingX:70,nodeSpacingY:20,linkWidth:2}},viz_bHf2plmY:{type:"splunk.markdown",options:{markdown:`### Source Definition

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
