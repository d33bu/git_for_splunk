import{a as n}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var t={dataSources:{ds_sankey:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:"| inputlookup examples.csv| fields sankey*| search sankey_source!=null"},name:"Search_1"}},inputs:{},title:"Sankey Diagram",description:"Sankey diagrams help represent flow of resources",visualizations:{viz_lvFt7DS6:{type:"splunk.sankey",dataSources:{primary:"ds_sankey"},title:"Default Configuration"},viz_bHf2plmY:{type:"splunk.markdown",options:{markdown:`### Source Definition

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
