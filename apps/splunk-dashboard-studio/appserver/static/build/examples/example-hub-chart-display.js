import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as o}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as i}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_NkdSFCWV:{type:"splunk.markdown",options:{markdown:`### Overview
Charts such as bar, column, area, line and more have certain display properties that can be adjusted to precisely represent your data correctly. These include axes, legend, and labelling options. 

Each of the following examples showcase numerous options in one chart.
`}},viz_FeaFm49k:{type:"splunk.column",options:{xAxisLabelRotation:-45,dataValuesDisplay:"all",xAxisTitleText:"Splunk User",yAxisTitleText:"Total Events Logged"},dataSources:{primary:"ds_search1"},title:"Column Chart",description:"X and Y Axis Titles, Show Data Values, X Axis Label Rotation"},viz_nXvOMvFp:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
\`\`\`

### Options Definition 
\`\`\`
{
    "type": "splunk.column",
    "options": {
        "xAxisLabelRotation": -45,
        "dataValuesDisplay": "all",
        "xAxisTitleText": "Splunk User",
        "yAxisTitleText": "Total Events Logged"
    },
    "dataSources": {
        "primary": "ds_search1"
    },
    "context": {}
}
\`\`\``}},viz_M3neZGtb:{type:"splunk.line",options:{yAxisTitleVisibility:"hide",legendDisplay:"off",showXMajorGridLines:!0,xAxisMaxLabelParts:1,xAxisTitleVisibility:"hide",dataValuesDisplay:"minmax"},dataSources:{primary:"ds_search2"},title:"Line Chart",description:"Hidden Axis Titles, Minmax Values, Gridlines, Label Parts, Hidden Legend"},viz_KWWPes23:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime
\`\`\`

### Options Definition 
\`\`\`
{
    "type": "splunk.line",
    "options": {
        "yAxisTitleVisibility": "hide",
        "legendDisplay": "off",
        "showXMajorGridLines": true,
        "xAxisMaxLabelParts": 1,
        "xAxisTitleVisibility": "hide",
        "dataValuesDisplay": "minmax"
    },
    "dataSources": {
        "primary": "ds_search2"
    },
    "context": {}
}
\`\`\``}},viz_QcC5ni3l:{type:"splunk.line",dataSources:{primary:"ds_search3"},options:{legendDisplay:"top",legendTruncation:"ellipsisMiddle"},title:"Line Chart",description:"Legend Placement Top, Truncation ellipsisMiddle"},viz_aXAdzXaF:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
| rename host8 as "superduperlonghostnamenumber1", host18 as "superduperlonghostnamenumber2"
\`\`\`

### Options Definition 
\`\`\`
{
    "type": "splunk.line",
    "dataSources": {
        "primary": "ds_search3"
    },
    "options": {
        "legendDisplay": "top",
        "legendTruncation": "ellipsisMiddle"
    },
    "title": "Line Chart",
    "description": "Legend Placement Top, Truncation ellipsisMiddle",
    "context": {}
}
\`\`\``}},viz_XbhX17IC:{type:"splunk.area",dataSources:{primary:"ds_search4"},options:{yAxisAbbreviation:"off",dataValuesDisplay:"minmax"},title:"Area Chart",description:"Y Axis Abbreviations Off, Min Max"},viz_y3gQv0hh:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
\`\`\`

### Options Definition 
\`\`\`
{
    "type": "splunk.area",
    "dataSources": {
        "primary": "ds_search4"
    },
    "options": {
        "yAxisAbbreviation": "off",
        "dataValuesDisplay": "minmax"
    },
    "context": {}
}
\`\`\``}},viz_rRvvHNCf:{type:"splunk.bar",dataSources:{primary:"ds_search1"},options:{xAxisTitleText:"User",yAxisTitleText:"Count",xAxisLineVisibility:"show",xAxisMajorTickSize:10,showYMajorGridLines:!1},title:"Bar Chart",description:"X Axis Tick Size, Major Gridlines off, Line Visibility"},viz_YV1UGVpM:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| stats count by host
\`\`\`

### Options Definition 
\`\`\`
{
    "type": "splunk.bar",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {
        "xAxisTitleText": "User",
        "yAxisTitleText": "Count",
        "xAxisLineVisibility": "show",
        "xAxisMajorTickSize": 10,
        "showYMajorGridLines": false
    },
    "title": "Bar Chart",
    "description": "X Axis Tick Size, Major Gridlines off, Line Visibility",
    "context": {}
}
\`\`\``}},viz_TwvMncp0:{type:"splunk.line",options:{xAxisTitleVisibility:"hide",yAxisTitleVisibility:"hide",legendDisplay:"off",showYMajorGridLines:!1,xAxisLabelVisibility:"hide",yAxisLabelVisibility:"hide",xAxisMajorTickVisibility:"hide"},dataSources:{primary:"ds_search4"},title:"Hide Everything",description:"No Labels, Tick Marks, Legends, Axis Titles, or Gridlines"},viz_hQxRVAff:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host
\`\`\`

### Options Definition 
\`\`\`
{
    "type": "splunk.line",
    "options": {
        "xAxisTitleVisibility": "hide",
        "yAxisTitleVisibility": "hide",
        "legendDisplay": "off",
        "showYMajorGridLines": false,
        "xAxisLabelVisibility": "hide",
        "yAxisLabelVisibility": "hide",
        "xAxisMajorTickVisibility": "hide"
    },
    "dataSources": {
        "primary": "ds_search3"
    },
    "context": {}
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats count by host`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"},ds_search3:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host| rename host8 as "superduperlonghostnamenumber1", host18 as "superduperlonghostnamenumber2"`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_3"},ds_search4:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| chart count over myTime by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_4"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Adjust how chart properties such as axes and legends frame your data",title:"Display Axes, Labels and Legends",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_NkdSFCWV",type:"block",position:{x:0,y:0,w:1440,h:115}},{item:"viz_FeaFm49k",type:"block",position:{x:0,y:115,w:600,h:438}},{item:"viz_M3neZGtb",type:"block",position:{x:0,y:553,w:600,h:479}},{item:"viz_QcC5ni3l",type:"block",position:{x:0,y:1032,w:600,h:475}},{item:"viz_XbhX17IC",type:"block",position:{x:0,y:1507,w:600,h:420}},{item:"viz_rRvvHNCf",type:"block",position:{x:0,y:1927,w:600,h:497}},{item:"viz_TwvMncp0",type:"block",position:{x:0,y:2424,w:600,h:491}},{item:"viz_nXvOMvFp",type:"block",position:{x:600,y:115,w:600,h:438}},{item:"viz_KWWPes23",type:"block",position:{x:600,y:553,w:600,h:479}},{item:"viz_aXAdzXaF",type:"block",position:{x:600,y:1032,w:600,h:475}},{item:"viz_y3gQv0hh",type:"block",position:{x:600,y:1507,w:600,h:420}},{item:"viz_YV1UGVpM",type:"block",position:{x:600,y:1927,w:600,h:497}},{item:"viz_hQxRVAff",type:"block",position:{x:600,y:2424,w:600,h:491}}]}},globalInputs:[]}};var t=i(o()),s=i(a());(0,t.default)(s.default.createElement(e,{definition:n}),{pageTitle:"Display Axes, Labels, Legends",hideFooter:!0,layout:"fixed"});
