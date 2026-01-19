import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as a}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={dataSources:{ds_parallel:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:'| inputlookup examples.csv| fields nutrients*| search "nutrients_protein (g)" != null| stats count by nutrients_group nutrients_calories "nutrients_protein (g)" "nutrients_water (g)" | fields - count'},name:"Search_1"}},inputs:{},title:"Parallel Coordinates",description:"Visualize Correlations in multi-dimensional datasets",visualizations:{viz_lvFt7DS6:{type:"splunk.parallelcoordinates",dataSources:{primary:"ds_parallel"},title:"Parallel Coordinates",showProgressBar:!1,showLastUpdated:!1,description:"Default configuration"},viz_bHf2plmY:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.parallelcoordinates",
    "dataSources": {
        "primary": "ds_parallel"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_oiBQgD6v:{type:"splunk.markdown",options:{markdown:`## Overview

Parallel coordinates are used to depict relationships in multi-dimensional datasets. This visualization is ideal for comparing many variables together and seeing the relationships between them. Each variable is given its own axis and corresponding scale. Lines then map item values for each variable. The ordering of axes can help discover patterns or correlations across variables.

The order of the columns returned would be the order of the axes shown in the chart. The direction of the lines indicate the correlation between the axes for that particular data point. The following examples use this query:

### SPL Query
\`\`\`
| inputlookup examples.csv
| fields nutrients*
| search "nutrients_protein (g)" != null
| stats count by nutrients_group nutrients_calories "nutrients_protein (g)" "nutrients_water (g)" 
| fields - count
\`\`\` `}},viz_878tCgMf:{type:"splunk.parallelcoordinates",dataSources:{primary:"ds_parallel"},title:"Parallel Coordinates",showProgressBar:!1,showLastUpdated:!1,options:{lineColor:"#FFC0CB",lineOpacity:.3},description:"Line Color and Opacity"},viz_wUeFsjNM:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.parallelcoordinates",
    "dataSources": {
        "primary": "ds_parallel"
    },
    "options": {
        "lineColor": "#FFC0CB",
        "lineOpacity": 0.3
    },
    "context": {}
}
\`\`\``}},viz_OsVncfnW:{type:"splunk.parallelcoordinates",dataSources:{primary:"ds_parallel"},title:"Parallel Coordinates",showProgressBar:!1,showLastUpdated:!1,options:{showNullAxis:!1},description:"Null Axis Hidden"},viz_PL28GOPg:{type:"splunk.markdown",options:{markdown:`### Source Definition

\`\`\`
{
    "type": "splunk.parallelcoordinates",
    "dataSources": {
        "primary": "ds_parallel"
    },
    "options": {
        "showNullAxis": false
    },
    "context": {}
}
\`\`\``}}},layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_oiBQgD6v",type:"block",position:{x:0,y:0,w:1440,h:321}},{item:"viz_lvFt7DS6",type:"block",position:{x:0,y:321,w:723,h:426}},{item:"viz_878tCgMf",type:"block",position:{x:0,y:747,w:723,h:391}},{item:"viz_OsVncfnW",type:"block",position:{x:0,y:1138,w:723,h:383}},{item:"viz_bHf2plmY",type:"block",position:{x:723,y:321,w:477,h:426}},{item:"viz_wUeFsjNM",type:"block",position:{x:723,y:747,w:477,h:391}},{item:"viz_PL28GOPg",type:"block",position:{x:723,y:1138,w:477,h:383}}]}},globalInputs:[]}};var i=e(s()),o=e(a());(0,i.default)(o.default.createElement(t,{definition:n}),{pageTitle:"Parallel Coordinates",hideFooter:!0,layout:"fixed"});
