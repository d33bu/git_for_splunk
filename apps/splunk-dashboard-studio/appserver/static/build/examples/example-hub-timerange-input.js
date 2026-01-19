import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as l}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as o}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_eywUFugw:{type:"splunk.markdown",options:{markdown:`## Overview
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
