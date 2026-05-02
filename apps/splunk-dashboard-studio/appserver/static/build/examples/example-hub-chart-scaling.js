import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:`## Overview
Adjusting scaling can help viewers of your dashboard get a better understanding of your data. By splitting series and adjusting axis scales, you can make sure you display your data in a way that makes more sense for the user. For example, a log scale quickly provides context about the magnitude of different events. 

The below examples showcase simple use cases of available scaling options in dashboards.`}},viz_25GoP8BK:{type:"splunk.area",dataSources:{primary:"ds_search1"},title:"Area Chart With Scaling Adjustment",description:"Log Scale, Split Series, Independent Axis, Abbreviations Off",options:{yAxisAbbreviation:"off",showSplitSeries:!0,showIndependentYRanges:!0,yAxisScale:"log"}},viz_iRt4kmkB:{type:"splunk.markdown",options:{markdown:`### SPL For Area Chart
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host2 host18 host19 host248)
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "yAxisAbbreviation": "off",
        "showSplitSeries": true,
        "showIndependentYRanges": true,
        "yAxisScale": "log"
    },
    "context": {}
}
\`\`\`
`}},viz_SVFZ5kdo:{type:"splunk.bar",dataSources:{primary:"ds_FgPlRCzA"},title:"Bar Chart with Scaling Adjustment",description:"Split Series and Independent Y Range",options:{showSplitSeries:!0,showIndependentYRanges:!0}},viz_lLqfBZ0k:{type:"splunk.markdown",options:{markdown:`### SPL For Bar Chart
\`\`\`
| inputlookup outages_example.csv
| top Tags limit=5
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.bar",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "showSplitSeries": true,
        "showIndependentYRanges": true
    },
    "context": {}
}
\`\`\`
`}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host2 host18 host19 host248)
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"},ds_FgPlRCzA:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| top Tags limit=5`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust chart scaling properties to help contextualize your data",title:"Chart Scaling",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3X53kBj2",type:"block",position:{x:0,y:0,w:1440,h:167}},{item:"viz_25GoP8BK",type:"block",position:{x:0,y:167,w:698,h:463}},{item:"viz_SVFZ5kdo",type:"block",position:{x:0,y:630,w:698,h:387}},{item:"viz_iRt4kmkB",type:"block",position:{x:698,y:167,w:502,h:463}},{item:"viz_lLqfBZ0k",type:"block",position:{x:698,y:630,w:502,h:387}}]}},globalInputs:[]}};var o=e(s()),a=e(i());(0,o.default)(a.default.createElement(t,{definition:n}),{pageTitle:"Chart Scaling",hideFooter:!0,layout:"fixed"});
