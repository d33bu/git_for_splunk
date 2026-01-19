import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as r}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as i}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_XhKERoP3:{type:"splunk.markdown",options:{markdown:`## Overview
Ad Hoc datasources are SPL searches you are prompted to create when adding new datasources through the visual editor. You can add your query, edit the name, ID, and adjust the timerange used for the datasource. This example covers basic ad hoc searches, with one visualization having the extra option which controls the refresh. 

Both of these examples are not searching against an index. If you are running a search against an index, you have the additional option to control the time range, whether that is the global time range configured for the dashboard or a static time range configured for that specific data source. The time range parameters can be configured with this following example code:

### Source for Different Time Ranges
\`\`\`
{
    "type": "ds.search",
    "options": {
        "query": "<SPL Query>",
        "refresh": "10s",
        "queryParameters": {
            "earliest": "-15m",
            "latest": "now"
        }
    },
    "name": "<search name>"
}
\`\`\``}},viz_4Yv2URkp:{type:"splunk.bar",title:"Simple Ad Hoc Data Example",dataSources:{primary:"ds_search1"},showProgressBar:!1,showLastUpdated:!1},viz_RaLJxsMa:{type:"splunk.line",title:"Line Chart Using Static Time Search",dataSources:{primary:"ds_search2"}},viz_gg2855Ju:{type:"splunk.markdown",options:{markdown:`### Data Source Definition
\`\`\`
{
    "type": "ds.search",
    "options": {
        "query": "| inputlookup firewall_example.csv\\n| stats count by host"
    },
    "name": "Search_1"
}
\`\`\`
`}},viz_MOovk2sf:{type:"splunk.markdown",options:{markdown:`### Data Source Definition
\`\`\`
{
    "type": "ds.search",
    "options": {
        "query": "| makeresults count=15\\n| streamstats count\\n| eval _time=_time-(count*86400)\\n| eval value=random()%100\\n| fields _time value",
        "refresh": "10s",
        "queryParameters": {}
    },
    "name": "Search 2"
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host`},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| makeresults count=15
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100
| fields _time value`,refresh:"10s",queryParameters:{earliest:"-15m",latest:"now"}},name:"Search 2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_global_trp:{type:"input.timerange",options:{token:"global_time",defaultValue:"-15m,now"},title:"Default Time Range"}},description:"Power a visualization using an Ad-Hoc Search",title:"Ad Hoc Data Source",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_XhKERoP3",type:"block",position:{x:0,y:0,w:1440,h:447}},{item:"viz_4Yv2URkp",type:"block",position:{x:0,y:447,w:600,h:333}},{item:"viz_RaLJxsMa",type:"block",position:{x:0,y:780,w:600,h:327}},{item:"viz_gg2855Ju",type:"block",position:{x:600,y:447,w:600,h:333}},{item:"viz_MOovk2sf",type:"block",position:{x:600,y:780,w:600,h:327}}]}}}};var n=e(r()),o=e(i());(0,n.default)(o.default.createElement(t,{definition:a}),{pageTitle:"Ad Hoc Data Source",hideFooter:!0,layout:"fixed"});
