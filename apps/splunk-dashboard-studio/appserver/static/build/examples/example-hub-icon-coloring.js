import{a as o}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as r}from"../chunks/chunk-YESDDU4C.js";import{h as n}from"../chunks/chunk-ME4V5RLK.js";var e={visualizations:{viz_rdQEoV7s:{type:"splunk.markdown",options:{markdown:`## Overview
Icons can be added to single values to help signal important changes and give a better understanding to what the single value represents. This is useful in situations where the icon accurately represents the data, and it is undesirable to use a viz title or description to explain the metric. 

The following examples show a few configurations of Single Values with icons and the coloring options available. The following examples can be seen as an extension of Single Value coloring examples, as the basis for coloring the background, majorValue and trendValue applies in the same manner.`}},viz_a7ZJlbts:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search2"},options:{backgroundColor:"> majorValue | matchValue(backgroundColorEditorConfig)",icon:"activity"},context:{backgroundColorEditorConfig:[{value:"#5C33FF",match:"Info"},{value:"#AD3F20",match:"Warning"},{value:"#AD3F20",match:"Critical"}]}},viz_sm0OIKft:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| makeresults count=4
| streamstats count
| eval score = random()%3 +1
| eval status = case(score=1,"Info", score=2, "Warning", score=3, "Critical")
| table status
\`\`\`

### Background Color Based on Major Value using matchValue formatter
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_7ib0hJVa:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search1"},options:{iconColor:"> majorValue | rangeValue(iconColorEditorConfig)"},context:{iconColorEditorConfig:[{value:"#FE3A3A",to:50},{value:"#FF7149",from:50,to:100},{value:"#FFA857",from:100,to:200},{value:"#FFD442",from:200,to:300},{value:"#C3CC33",from:300,to:400},{value:"#2EB82E",from:400,to:500},{value:"#088F44",from:500}]}},viz_W2AiYNs6:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Icon based on Major Value with rangeValue formatter
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "iconColor": "> majorValue | rangeValue(iconColorEditorConfig)"
    },
    "context": {
        "iconColorEditorConfig": [
            {
                "value": "#FE3A3A",
                "to": 50
            },
            {
                "value": "#FF7149",
                "from": 50,
                "to": 100
            },
            {
                "value": "#FFA857",
                "from": 100,
                "to": 200
            },
            {
                "value": "#FFD442",
                "from": 200,
                "to": 300
            },
            {
                "value": "#C3CC33",
                "from": 300,
                "to": 400
            },
            {
                "value": "#2EB82E",
                "from": 400,
                "to": 500
            },
            {
                "value": "#088F44",
                "from": 500
            }
        ]
    }
}
\`\`\``}},viz_ndYHA4eM:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search1"},options:{iconColor:"> trendValue | rangeValue(iconColorEditorConfig)"},context:{iconColorEditorConfig:[{value:"#FE3A3A",to:50},{value:"#FF7149",from:50,to:100},{value:"#FFA857",from:100,to:200},{value:"#FFD442",from:200,to:300},{value:"#C3CC33",from:300,to:400},{value:"#2EB82E",from:400,to:500},{value:"#088F44",from:500}]}},viz_OZ6lF8tO:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Icon based on Trend Value with rangeValue formatter
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "iconColor": "> trendValue | rangeValue(iconColorEditorConfig)"
    },
    "context": {
        "iconColorEditorConfig": [
            {
                "value": "#FE3A3A",
                "to": 50
            },
            {
                "value": "#FF7149",
                "from": 50,
                "to": 100
            },
            {
                "value": "#FFA857",
                "from": 100,
                "to": 200
            },
            {
                "value": "#FFD442",
                "from": 200,
                "to": 300
            },
            {
                "value": "#C3CC33",
                "from": 300,
                "to": 400
            },
            {
                "value": "#2EB82E",
                "from": 400,
                "to": 500
            },
            {
                "value": "#088F44",
                "from": 500
            }
        ]
    }
}
\`\`\``}},viz_TgpLU91P:{type:"splunk.singlevalueicon",dataSources:{primary:"ds_search1"},options:{majorValue:">primary |seriesByName('count')|lastPoint()",iconColor:"> majorValue | rangeValue(iconColorEditorConfig)",majorColor:"> majorValue | rangeValue(majorColorEditorConfig)"},context:{iconPositionValues:[{from:3,value:"top"},{to:3,value:"after"}],iconColorEditorConfig:[{to:20,value:"#D41F1F"},{from:20,to:40,value:"#D94E17"},{from:40,to:60,value:"#CBA700"},{from:60,to:80,value:"#669922"},{from:80,value:"#118832"}],majorColorEditorConfig:[{to:20,value:"#D41F1F"},{from:20,to:40,value:"#D94E17"},{from:40,to:60,value:"#CBA700"},{from:60,to:80,value:"#669922"},{from:80,value:"#118832"}]}},viz_FCJLCn2x:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Basic Configuration w/Default Icon
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "majorValue": ">primary |seriesByName('count')|lastPoint()",
        "iconColor": "> majorValue | rangeValue(iconColorEditorConfig)",
        "majorColor": "> majorValue | rangeValue(majorColorEditorConfig)"
    },
    "context": {
        "iconPositionValues": [
            {
                "from": 3,
                "value": "top"
            },
            {
                "to": 3,
                "value": "after"
            }
        ],
        "iconColorEditorConfig": [
            {
                "to": 20,
                "value": "#D41F1F"
            },
            {
                "from": 20,
                "to": 40,
                "value": "#D94E17"
            },
            {
                "from": 40,
                "to": 60,
                "value": "#CBA700"
            },
            {
                "from": 60,
                "to": 80,
                "value": "#669922"
            },
            {
                "from": 80,
                "value": "#118832"
            }
        ],
        "majorColorEditorConfig": [
            {
                "to": 20,
                "value": "#D41F1F"
            },
            {
                "from": 20,
                "to": 40,
                "value": "#D94E17"
            },
            {
                "from": 40,
                "to": 60,
                "value": "#CBA700"
            },
            {
                "from": 60,
                "to": 80,
                "value": "#669922"
            },
            {
                "from": 80,
                "value": "#118832"
            }
        ]
    }
}
\`\`\``}},viz_LN1npMb2:{type:"splunk.singlevalueicon",options:{showValue:!1,icon:"star",iconColor:"> majorValue | rangeValue(iconColorEditorConfig)"},context:{iconColorEditorConfig:[{to:20,value:"#D41F1F"},{from:20,to:40,value:"#D94E17"},{from:40,to:60,value:"#CBA700"},{from:60,to:80,value:"#669922"},{from:80,value:"#118832"}]},dataSources:{primary:"ds_search1"}},viz_vO9KPyJD:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### No Value Icon Coloring
\`\`\`
{
    "type": "splunk.singlevalueicon",
    "options": {
        "showValue": false,
        "icon": "star",
        "iconColor": "> majorValue | rangeValue(iconColorEditorConfig)"
    },
    "context": {
        "iconColorEditorConfig": [
            {
                "to": 20,
                "value": "#D41F1F"
            },
            {
                "from": 20,
                "to": 40,
                "value": "#D94E17"
            },
            {
                "from": 40,
                "to": 60,
                "value": "#CBA700"
            },
            {
                "from": 60,
                "to": 80,
                "value": "#669922"
            },
            {
                "from": 80,
                "value": "#118832"
            }
        ]
    },
    "dataSources": {
        "primary": "ds_search1"
    }
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| makeresults count=4
| streamstats count
| eval score = random()%3 +1
| eval status = case(score=1,"Info", score=2, "Warning", score=3, "Critical")
| table status`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_2"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust coloring for single value icon visualizations to help indicate status at a glance",title:"Icon Coloring",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_rdQEoV7s",type:"block",position:{x:0,y:0,w:1440,h:185}},{item:"viz_a7ZJlbts",type:"block",position:{x:0,y:185,w:304,h:343}},{item:"viz_ndYHA4eM",type:"block",position:{x:0,y:528,w:304,h:328}},{item:"viz_LN1npMb2",type:"block",position:{x:0,y:856,w:600,h:350}},{item:"viz_sm0OIKft",type:"block",position:{x:304,y:185,w:296,h:343}},{item:"viz_OZ6lF8tO",type:"block",position:{x:304,y:528,w:296,h:328}},{item:"viz_7ib0hJVa",type:"block",position:{x:600,y:185,w:309,h:343}},{item:"viz_TgpLU91P",type:"block",position:{x:600,y:528,w:309,h:328}},{item:"viz_vO9KPyJD",type:"block",position:{x:600,y:856,w:600,h:350}},{item:"viz_W2AiYNs6",type:"block",position:{x:909,y:185,w:291,h:343}},{item:"viz_FCJLCn2x",type:"block",position:{x:909,y:528,w:291,h:328}}]}},globalInputs:[]}};var a=n(i()),t=n(r());(0,a.default)(t.default.createElement(o,{definition:e}),{pageTitle:"Icon Coloring",hideFooter:!0,layout:"fixed"});
