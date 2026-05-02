import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as l}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as o}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_eywUFugw:{type:"splunk.markdown",options:{markdown:`## Overview
By default, a new dashboard comes with a global time range input. A global time range affects every datasource on the dashboard by default.

You can also add another time range, and make it specific to a certain datasource, so that the datasource no longer depends on the default time range picker.  

Lastly, you can also configure a datasource to use a **static** time range, which makes it not dependent on any input and will always stay to what was selected in the datasource's configuration. 

In the following example, the top chart uses the global time range, the middle chart uses the local time range, and the bottom uses "real time" as the static time range selection. All charts use an internal index search (so it may be blocked to some users) however the example source code below can be applied when searching through any index.

### Source for Global Time Range
\`\`\`
{
    "type": "input.timerange",
    "options": {
       "token": "global",
       "defaultValue": "-15m,now"
    },
    "title": "Global Time Range"
}
\`\`\`
### Source for Local Time Range
\`\`\`
{
    "options": {
        "defaultValue": "-5m@m,now",
        "token": "local_time"
    },
    "title": "Local Time",
    "type": "input.timerange"
}
\`\`\``}},viz_vB26gQSP:{type:"splunk.line",dataSources:{primary:"ds_xRZBjW3q"},title:"Global Time"},viz_6tGDmtX1:{type:"splunk.line",dataSources:{primary:"ds_AQGDZTdz"},title:"Local Time"},viz_UQ6JDrTB:{type:"splunk.line",dataSources:{primary:"ds_qOfkgqY1"},title:"Static Time"}},dataSources:{ds_qOfkgqY1:{type:"ds.search",options:{query:`index=_internal
| timechart count by sourcetype`,queryParameters:{earliest:"rt-30s",latest:"rt"}},name:"Search_1"},ds_xRZBjW3q:{type:"ds.search",options:{query:`index=_internal
| timechart count by sourcetype`},name:"Search_2"},ds_AQGDZTdz:{type:"ds.search",options:{query:`index=_internal
| timechart count by sourcetype`,queryParameters:{earliest:"$local_time.earliest$",latest:"$local_time.latest$"}},name:"Search_3"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_global_trp:{type:"input.timerange",options:{token:"global_time",defaultValue:"-15m,now"},title:"Global Time Range"},input_94Exx6lW:{options:{defaultValue:"-5m@m,now",token:"local_time"},title:"Local Time",type:"input.timerange"}},description:"Select the time range used by data sources powering your visualizations",title:"Time Range Input",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_eywUFugw",type:"block",position:{x:0,y:0,w:600,h:741}},{item:"viz_UQ6JDrTB",type:"block",position:{x:600,y:481,w:600,h:260}},{item:"viz_vB26gQSP",type:"block",position:{x:600,y:0,w:600,h:234}},{item:"viz_6tGDmtX1",type:"block",position:{x:600,y:234,w:600,h:247}}]}},globalInputs:["input_global_trp","input_94Exx6lW"]}};var n=e(l()),i=e(o());(0,n.default)(i.default.createElement(t,{definition:a}),{pageTitle:"Time Range Input",hideFooter:!0,layout:"fixed"});
