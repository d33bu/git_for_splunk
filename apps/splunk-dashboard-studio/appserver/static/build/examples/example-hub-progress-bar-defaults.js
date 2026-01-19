import{a}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as r}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as s}from"../chunks/chunk-25J5MIFG.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var e={visualizations:{viz_pcZVNjLm:{type:"splunk.markdown",options:{markdown:`## Overview
Using defaults saves you time by applying a certain configuration or option in one place. One visualization option that is useful when set as a default is the **progress bar**. Normally, Dashboard Studio visualizations always come with the \`"showProgressBar": false\` option already shown (Example's Hub visualizations have these removed from the displayed source). 

The progress bar allows some visibility into the status of your search. Which can be useful for large searches and can indicate whether or not your dashboard has the latest information or is still retrieving it from Splunk. 

All available visualization defaults can be set globally, per visualization type, and locally within each visualization definition. The local configuration takes highest priority, then type option, then the global option. 

To the right is a GIF of a visualization that has the progress bar enabled. 

### Default Definition
\`\`\`
"defaults": {
		"visualizations": {
			"global": {
				"showProgressBar": false
			},
			"splunk.area": {
				"showProgressBar": true
			}
		}
	}
\`\`\``}},viz_0QN67Fwe:{type:"splunk.image",showProgressBar:!1,showLastUpdated:!1,options:{src:"/static/app/splunk-dashboard-studio/images/examples-hub/progress_bar.gif"}}},dataSources:{},defaults:{visualizations:{global:{showProgressBar:!1},"splunk.area":{showProgressBar:!0}}},inputs:{},description:"Progress bars can be revealed per visualization instance, for every visualization of a certain type, or at a default global level",title:"Progress Bar Defaults",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_pcZVNjLm",type:"block",position:{x:0,y:0,w:634,h:726}},{item:"viz_0QN67Fwe",type:"block",position:{x:634,y:0,w:566,h:726}}]}},globalInputs:[]}};var i=t(r()),o=t(s());(0,i.default)(o.default.createElement(a,{definition:e}),{pageTitle:"Progress Bar Defaults",hideFooter:!0,layout:"fixed"});
