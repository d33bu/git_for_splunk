import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_6nQA9HbF:{type:"splunk.markdown",options:{markdown:`## Overview
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
