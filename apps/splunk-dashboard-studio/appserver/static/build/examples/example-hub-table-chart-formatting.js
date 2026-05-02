import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_3NUrAfkt:{type:"splunk.markdown",options:{markdown:`## Overview

Tables can help you compare and aggregate field values. Use a table to visualize patterns for one or more metrics across a dataset. Tables are also very useful for debugging a dashboard. If you feel a visualization isn't displaying data the way you expect, create a table with the same search to see exactly what data is being returned. 

The following examples cover specific formatting options for your tables, including sparklines.`}},viz_gezCclRK:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Table Formatting",description:"Formatting applied to all numeric columns",options:{columnFormat:{"sum(bytes_in)":{data:'> table | seriesByName("sum(bytes_in)") | formatByType(sum_bytes_in_ColumnFormatEditorConfig)'},count:{data:'> table | seriesByName("count") | formatByType(countColumnFormatEditorConfig)'},"sum(bytes_out)":{data:'> table | seriesByName("sum(bytes_out)") | formatByType(sum_bytes_out_ColumnFormatEditorConfig)'}}},context:{NumberColumnFormatConfig:{number:{thousandSeparated:!1,unitPosition:"after",output:"byte",base:"binary",spaceSeparated:!0,precision:4}},sum_bytes_in_ColumnFormatEditorConfig:{number:{thousandSeparated:!0,unitPosition:"after",unit:"B"}},countColumnFormatEditorConfig:{number:{thousandSeparated:!1,unitPosition:"after",unit:"Results"}},sum_bytes_out_ColumnFormatEditorConfig:{number:{thousandSeparated:!1,unitPosition:"after",precision:2,unit:"Bytes"}}}},viz_Zy9SbUug:{type:"splunk.table",dataSources:{primary:"ds_search2"},title:"Table Formatting - Date/Time, Units",description:"Using MM-DD-YYYY [at] hh:mm A",options:{columnFormat:{myTime:{data:'> table | seriesByName("myTime") | formatByType(myTimeColumnFormatEditorConfig)'}}},context:{myTimeColumnFormatEditorConfig:{time:{format:"MM-DD-YYYY [at] hh:mm A"}}}},viz_RVNSVBHv:{type:"splunk.markdown",options:{markdown:`### SPL For Numeric Formatting
\`\`\`
| inputlookup firewall_example.csv
| stats sum(bytes_in) sum(bytes_out) count by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "columnFormat": {
            "sum(bytes_in)": {
                "data": "> table | seriesByName(\\"sum(bytes_in)\\") | formatByType(sum_bytes_in_ColumnFormatEditorConfig)"
            },
            "count": {
                "data": "> table | seriesByName(\\"count\\") | formatByType(countColumnFormatEditorConfig)"
            },
            "sum(bytes_out)": {
                "data": "> table | seriesByName(\\"sum(bytes_out)\\") | formatByType(sum_bytes_out_ColumnFormatEditorConfig)"
            }
        }
    },
    "context": {
        "NumberColumnFormatConfig": {
            "number": {
                "thousandSeparated": false,
                "unitPosition": "after",
                "output": "byte",
                "base": "binary",
                "spaceSeparated": true,
                "precision": 4
            }
        },
        "sum_bytes_in_ColumnFormatEditorConfig": {
            "number": {
                "thousandSeparated": true,
                "unitPosition": "after",
                "unit": "B"
            }
        },
        "countColumnFormatEditorConfig": {
            "number": {
                "thousandSeparated": false,
                "unitPosition": "after",
                "unit": "Results"
            }
        },
        "sum_bytes_out_ColumnFormatEditorConfig": {
            "number": {
                "thousandSeparated": false,
                "unitPosition": "after",
                "precision": 2,
                "unit": "Bytes"
            }
        }
    }
}
\`\`\``}},viz_Hb2gqYLi:{type:"splunk.markdown",options:{markdown:`### SPL for Sparklines
\`\`\`
| inputlookup outages_example.csv 
| eval _time=strptime('Date Event Began',"%m/%d/%Y")
| search Respondent = B*
| sort - _time
| stats sparkline(count) by Respondent
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search3"
    },
    "title": "Table Formatting - Cell Types",
    "description": "Sparklines, multi-value arrays",
    "options": {},
    "context": {},
    "showProgressBar": false,
    "showLastUpdated": false
}
\`\`\``}},viz_n67ApED4:{type:"splunk.markdown",options:{markdown:`### SPL For Time Formatting
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%Y-%m-%dT%H:%M")
| fields bytes_in bytes_out host myTime
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {
        "columnFormat": {
            "myTime": {
                "data": "> table | seriesByName(\\"myTime\\") | formatByType(myTimeColumnFormatEditorConfig)"
            }
        }
    },
    "context": {
        "myTimeColumnFormatEditorConfig": {
            "time": {
                "format": "MM-DD-YYYY [at] hh:mm A"
            }
        }
    }
}
\`\`\``}},viz_FiYpf6Mn:{type:"splunk.table",dataSources:{primary:"ds_search3"},title:"Table Formatting - Cell Types",description:"Sparklines, multi-value arrays"}},dataSources:{ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%Y-%m-%dT%H:%M")
| fields bytes_in bytes_out host myTime`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"},ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats sum(bytes_in) sum(bytes_out) count by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"},ds_search3:{type:"ds.search",options:{query:`| inputlookup outages_example.csv 
| eval _time=strptime('Date Event Began',"%m/%d/%Y")
| search Respondent = B*
| sort - _time
| stats sparkline(count) by Respondent`,queryParameters:{earliest:"0",latest:""}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust column formatting and add sparklines to tables",title:"Table Formatting",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3NUrAfkt",type:"block",position:{x:0,y:0,w:1440,h:179}},{item:"viz_gezCclRK",type:"block",position:{x:0,y:179,w:618,h:356}},{item:"viz_Zy9SbUug",type:"block",position:{x:0,y:535,w:618,h:397}},{item:"viz_FiYpf6Mn",type:"block",position:{x:0,y:932,w:618,h:468}},{item:"viz_RVNSVBHv",type:"block",position:{x:618,y:179,w:582,h:356}},{item:"viz_n67ApED4",type:"block",position:{x:618,y:535,w:582,h:397}},{item:"viz_Hb2gqYLi",type:"block",position:{x:618,y:932,w:582,h:468}}]}},globalInputs:[]}};var o=t(s()),a=t(i());(0,o.default)(a.default.createElement(e,{definition:n}),{pageTitle:"Table Formatting",hideFooter:!0,layout:"fixed"});
