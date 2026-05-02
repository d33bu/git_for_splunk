import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as r}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as i}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
A number input allows users to select a single number from a dropdown. When configuring from the UI, users enter a mininum, a maximum, a step and a default value. Numbers can be used to change how many values are returned in a search or change the number of rows shown in a table

### Source  for Number Input
\`\`\`
{
    "type": "input.number",
    "options": {
        "defaultValue": 10,
        "token": "number",
        "min": 0,
        "max": 10,
        "step": 1
    },
    "title": "Number Input Title"
}
\`\`\``}},viz_gMr0oNmO:{type:"splunk.table",title:"Return $num$ Values",dataSources:{primary:"ds_search1"},description:""},viz_U1bGC44o:{type:"splunk.markdown",options:{markdown:`### SPL 
\`\`\`
| inputlookup outages_example.csv
| stats count by "Event Description"
| head $number$
\`\`\`
### Source For Single Value
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "options": {},
    "context": {},
}
\`\`\``}}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| stats count by "Event Description"
| head $num$`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_uPWAplUK:{options:{defaultValue:5,token:"num",min:0,max:10,step:1},title:"Number Input Title",type:"input.number"}},description:"Set tokens by selecting a number from a dropdown",title:"Number Input",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_RBdQ2qQ5",type:"block",position:{x:0,y:0,w:1440,h:385}},{item:"viz_gMr0oNmO",type:"block",position:{x:0,y:385,w:600,h:375}},{item:"viz_U1bGC44o",type:"block",position:{x:600,y:385,w:600,h:375}}]}},globalInputs:["input_uPWAplUK"]}};var o=e(r()),a=e(i());(0,o.default)(a.default.createElement(t,{definition:n}),{pageTitle:"Number Input",hideFooter:!0,layout:"fixed"});
