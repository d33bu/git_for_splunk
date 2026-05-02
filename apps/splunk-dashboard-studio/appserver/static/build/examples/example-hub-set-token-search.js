import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as o}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var s={visualizations:{viz_XoAtwekf:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Search id: $my_search:job.sid$ - Top Result: $my_search:result.host$",description:"Returned $my_search:job.resultCount$ results",eventHandlers:[]},viz_kK99DS2i:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| chart count by host
| sort - count
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "$my search:job.sid$ -  Top Result: $my search:result.host$",
    "description": "Returned $my search:job.resultCount$ results"
    "eventHandlers": [],
    "options": {},
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}},viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview

Set tokens from search results or search job metadata to embed search-related information in other searches or visualizations. For example, you can set tokens using the result of a general qery to filter subsequent queries on your dashboard. 

## Syntax
To set a token using **search results** us the syntax:
\`$<search name>:result.<field>$\`

To set a token using **job metadata** us the syntax:
\`$<search name>:job.<metadata option>$\`
`}},viz_xSc6MKql:{type:"splunk.singlevalue",title:"Search id: $my_search:job.sid$",description:"",dataSources:{primary:"ds_search1"},eventHandlers:[{type:"drilldown.setToken",options:{tokens:[{token:"staticToken",value:'"User Has Clicked the Visualization"'}]}}]},viz_w3BDtfy2:{type:"splunk.markdown",options:{markdown:`## Search Metadata

### Search job status
Syntax: \`$search name:job.status$\`  
Example: $my_search:job.status$

### Initial time a search job starts
Syntax: \`$search name:job.startTime$\`  
Example: $my_search:job.startTime$

### Number of results returned
Syntax: \`$search name:job.resultCount$\`  
Example: $my_search:job.resultCount$


### Indicate whether the search has results 
Syntax: \`$search name:job.hasResults$\`  
Example: $my_search:job.hasResults$

`}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| chart count by host
| sort - count`,queryParameters:{earliest:"-60m@m",latest:"now"},enableSmartSources:!0},name:"my_search"},ds_qytaWndI_ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| chart count by host
| where host=NULL`,queryParameters:{earliest:"-60m@m",latest:"now"},enableSmartSources:!0},name:"other_search"}},defaults:{},inputs:{},description:"Set tokens based on search results and job metadata",title:"Set Token from Search",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_YxUwAzLI",type:"block",position:{x:0,y:0,w:1200,h:231}},{item:"viz_XoAtwekf",type:"block",position:{x:0,y:231,w:600,h:413}},{item:"viz_xSc6MKql",type:"block",position:{x:0,y:644,w:600,h:415}},{item:"viz_kK99DS2i",type:"block",position:{x:600,y:231,w:600,h:413}},{item:"viz_w3BDtfy2",type:"block",position:{x:600,y:644,w:600,h:415}}]}},globalInputs:[]}};var a=e(r()),n=e(o());(0,a.default)(n.default.createElement(t,{definition:s}),{pageTitle:"Set Token from Search",hideFooter:!0,layout:"fixed"});
