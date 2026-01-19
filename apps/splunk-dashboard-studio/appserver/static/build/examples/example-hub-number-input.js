import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as r}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as i}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
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
