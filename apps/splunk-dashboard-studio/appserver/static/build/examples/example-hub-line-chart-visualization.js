import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as a}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as o}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var i={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:"## Overview\n\nA line chart is used to show the development of quantitative values over a period of time. Line charts tend to be visually simpler than area charts, and are useful for quickly identifying trends in your data for both single and multiple data series. \n\nUsing the `timechart` command in your query makes it so that the first column in a statistics table will be `_time`, which would map to the x-axis of the line chart. The following columns would be y-axis values, each column being a different color on the chart. \n\n`| timechart count by <category_of_interest>`\n\nNote that in this example, since we are using a lookup file, we use the `chart` command and use the over clause to chart over the `myTime` field which is the time each event in the lookup took place.\n\nThe following examples cover basic line chart configuration, including multiple series and changing line styles for easy identification. "}},viz_gezCclRK:{type:"splunk.line",dataSources:{primary:"ds_search1"},title:"Line Chart",description:"Single Series"},viz_Zy9SbUug:{type:"splunk.line",dataSources:{primary:"ds_search2"},title:"Line Chart",description:"Multiple Series - Default Styling"},viz_04NOvPv8:{type:"splunk.line",dataSources:{primary:"ds_search3"},options:{lineDashStylesByField:{"sum(bytes_in)":"solid","sum(bytes_out)":"shortDash"}},title:"Line Chart",description:"Multiple Series - Line Dash Styles"},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Single Series
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
