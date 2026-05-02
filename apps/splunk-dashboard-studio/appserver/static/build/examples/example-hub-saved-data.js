import{a}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as n}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as t}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_rbsVgtoZ:{type:"splunk.markdown",options:{markdown:`## Overview
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
