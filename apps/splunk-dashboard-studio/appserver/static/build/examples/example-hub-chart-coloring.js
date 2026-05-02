import{a as o}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as a}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as r}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var t={visualizations:{viz_3X53kBj2:{type:"splunk.markdown",options:{markdown:`## Overview
There are multiple ways to color charts in Splunk Dashboards by using hex codes. In other example pages, specific options are shown for visualizations, such as dynamic coloring. 

In this page, we will cover general coloring options that are applicable across many of the "chart" type visualizations, including bar, column, area, line, scatter, bubble and pie. 

The main way to color these charts is by the \`seriesColors\`, \`seriesColorsbyField\` and \`backgroundColor\` options. The following examples showcase each of these capabilities. 

### SPL For Series Colors Examples
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host2 host18 host19 host248)
| eval myTime=strftime(timestamp,"%Y-%m-%dT%H:%M")
| chart count over myTime by host
\`\`\`
### Series Colors Source Definition
\`\`\`
//Add the following in the visualization options property 
"seriesColors": [ "#F0B000", "#45D4BA", "#FB865C", "#0065FF"]
\`\`\`
`}},viz_BhAB9tQB:{type:"splunk.area",dataSources:{primary:"ds_search1"},options:{seriesColors:["#F0B000","#45D4BA","#FB865C","#0065FF"],stackMode:"stacked"},title:"Area Series Colors"},viz_sA5Fb0SE:{type:"splunk.line",dataSources:{primary:"ds_search1"},title:"Line Series Colors",showProgressBar:!1,showLastUpdated:!1,options:{seriesColors:["#F0B000","#45D4BA","#FB865C","#0065FF"]}},viz_CZOpmqY8:{type:"splunk.column",dataSources:{primary:"ds_search1"},options:{stackMode:"stacked",seriesColors:["#F0B000","#45D4BA","#FB865C","#0065FF"]},title:"Column Series Colors"},viz_3fRxw1wg:{type:"splunk.markdown",options:{markdown:`### SPL For Series Colors by Field
\`\`\`
| inputlookup firewall_example.csv
| search host IN (host8, host18, host248, host254)
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_in) sum(bytes_out) over myTime by host
\`\`\`
### Series Colors by Field Source Definition
\`\`\`
//Add the following in the visualization options property 
        "seriesColorsByField": {
            "sum(bytes_in)": "#FE3A3A",
            "sum(bytes_out)": "#088F44"
        }
\`\`\``}},viz_45TtKSOc:{type:"splunk.area",title:"Area Field Colors",dataSources:{primary:"ds_search2"},options:{seriesColorsByField:{"sum(bytes_in)":"#FE3A3A","sum(bytes_out)":"#088F44"}}},viz_qJYcNXJG:{type:"splunk.pie",dataSources:{primary:"ds_search3"},options:{backgroundColor:"transparent"}},viz_m83OrRWB:{type:"splunk.markdown",options:{markdown:'### SPL For Background Color\n```\n| inputlookup firewall_example.csv\n| chart count by host\n```\n### Series Colors Source Definition\n```\n//Add the following in the visualization options property \n"backgroundColor": "transparent"\n```'}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host2 host18 host19 host248)
| eval myTime=strftime(timestamp,"%Y-%m-%dT%H:%M")
| chart count over myTime by host`,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host IN (host8, host18, host248, host254)
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_in) sum(bytes_out) over myTime `,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_2"},ds_search3:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| chart count by host`,queryParameters:{earliest:"-4h@m",latest:"now"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Customize chart colors to reflect your preferred aesthetic",title:"Chart Coloring",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_3X53kBj2",type:"block",position:{x:0,y:0,w:1440,h:436}},{item:"viz_BhAB9tQB",type:"block",position:{x:0,y:436,w:411,h:400}},{item:"viz_3fRxw1wg",type:"block",position:{x:0,y:836,w:598,h:341}},{item:"viz_m83OrRWB",type:"block",position:{x:0,y:1177,w:598,h:315}},{item:"viz_sA5Fb0SE",type:"block",position:{x:411,y:436,w:402,h:400}},{item:"viz_45TtKSOc",type:"block",position:{x:598,y:836,w:602,h:341}},{item:"viz_qJYcNXJG",type:"block",position:{x:598,y:1177,w:602,h:315}},{item:"viz_CZOpmqY8",type:"block",position:{x:813,y:436,w:387,h:400}}]}},globalInputs:[]}};var s=e(a()),i=e(r());(0,s.default)(i.default.createElement(o,{definition:t}),{pageTitle:"Chart Coloring",hideFooter:!0,layout:"fixed"});
