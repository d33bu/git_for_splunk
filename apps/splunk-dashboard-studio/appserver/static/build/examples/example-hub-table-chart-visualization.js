import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:`## Overview

Tables can help you compare and aggregate field values. Use a table to visualize patterns for one or more metrics across a dataset. Tables are also very useful for debugging a dashboard. If you feel a visualization isn't displaying data the way you expect, create a table with the same search to see exactly what data is being returned. 

The following examples cover basic table configurations. Most of the options are available through the visual editor for the visualization.  `}},viz_gezCclRK:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table",description:"Default Configuration"},viz_Zy9SbUug:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table",description:"Alternate Row Coloring off, fixed header, row numbers",options:{tableFormat:{rowBackgroundColors:"> table | seriesByIndex(0) | pick(tableRowBackgroundColorsByTheme)"},showRowNumbers:!0}},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Table
\`\`\`
| inputlookup outages_example.csv
| search "Number of Customers Affected"!="Unknown"
| fields "Date Event Began", "Event Description", "Geographic Areas", "Number of Customers Affected"
| head 100
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### SPL for Column Width
\`\`\`
| inputlookup outages_example.csv
| fields "Event Description" "Geographic Areas" "Respondent" "Tags"
\`\`\`

### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search2"
    }
   "options": {
        "columnFormat": {
            "Event Description": {
                "width": 120,
                "textOverflow": "ellipsis"
            },
            "Geographic Areas": {
                "width": 120,
                "textOverflow": "break-word"
            },
            "Respondent": {
                "width": 120,
                "textOverflow": "anywhere"
            }
        }
    },
    "context": {}
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "tableFormat": {
            "rowBackgroundColors": "> table | seriesByIndex(0) | pick(tableRowBackgroundColorsByTheme)"
        },
        "showRowNumbers": true
    },
    "context": {}
}
\`\`\``}},viz_FiYpf6Mn:{type:"splunk.table",dataSources:{primary:"ds_search2"},title:"Specified Column Width",description:"Text overflow options: ellipsis, break-word, anywhere",options:{columnFormat:{"Event Description":{width:120,textOverflow:"ellipsis"},"Geographic Areas":{width:120,textOverflow:"break-word"},Respondent:{width:120,textOverflow:"anywhere"}}}}},dataSources:{ds_search1:{type:"ds.search",options:{query:'| inputlookup outages_example.csv| search "Number of Customers Affected"!="Unknown"| fields "Date Event Began", "Event Description", "Geographic Areas", "Number of Customers Affected"| head 100',queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| fields "Event Description" "Geographic Areas" "Respondent" "Tags"`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Use Tables to display field and row data from datasources",title:"Table",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:179}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:179,w:618,h:408}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:587,w:618,h:419}},{item:"viz_FiYpf6Mn",type:"block",position:{x:0,y:1006,w:618,h:460}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:179,w:582,h:408}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:587,w:582,h:419}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:1006,w:582,h:460}}]}},globalInputs:[]}};var n=e(r()),a=e(i());(0,n.default)(a.default.createElement(t,{definition:o}),{pageTitle:"Table",hideFooter:!0,layout:"fixed"});
