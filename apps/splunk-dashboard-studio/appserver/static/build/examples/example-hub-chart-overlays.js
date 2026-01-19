import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as r}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as s}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:"## Overview\nOverlays provide a way to add additional data on a single chart. It is available for column, area and bar charts. Use overlays for data that is useful to view together, such as overlaying an average of a field while showing the total value of its individual categories. The overlay field can be controlled using the `overlayFields` option, or in the case of predictions, with the `predict` command in SPL. \n\nThe below examples showcase simple use cases of available overlay options in dashboards."}},viz_RSb0jRKz:{type:"splunk.bar",options:{overlayFields:"average"},dataSources:{primary:"ds_search1"},title:"Bar Chart Overlay",description:"Average of Categories"},viz_jHj4nb3Y:{type:"splunk.markdown",options:{markdown:`### SPL For Bar Chart Overlay
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
| eventstats avg(count) as average
| eval average=round(average,0)
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.bar",
    "options": {
        "overlayFields": "average"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\`
`}},viz_25GoP8BK:{type:"splunk.column",options:{overlayFields:"host8"},dataSources:{primary:"ds_search2"},title:"Column Chart Overlay",description:"Overlay Timeseries Data"},viz_iRt4kmkB:{type:"splunk.markdown",options:{markdown:`### SPL For Column Chart Overlay
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host18, host8, host248)
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "options": {
        "overlayFields": "host8"    
},
    "dataSources": {
        "primary": "ds_search2"
    },
    "title": "Overlay",
    "context": {}
}
\`\`\`
`}},viz_5jEsD8lR:{type:"splunk.area",dataSources:{primary:"ds_search2"},title:"Area Chart Overlay with Y2 Axis",description:"Overlay Time Series Data on y2-axis",options:{overlayFields:"host18",showOverlayY2Axis:!0,stackMode:"stacked"}},viz_wo3MmrZc:{type:"splunk.markdown",options:{markdown:`### SPL For Area Chart Overlay
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host18, host8, host248)
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "overlayFields": "host18",
        "showOverlayY2Axis": true,
        "stackMode": "stacked"
    },
    "context": {}
}
\`\`\`
`}},viz_SVFZ5kdo:{type:"splunk.column",dataSources:{primary:"ds_search4"},title:"Overlay - Forecasting",description:"Time series forecasting using the predict command"},viz_lLqfBZ0k:{type:"splunk.markdown",options:{markdown:`### SPL For Column Chart Overlay
\`\`\`
| makeresults count=10
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100 +15
| timechart span=1d sum(value) as Value
| predict Value
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_search4"
    },
    "options": {},
    "context": {}
}
\`\`\`
`}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host
| eventstats avg(count) as average
| eval average=round(average,0)`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host18, host8, host248)
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search 2"},ds_search3:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host18, host8, host248)
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_3"},ds_search4:{type:"ds.search",options:{query:`| makeresults count=10
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100 +15
| timechart span=1d sum(value) as Value
| predict Value`,queryParameters:{earliest:"-7d@h",latest:"now"}},name:"Search_4"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Overlay limits and other data on your charts",title:"Chart Overlays",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3X53kBj2",type:"block",position:{x:0,y:0,w:1440,h:172}},{item:"viz_RSb0jRKz",type:"block",position:{x:0,y:172,w:698,h:413}},{item:"viz_25GoP8BK",type:"block",position:{x:0,y:585,w:698,h:460}},{item:"viz_5jEsD8lR",type:"block",position:{x:0,y:1045,w:698,h:461}},{item:"viz_SVFZ5kdo",type:"block",position:{x:0,y:1506,w:698,h:411}},{item:"viz_jHj4nb3Y",type:"block",position:{x:698,y:172,w:502,h:413}},{item:"viz_iRt4kmkB",type:"block",position:{x:698,y:585,w:502,h:460}},{item:"viz_wo3MmrZc",type:"block",position:{x:698,y:1045,w:502,h:461}},{item:"viz_lLqfBZ0k",type:"block",position:{x:698,y:1506,w:502,h:411}}]}},globalInputs:[]}};var o=e(r()),n=e(s());(0,o.default)(n.default.createElement(t,{definition:a}),{pageTitle:"Chart Overlays",hideFooter:!0,layout:"fixed"});
