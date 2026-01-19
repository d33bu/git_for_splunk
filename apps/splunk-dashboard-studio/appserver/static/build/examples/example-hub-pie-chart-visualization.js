import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as a}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:`## Overview

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
