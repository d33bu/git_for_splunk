import{a as o}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as s}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var e={visualizations:{viz_AohBmiPR:{type:"splunk.image",options:{preserveAspectRatio:!0,src:"/static/app/splunk-dashboard-studio/images/examples-hub/images/splunk_logo.png"}},viz_0kNU0yRv:{type:"splunk.image",options:{src:"/static/app/splunk-dashboard-studio/images/examples-hub/images/splunk_logo.png"}},viz_jtcenYVx:{type:"splunk.markdown",options:{content:"",markdown:`## Overview

Images can be set in the dashboard or as part of the background. They are a great way to set some visual context, add company branding and also make your dashboard pop. `}},viz_uFN34V9Z:{type:"splunk.markdown",options:{content:"",markdown:`### Background Images

In this page, we showcase a background used in one of your example dashboards. A background like this can help set the aesthetic of your dashboard, and then coloring options for each of the visualizations on your dashboard can compliment it.

### Image as Background Source

\`\`\`
"layout": {
		"type": "absolute",
		"options": {
			"height": 1400,
			"width": 1440,
			"backgroundColor": "transparent",
			"display": "auto-scale",
			"backgroundImage": {
				"sizeType": "contain",
				"x": 0,
				"y": 0,
				"src": "/static/app/splunk-dashboard-studio/images/examples-hub/ecommerce/background.png"
			}
		}
}
\`\`\``}},viz_h7074ePq:{type:"splunk.markdown",options:{content:"",markdown:`### Image Source - Preserved Aspect Ratio

\`\`\`
{
    "type": "splunk.image",
    "options": {
        "preserveAspectRatio": true,
        "src": "/static/app/splunk-dashboard-studio/images/examples-hub/images/splunk_logo.png"
    },
    "context": {}
}
\`\`\``}},viz_66Cmab3h:{type:"splunk.markdown",options:{content:"",markdown:`### Image Source - Aspect Ratio not Preserved

\`\`\`
{
    "type": "splunk.image",
    "options": {
        "src": "/static/app/splunk-dashboard-studio/images/examples-hub/images/splunk_logo.png"
    },
    "context": {}
}
\`\`\``}}},dataSources:{},inputs:{},description:"Use Images to add visual context and personalize your dashboard ",title:"Images",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"absolute",options:{width:1440,backgroundColor:"transparent",display:"auto-scale",backgroundImage:{sizeType:"cover",x:0,y:0,src:"/static/app/splunk-dashboard-studio/images/examples-hub/ecommerce/background.png"},height:800},structure:[{item:"viz_AohBmiPR",type:"block",position:{x:740,y:40,w:330,h:320}},{item:"viz_0kNU0yRv",type:"block",position:{x:720,y:440,w:350,h:200}},{item:"viz_jtcenYVx",type:"block",position:{x:40,y:10,w:570,h:110}},{item:"viz_uFN34V9Z",type:"block",position:{x:40,y:150,w:590,h:480}},{item:"viz_h7074ePq",type:"block",position:{x:1080,y:20,w:340,h:350}},{item:"viz_66Cmab3h",type:"block",position:{x:1080,y:400,w:340,h:350}}]}}}};var n=t(i()),a=t(s());(0,n.default)(a.default.createElement(o,{definition:e}),{pageTitle:"Images",hideFooter:!0,layout:"fixed"});
