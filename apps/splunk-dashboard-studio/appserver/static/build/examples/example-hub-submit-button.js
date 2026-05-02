import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as l}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as n}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_jvApjKMh:{type:"splunk.markdown",options:{markdown:`## Overview

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
