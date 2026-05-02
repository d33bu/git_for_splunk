import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as s}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:"## Overview\nOverlays provide a way to add additional data on a single chart. It is available for column, area and bar charts. Use overlays for data that is useful to view together, such as overlaying an average of a field while showing the total value of its individual categories. The overlay field can be controlled using the `overlayFields` option, or in the case of predictions, with the `predict` command in SPL. \n\nThe below examples showcase simple use cases of available overlay options in dashboards."}},viz_RSb0jRKz:{type:"splunk.bar",options:{overlayFields:"average"},dataSources:{primary:"ds_search1"},title:"Bar Chart Overlay",description:"Average of Categories"},viz_jHj4nb3Y:{type:"splunk.markdown",options:{markdown:`### SPL For Bar Chart Overlay
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
