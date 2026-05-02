import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as a}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as r}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_6nQA9HbF:{type:"splunk.markdown",options:{markdown:"## Overview\nBubble charts are useful for finding correlation between three or four dimensions of data. The first two dimensions are the coordinates of the chart, the third is the size of the bubble and the fourth is the color of the bubble. When comparing multiple categories, color can be an easy way to differentiate between bubbles on the chart.\n\nThe best way to generate a bubble chart is to have a search that returns multiple data series, which can be done with a `stats` command. Leverage the visualization DSL in the options to control your `x`, `y` and `category` fields for finer control which is an alternate to formatting your SPL. In the following examples we use a combination of SPL and DSL to format the fields correctly.\n"}},viz_dEmLSTLC:{type:"splunk.bubble",dataSources:{primary:"ds_search1"},title:"Bubble Chart",description:"Default Configuration"},viz_DWRcsfE2:{type:"splunk.markdown",options:{markdown:`### SPL Query
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
