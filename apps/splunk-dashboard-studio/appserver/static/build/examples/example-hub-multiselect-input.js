import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as o}from"../chunks/chunk-25J5MIFG.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
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
