import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as r}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as o}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var s={visualizations:{viz_XoAtwekf:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Search id: $my_search:job.sid$ - Top Result: $my_search:result.host$",description:"Returned $my_search:job.resultCount$ results",eventHandlers:[]},viz_kK99DS2i:{type:"splunk.markdown",options:{markdown:`### SPL
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
