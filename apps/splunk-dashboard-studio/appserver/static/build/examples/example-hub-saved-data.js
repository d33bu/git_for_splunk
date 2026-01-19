import{a}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as n}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as t}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_rbsVgtoZ:{type:"splunk.markdown",options:{markdown:`## Overview
Saved searches refer to reports, whether within the same app or different apps. You can use saved data sources on a schedule, which lightens the processing loads and concurrent data source limits. 

When a saved search is added into the dashboard definition, it becomes available to select in the datasource editor panel. 

The following provides a template on how you can use a saved search in your dashboards. Copy and paste the following code and make the adjustments you need to make it work in your dashboard. You should then see your resulting saved search appear in the datasource editor,`}},viz_cUYmS9vD:{type:"splunk.markdown",options:{markdown:`### Saved Search from Another App
\`\`\`
"ds_saved_search_from_app": {
 "type": "ds.savedSearch",
 "options": {
  "ref": "<your data source name>",
   "app": "<your-app-name>"
 },
 "name": "Saved Search Data Source From App"
}
\`\`\``}},viz_w7HI1R9h:{type:"splunk.markdown",options:{markdown:`### Saved Search with Additional Options
\`\`\`
"ds_saved_search_from_app": {
 "type": "ds.savedSearch",
 "options": {
  "ref": "<your data source name>",
  "refresh":"5s",
  "refreshType": "interval"
 },
 "name": "Saved Search Data with Refresh"
}
\`\`\``}},viz_T3X9eU4a:{type:"splunk.markdown",options:{markdown:`### Saved Search From Search and Reporting
\`\`\`
"ds_saved_search_from_sr": {
 "type": "ds.savedSearch",
 "options": {
  "ref": "<your data source name>"
 },
 "name": "Saved Search Data Source From S&R"
}
\`\`\``}}},dataSources:{"ds_saved_search_from_S&R":{type:"ds.savedSearch",options:{ref:"<your report name>"},name:"Saved Search Data Source From S&R"},ds_saved_search_from_app:{type:"ds.savedSearch",options:{ref:"<your data source name>",app:"<your-app-name>"},name:"Saved Search Data Source From App"},"ds_saved_search_from_S&R_specified":{type:"ds.savedSearch",options:{ref:"<your data source name>",refresh:"5s",refreshType:"interval"},name:"Saved Search Data Source From S&R"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Use saved searches from various apps to use in your Dashboard",title:"Saved Searches",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_rbsVgtoZ",type:"block",position:{x:0,y:0,w:1440,h:175}},{item:"viz_T3X9eU4a",type:"block",position:{x:0,y:175,w:391,h:248}},{item:"viz_w7HI1R9h",type:"block",position:{x:391,y:175,w:399,h:248}},{item:"viz_cUYmS9vD",type:"block",position:{x:790,y:175,w:410,h:248}}]}},globalInputs:[]}};var r=e(n()),s=e(t());(0,r.default)(s.default.createElement(a,{definition:o}),{pageTitle:"Saved Search Data Source",hideFooter:!0,layout:"fixed"});
