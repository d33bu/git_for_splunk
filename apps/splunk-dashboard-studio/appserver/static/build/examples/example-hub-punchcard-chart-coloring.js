import{a as n}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as o}from"../chunks/chunk-ME4V5RLK.js";var e={visualizations:{viz_ex9bx0og:{type:"splunk.markdown",options:{markdown:`## Overview

Punchcards can visualize cyclical trends in your data. Using a punchcard, you can see relative values for a metric where the dimensions intersect.

A punchcard can be used with any data using some sort of timestamp and a metric you want to track. You can also use a query that returns a second field indicating color to visually separate categories. This example shows different coloring options for the Punchcard chart.`}},viz_U1QozhCt:{type:"splunk.punchcard",dataSources:{primary:"ds_LdgLHW2l"},title:"Punchcard Coloring",description:"Dynamic coloring, Transparent background, bubble color - green",showProgressBar:!1,showLastUpdated:!1,options:{backgroundColor:"transparent",bubbleColor:"#46D4BA"}},viz_g1eVJOyU:{type:"splunk.markdown",options:{markdown:`### SPL Query
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
    "options": {
        "backgroundColor": "transparent",
        "bubbleColor": "#46D4BA"
    },
    "context": {}
}

\`\`\``}},viz_EdD4tUJI:{type:"splunk.punchcard",dataSources:{primary:"ds_LdgLHW2l"},title:"Punchcard Coloring",description:"Categorical color mode without Legend",showProgressBar:!1,showLastUpdated:!1,options:{colorMode:"categorical",legendDisplay:"off"}},viz_whIwQh9E:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "colorMode": "categorical",
        "legendDisplay": "off"
    },
    "context": {}
}

\`\`\``}},viz_vfZZQhO2:{type:"splunk.punchcard",dataSources:{primary:"ds_LdgLHW2l"},title:"Punchcard Coloring",description:"Series Color with Legend",showProgressBar:!1,showLastUpdated:!1,options:{seriesColors:["#A86FEF","#A8F5E7","#46D4BA"],colorMode:"categorical"}},viz_kUufQvMu:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.punchcard",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "seriesColors": [
            "#A86FEF",
            "#A8F5E7",
            "#46D4BA"
        ],
        "colorMode": "categorical"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_LdgLHW2l:{type:"ds.search",options:{query:`| inputlookup examples.csv
| where punch_count > 0
| fields punch_hour punch_day punch_count punch_region`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust coloring for punchcard visualizations",title:"Punchcards Coloring",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_ex9bx0og",type:"block",position:{x:0,y:0,w:1440,h:145}},{item:"viz_U1QozhCt",type:"block",position:{x:0,y:145,w:748,h:400}},{item:"viz_EdD4tUJI",type:"block",position:{x:0,y:545,w:748,h:400}},{item:"viz_vfZZQhO2",type:"block",position:{x:0,y:945,w:748,h:400}},{item:"viz_g1eVJOyU",type:"block",position:{x:748,y:145,w:452,h:400}},{item:"viz_whIwQh9E",type:"block",position:{x:748,y:545,w:452,h:400}},{item:"viz_kUufQvMu",type:"block",position:{x:748,y:945,w:452,h:400}}]}},globalInputs:[]}};var t=o(i()),r=o(a());(0,t.default)(r.default.createElement(n,{definition:e}),{pageTitle:"Punchcard Coloring",hideFooter:!0,layout:"fixed"});
