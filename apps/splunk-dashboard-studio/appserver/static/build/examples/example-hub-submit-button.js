import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as l}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as n}from"../chunks/chunk-25J5MIFG.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_jvApjKMh:{type:"splunk.markdown",options:{markdown:`## Overview

You can add a submit button so the dashboard does not refresh until the user has selected all input choices. This can avoid unnecessary search executions when multiple inputs are being changed.

To have the dashboard load using the default input values, add the option \`submitOnDashboardLoad\`, which will automatically run searches on the first dashboard load. After the initial load, the user must select the submit button to refresh the dashboard's searches and visualizations.

This example has \`submitOnDashboardLoad\` enabled.




`}},viz_oFXFrMCf:{type:"splunk.markdown",options:{markdown:"## Selected Input values\n\nSelected Host :   `$host$`\n\nSelected Error Code:   `$code$`\n\nSelected Key Words:   `$key_word$`"}},viz_mrbejEbu:{type:"splunk.markdown",options:{markdown:`\`\`\`
"layout": {
		"type": "grid",
		"options": {
			"width": 1440,
			"height": 960,
			"submitButton": true,
			"submitOnDashboardLoad": true
		},
		"structure": [
...
\`\`\``}}},dataSources:{},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_YFw60F7i:{options:{items:[{label:"All",value:"*"},{label:"401",value:"401"},{label:"402",value:"402"},{label:"403",value:"403"}],defaultValue:["401"],token:"code"},title:"Select Error Code",type:"input.multiselect"},input_QUyDwraR:{options:{items:[{label:"All",value:"*"},{label:"Host 1",value:"Host_1"},{label:"Host 2",value:"Host 2"},{label:"Host 3",value:"Host 3"}],defaultValue:"*",token:"host"},title:"Select Host",type:"input.dropdown"},input_CV7lPA1r:{options:{defaultValue:"login",token:"key_word"},title:"Key Words",type:"input.text"}},description:"Submit all input selections at once",title:"Submit Button",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",options:{width:1440,height:960},structure:[{item:"viz_jvApjKMh",type:"block",position:{x:0,y:0,w:1440,h:140}},{item:"viz_oFXFrMCf",type:"block",position:{x:0,y:140,w:741,h:225}},{item:"viz_mrbejEbu",type:"block",position:{x:741,y:140,w:699,h:225}}]}},globalInputs:["input_QUyDwraR","input_YFw60F7i","input_CV7lPA1r"],options:{submitButton:!0,submitOnDashboardLoad:!0}}};var i=t(l()),a=t(n());(0,i.default)(a.default.createElement(e,{definition:o}),{pageTitle:"Submit Button",hideFooter:!0,layout:"fixed"});
