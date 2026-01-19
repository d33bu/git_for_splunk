import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as i}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:`## Overview
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
