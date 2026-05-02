import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_XhKERoP3:{type:"splunk.markdown",options:{markdown:`## Overview
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
