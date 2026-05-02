import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:`## Overview

Pie charts are effective at showing the value of different fields in terms of relative importance or volume out of a whole. Pie charts are better at showing visual differences, without the need to know specific values for that field, which can only be done on hover in Dashboard Studio.

Using a simple \`stats\` command that generates two columns is an effective way to compare values over a single category. 

\`|stats count by host\``}},viz_gezCclRK:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Default Configuration"},viz_Zy9SbUug:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Labels off",options:{"chart.showLabels":!1,labelDisplay:"off"}},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Pie
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "labelDisplay": "valuesAndPercentage"
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`
### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "labelDisplay": "off"
    },
    "context": {}
}
\`\`\``}},viz_FiYpf6Mn:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Show Percentage On",options:{labelDisplay:"valuesAndPercentage"}},viz_JZWNTqRt:{type:"splunk.pie",dataSources:{primary:"ds_search1"},title:"Pie Chart",description:"Show Percentage On",options:{showDonutHole:!0}},viz_VVwXSWkg:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.pie",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Pie Chart",
    "description": "Show Percentage On",
    "options": {
        "showDonutHole": true
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"View proportional relationships between categorical data with pie and donut charts",title:"Pie Chart",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:175}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:175,w:323,h:343}},{item:"viz_FiYpf6Mn",type:"block",position:{x:0,y:518,w:323,h:368}},{item:"viz_RVNSVBHv",type:"block",position:{x:323,y:175,w:295,h:343}},{item:"viz_Hb2gqYLi",type:"block",position:{x:323,y:518,w:295,h:368}},{item:"viz_Zy9SbUug",type:"block",position:{x:618,y:175,w:313,h:343}},{item:"viz_JZWNTqRt",type:"block",position:{x:618,y:518,w:313,h:368}},{item:"viz_n67ApED4",type:"block",position:{x:931,y:175,w:269,h:343}},{item:"viz_VVwXSWkg",type:"block",position:{x:931,y:518,w:269,h:368}}]}},globalInputs:[]}};var n=e(s()),o=e(a());(0,n.default)(o.default.createElement(t,{definition:i}),{pageTitle:"Pie Chart",hideFooter:!0,layout:"fixed"});
