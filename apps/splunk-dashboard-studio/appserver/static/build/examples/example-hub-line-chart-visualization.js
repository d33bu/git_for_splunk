import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as a}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as o}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:"## Overview\n\nA line chart is used to show the development of quantitative values over a period of time. Line charts tend to be visually simpler than area charts, and are useful for quickly identifying trends in your data for both single and multiple data series. \n\nUsing the `timechart` command in your query makes it so that the first column in a statistics table will be `_time`, which would map to the x-axis of the line chart. The following columns would be y-axis values, each column being a different color on the chart. \n\n`| timechart count by <category_of_interest>`\n\nNote that in this example, since we are using a lookup file, we use the `chart` command and use the over clause to chart over the `myTime` field which is the time each event in the lookup took place.\n\nThe following examples cover basic line chart configuration, including multiple series and changing line styles for easy identification. "}},viz_gezCclRK:{type:"splunk.line",dataSources:{primary:"ds_search1"},title:"Line Chart",description:"Single Series"},viz_Zy9SbUug:{type:"splunk.line",dataSources:{primary:"ds_search2"},title:"Line Chart",description:"Multiple Series - Default Styling"},viz_04NOvPv8:{type:"splunk.line",dataSources:{primary:"ds_search3"},options:{lineDashStylesByField:{"sum(bytes_in)":"solid","sum(bytes_out)":"shortDash"}},title:"Line Chart",description:"Multiple Series - Line Dash Styles"},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Single Series
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.line",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### SPL Query
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host8, host18, host248, host254)
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_in) sum(bytes_out) over myTime
\`\`\`

### Source Definition
\`\`\`
{
    "type": "splunk.line",
    "dataSources": {
        "primary": "ds_search3"
    },
    "options": {
        "lineDashStylesByField": {
            "sum(bytes_in)": "solid",
            "sum(bytes_out)": "shortDash"
        }
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`### SPL For Multiple Series
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.line",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {},
    "context": {},
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:'| inputlookup firewall_example.csv| eval myTime=strftime(timestamp,"%H:%M")| chart count over myTime by host',queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"},ds_search3:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host8, host18, host248, host254)
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_in) sum(bytes_out) over myTime`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Use Line Charts to represent data over time",title:"Line Chart",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:267}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:267,w:618,h:363}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:630,w:618,h:392}},{item:"viz_04NOvPv8",type:"block",position:{x:0,y:1022,w:618,h:536}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:267,w:582,h:363}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:630,w:582,h:392}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:1022,w:582,h:536}}]}},globalInputs:[]}};var n=e(a()),s=e(o());(0,n.default)(s.default.createElement(t,{definition:i}),{pageTitle:"Line Chart",hideFooter:!0,layout:"fixed"});
