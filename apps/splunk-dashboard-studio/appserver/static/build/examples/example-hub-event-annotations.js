import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as s}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:`## Overview
When monitoring time-series data, certain events might contain crucial information that provides larger context to underlying mechanisms in your data. For these scenarios, such as monitoring alerts and failures, event annotations can be used. Event annotations allow you to see when a certain event of interest takes place in a larger stream of time-series data. The key to make event annotations work is to have the alerts and statuses of interest being on the same time span as the main data being plotted.

The below examples showcase event annotations for area and column charts. Note that for event annotations, two datasources are required, one for the chart itself, and one for the annotations. This example uses a makeresults query for both charts, with the difference between them being that for each chart's annotation data, the area uses different colors whereas the column uses the same color. 

### SPL Query for Charts
\`\`\`
| makeresults count=15
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100
| fields _time value
\`\`\`


`}},viz_jHj4nb3Y:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.area",
    "options": {
        "annotationX": "> annotations | seriesByIndex(0)",
        "annotationLabel": "> annotations | seriesByIndex(1)",
        "annotationColor": "> annotations | seriesByIndex(2)"
    },
    "dataSources": {
        "primary": "ds_chart",
        "annotations": "ds_markers"
    }
}
\`\`\`
### SPL Query for Annotations
\`\`\`
| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = case(score=1,"#f44271", score=2, "#f4a941", score=3, "#41f49a")
| table _time status color
\`\`\`
`}},viz_25GoP8BK:{type:"splunk.area",options:{annotationX:"> annotations | seriesByIndex(0)",annotationLabel:"> annotations | seriesByIndex(1)",annotationColor:"> annotations | seriesByIndex(2)"},dataSources:{primary:"ds_chart",annotations:"ds_markers"},title:"Area Chart with Annotations",description:"Color dynamically using match value"},viz_5jEsD8lR:{type:"splunk.column",dataSources:{primary:"ds_chart",annotations:"ds_markers_one_color"},title:"Column Chart with Annotations",description:"All Set to One Color",options:{annotationX:"> annotations | seriesByIndex(0)",annotationLabel:"> annotations | seriesByIndex(1)",annotationColor:"> annotations | seriesByIndex(2)"}},viz_wo3MmrZc:{type:"splunk.markdown",options:{markdown:`### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_chart",
        "annotations": "ds_markers_one_color"
    },
    "options": {
        "annotationX": "> annotations | seriesByIndex(0)",
        "annotationLabel": "> annotations | seriesByIndex(1)",
        "annotationColor": "> annotations | seriesByIndex(2)"
    }
}
\`\`\`
### SPL Query for Annotations
\`\`\`
| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = "#f44271"
| table _time status color
\`\`\`
`}}},dataSources:{ds_chart:{type:"ds.search",options:{query:`| makeresults count=15
| streamstats count
| eval _time=_time-(count*86400)
| eval value=random()%100
| fields _time value`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"},ds_markers:{type:"ds.search",options:{query:`| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = case(score=1,"#f44271", score=2, "#f4a941", score=3, "#41f49a")
| table _time status color`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_2"},ds_markers_one_color:{type:"ds.search",options:{query:`| makeresults count=3
| streamstats count
| eval _time=_time-(count*86400*3)
| eval score = random()%3 +1
| eval status = case(score=1,"server error detected", score=2, "unknown user access", score=3, "status cleared")
| eval color = "#f44271"
| table _time status color`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Mark important discrete events on time-series charts to provide context ",title:"Chart Annotations",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3X53kBj2",type:"block",position:{x:0,y:0,w:1440,h:358}},{item:"viz_25GoP8BK",type:"block",position:{x:0,y:358,w:663,h:551}},{item:"viz_5jEsD8lR",type:"block",position:{x:0,y:909,w:663,h:509}},{item:"viz_jHj4nb3Y",type:"block",position:{x:663,y:358,w:537,h:551}},{item:"viz_wo3MmrZc",type:"block",position:{x:663,y:909,w:537,h:509}}]}},globalInputs:[]}};var a=e(r()),o=e(s());(0,a.default)(o.default.createElement(t,{definition:n}),{pageTitle:"Chart Annotations",hideFooter:!0,layout:"fixed"});
