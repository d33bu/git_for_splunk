import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as o}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
Multiselect inputs allow users to select multiple options from a list to set a token. The list can be manually defined, known as **static**, or it can be populated with the results of a search, known as **dynamic**. These two configurations can be edited using the UI editor for the inputs. By default the input uses a comma as a delimiter for multiple entries.

### SPL for Dynamic Input
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
\`\`\`
### Source  for Dynamic Input
\`\`\`
{
    "type": "input.multiselect",
    "options": {
        "items": ">frame(label, value) | prepend(formattedStatics) | objects()",
        "token": "token1",
        "defaultValue": "*"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "Dynamic Input - Select Host",
    "context": {
        "formattedConfig": {
            "number": {
                "prefix": ""
            }
        },
        "formattedStatics": ">statics | formatByType(formattedConfig)",
        "statics": [
            [
                "All"
            ],
            [
                "*"
            ]
        ],
        "label": ">primary | seriesByName(\\"host\\") | renameSeries(\\"label\\") | formatByType(formattedConfig)",
        "value": ">primary | seriesByName(\\"host\\") | renameSeries(\\"value\\") | formatByType(formattedConfig)"
    }
}
\`\`\``}},viz_gMr0oNmO:{type:"splunk.line",title:"Line Chart with Dynamic Input",dataSources:{primary:"ds_2A3Efw25"},description:""},viz_dObiuubP:{type:"splunk.table",title:"Line Chart with Static Input",dataSources:{primary:"ds_quzxE8AQ"},description:"",showProgressBar:!1,showLastUpdated:!1},viz_l9R6qtNj:{type:"splunk.markdown",options:{markdown:`### Source  for Static Input
\`\`\`
{
    "type": "input.multiselect",
    "options": {
        "items": [
            {
                "label": "All",
                "value": "*"
            },
            {
                "label": "Illinois",
                "value": "Illinois"
            },
            {
                "label": "New York",
                "value": "\\"New York\\""
            },
            {
                "label": "Washington",
                "value": "Washington"
            }
        ],
        "token": "token2",
        "defaultValue": "*"
    },
    "dataSources": {},
    "title": "Static Input - Select Region"
}
\`\`\``}},viz_CzMsyOVW:{type:"splunk.rectangle",options:{fillColor:"transparent",strokeColor:"transparent"}},viz_14zGrW02:{type:"splunk.markdown",options:{markdown:'### SPL for Line Chart with Dynamic Input\n```\n| inputlookup firewall_example.csv \n| eval myTime=strftime(timestamp,"%H:%M") \n| search host IN ($$token1$$) \n| chart count over myTime by host\n```'}},viz_XiBNJ5iK:{type:"splunk.markdown",options:{markdown:'### SPL for Line Chart with Static Input\n```\n| inputlookup outages_example.csv\n| search "Geographic Areas" IN ($$token2$$)\n| stats count by Respondent\n```'}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"},ds_2A3Efw25:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| search host IN ($token1$)
| chart count over myTime by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_2"},ds_quzxE8AQ:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| search "Geographic Areas" IN ($token2$)
| stats count by Respondent`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_ovnr6KpF:{type:"input.multiselect",options:{items:">frame(label, value) | prepend(formattedStatics) | objects()",token:"token1",defaultValue:"*"},dataSources:{primary:"ds_search1"},title:"Dynamic Input - Select Host",context:{formattedConfig:{number:{prefix:""}},formattedStatics:">statics | formatByType(formattedConfig)",statics:[["All"],["*"]],label:'>primary | seriesByName("host") | renameSeries("label") | formatByType(formattedConfig)',value:'>primary | seriesByName("host") | renameSeries("value") | formatByType(formattedConfig)'}},input_9MxBqEwU:{type:"input.multiselect",options:{items:[{label:"All",value:"*"},{label:"Illinois",value:"Illinois"},{label:"New York",value:'"New York"'},{label:"Washington",value:"Washington"}],token:"token2",defaultValue:"*"},dataSources:{},title:"Static Input - Select Region"}},description:"Set a token to multiple values by using a form populated with static or dynamic options",title:"Multiselect Input",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_RBdQ2qQ5",type:"block",position:{x:0,y:0,w:588,h:524}},{item:"input_9MxBqEwU",type:"input",position:{x:0,y:524,w:171,h:90}},{item:"viz_l9R6qtNj",type:"block",position:{x:0,y:614,w:588,h:572}},{item:"viz_CzMsyOVW",type:"block",position:{x:171,y:524,w:1029,h:90}},{item:"viz_dObiuubP",type:"block",position:{x:588,y:727,w:612,h:459}},{item:"viz_XiBNJ5iK",type:"block",position:{x:588,y:614,w:612,h:113}},{item:"viz_gMr0oNmO",type:"block",position:{x:588,y:129,w:612,h:395}},{item:"viz_14zGrW02",type:"block",position:{x:588,y:0,w:612,h:129}}]}},globalInputs:["input_ovnr6KpF"]}};var a=t(s()),i=t(o());(0,a.default)(i.default.createElement(e,{definition:n}),{pageTitle:"Multiselect",hideFooter:!0,layout:"fixed"});
