import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as n}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:"## Overview\n\nAn area chart is used to show the development of quantitative values over a period of time. It can also be used to show the development of multiple data series summed. \n\nAn area chart can be used for single or multiple series data. Using the `timechart` command in your query makes it so that the first column in a statistics table will be `_time`, which would map to the x-axis of the area chart. The following columns would be y-axis values, each column being a different color on the chart. \n\n`| timechart count by <category_of_interest>`"}},viz_gezCclRK:{type:"splunk.area",dataSources:{primary:"ds_search1"},title:"Area Chart",description:"Single Series"},viz_Zy9SbUug:{type:"splunk.area",dataSources:{primary:"ds_search2"},title:"Area Chart",description:"Multiple Series"},viz_04NOvPv8:{type:"splunk.area",dataSources:{primary:"ds_search2"},options:{stackMode:"stacked"},title:"Area Chart",description:"Multiple Series - Stacked"},viz_IT7zpNRd:{type:"splunk.area",dataSources:{primary:"ds_search2"},options:{stackMode:"stacked100"},title:"Area Chart",description:"Multiple Series - Stacked Mode 100%"},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Single Series
\`\`\`
| inputlookup firewall_example.csv
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "stackMode": "stacked"
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`### SPL For Multiple Series
\`\`\`
| inputlookup firewall_example.csv
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime by host limit=3
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {},
    "context": {},
}
\`\`\``}},viz_udik1cuo:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "stackMode": "stacked100"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval mytime=strftime(timestamp,"%H:%M")
| chart count over mytime by host limit=3`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Use Area Charts to represent data over time",title:"Area Chart",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:198}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:198,w:618,h:368}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:566,w:618,h:359}},{item:"viz_04NOvPv8",type:"block",position:{x:0,y:925,w:618,h:307}},{item:"viz_IT7zpNRd",type:"block",position:{x:0,y:1232,w:618,h:324}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:198,w:582,h:368}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:566,w:582,h:359}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:925,w:582,h:307}},{item:"viz_udik1cuo",type:"block",position:{x:618,y:1232,w:582,h:324}}]}},globalInputs:[]}};var a=e(r()),o=e(n());(0,a.default)(o.default.createElement(t,{definition:i}),{pageTitle:"Area Chart",hideFooter:!0,layout:"fixed"});
