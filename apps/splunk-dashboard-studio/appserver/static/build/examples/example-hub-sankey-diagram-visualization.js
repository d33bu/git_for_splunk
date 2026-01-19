import{a as n}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as a}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var t={dataSources:{ds_sankey:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:"| inputlookup examples.csv| fields sankey*| search sankey_source!=null"},name:"Search_1"}},inputs:{},title:"Sankey Diagram",description:"Sankey diagrams help represent flow of resources",visualizations:{viz_lvFt7DS6:{type:"splunk.sankey",dataSources:{primary:"ds_sankey"},title:"Default Configuration"},viz_bHf2plmY:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.sankey",
    "dataSources": {
        "primary": "ds_sankey"
    },
    "title": "Default Configuration",
    "options": {},
    "context": {}
}
\`\`\``}},viz_oiBQgD6v:{type:"splunk.markdown",options:{markdown:`## Overview

Sankey Diagrams are used to depict flows from a set of elements to another, by using nodes to represent the features and links to visualize their connections. Sankey's are effective at showing multi-stage workflows with a many-to-many mapping. Colors are used to separate elements and the width of the links measure proportion of magnitude. 

The data returned in your query must return a source field, a target field, and a value field which represents the width of the source nodes. You can also have another value field to represent color. This example uses the following query for the Sankey Diagram:

### SPL Query
\`\`\`
| inputlookup examples.csv
| fields sankey*
| search sankey_source!=null
\`\`\`
`}},viz_878tCgMf:{type:"splunk.sankey",dataSources:{primary:"ds_sankey"},title:"Link Value Field Specified",options:{linkValues:"> primary | seriesByName('sankey_value2')"}},viz_wUeFsjNM:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.sankey",
    "dataSources": {
        "primary": "ds_sankey"
    },
    "title": "Link Value Field Specified",
    "options": {
        "linkValues": "> primary | seriesByName('sankey_value2')"
    },
    "context": {}
}
\`\`\``}},viz_OsVncfnW:{type:"splunk.sankey",dataSources:{primary:"ds_sankey"},title:"Link Opacity",options:{linkOpacity:.8}},viz_PL28GOPg:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.sankey",
    "dataSources": {
        "primary": "ds_sankey"
    },
    "title": "Link Opacity",
    "options": {
        "linkOpacity": 0.8
    },
    "context": {}
}
\`\`\``}}},layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_oiBQgD6v",type:"block",position:{x:0,y:0,w:1440,h:312}},{item:"viz_lvFt7DS6",type:"block",position:{x:0,y:312,w:723,h:400}},{item:"viz_878tCgMf",type:"block",position:{x:0,y:712,w:723,h:400}},{item:"viz_OsVncfnW",type:"block",position:{x:0,y:1112,w:723,h:400}},{item:"viz_bHf2plmY",type:"block",position:{x:723,y:312,w:477,h:400}},{item:"viz_wUeFsjNM",type:"block",position:{x:723,y:712,w:477,h:400}},{item:"viz_PL28GOPg",type:"block",position:{x:723,y:1112,w:477,h:400}}]}},globalInputs:[]}};var i=e(s()),o=e(a());(0,i.default)(o.default.createElement(n,{definition:t}),{pageTitle:"Sankey Diagram",hideFooter:!0,layout:"fixed"});
