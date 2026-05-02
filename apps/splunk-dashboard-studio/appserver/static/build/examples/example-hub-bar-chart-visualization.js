import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as n}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:"## Overview\n\nBar charts are one of the best options for comparing categorical data in one period or point in time, for both single and multiple series of data. Bar charts are generally a poor option for time series data, as the magnitude of values are displayed on the x-axis. \n\nBar charts get their y-axis from the first column in a statistics table, the following columns contain the x-values. Use the `chart` command with the `over`  and `by` clause to choose how you want to format your y-axis and series.\n\n`| chart count by host`"}},viz_gezCclRK:{type:"splunk.bar",dataSources:{primary:"ds_search1"},title:"Bar Chart",description:"Single Series"},viz_Zy9SbUug:{type:"splunk.bar",dataSources:{primary:"ds_search2"},title:"Bar Chart",description:"Multiple Series"},viz_04NOvPv8:{type:"splunk.bar",dataSources:{primary:"ds_search2"},options:{stackMode:"stacked"},title:"Bar Chart",description:"Multiple Series - Stacked"},viz_IT7zpNRd:{type:"splunk.bar",dataSources:{primary:"ds_search2"},options:{stackMode:"stacked100"},title:"Bar Chart",description:"Multiple Series - Stacked Mode 100%"},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Single Series
\`\`\`
| inputlookup firewall_example.csv
| chart count by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.bar",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.bar",
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
| search host IN (host8, host18, host248, host254)
| chart sum(bytes_in) sum(bytes_out) by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.bar",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {},
    "context": {},
}
\`\`\``}},viz_udik1cuo:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.bar",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "stackMode": "stacked100"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:"| inputlookup firewall_example.csv| chart count by host",queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:"| inputlookup firewall_example.csv| search host IN (host8, host18, host248, host254)| chart sum(bytes_in) sum(bytes_out) by host",queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Bar charts are used to compare data of one period or point in time across multiple categories",title:"Bar Chart",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",options:{display:"auto-scale"},structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:190}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:190,w:618,h:336}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:526,w:618,h:353}},{item:"viz_04NOvPv8",type:"block",position:{x:0,y:879,w:618,h:283}},{item:"viz_IT7zpNRd",type:"block",position:{x:0,y:1162,w:618,h:286}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:190,w:582,h:336}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:526,w:582,h:353}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:879,w:582,h:283}},{item:"viz_udik1cuo",type:"block",position:{x:618,y:1162,w:582,h:286}}]}},globalInputs:[]}};var i=t(s()),a=t(n());(0,i.default)(a.default.createElement(e,{definition:o}),{pageTitle:"Bar Chart",hideFooter:!0,layout:"fixed"});
