import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as i}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_pcZVNjLm:{type:"splunk.markdown",options:{markdown:`## Overview
Using defaults saves you time by applying a certain configuration or option in one place. One of the datasource options that you can set as default is the **refresh**.  

You can configure whether or not a datasource on your dashboard has a refresh set or not, as well as the type of refresh used. **Delay** starts the timer when the search is complete whereas **interval** starts the timer when the search is dispatched. By default, every visualization comes with the option to show when it was last updated to \`false\`. To see if your refresh is what you expected, turning this option to \`true\` can be a good way to confirm the dashboard is working the way you designed. 
\`\`\`
"showLastUpdated": false
\`\`\`

As with all defaults, you can set them per datasource type, global, or locally within each datasource definition. The locally defined option takes the highest priority, and then the type specific default, and then the global. 

### Default Definition
\`\`\`
"defaults": {
		"dataSources": {
			"global": {
				"options": {
					"refresh": "15s",
					"refreshType": "delay"
				}
			},
			"ds.search": {
				"options": {
					"refresh": "10s",
					"refreshType": "delay"
				}
			}
		}
	}
\`\`\``}},viz_HzpHxRa6:{type:"splunk.singlevalue",dataSources:{primary:"ds_XEyZrqjG"},title:"Refresh Set to 15 seconds - Last Updated On",description:"This visualization uses a ds.chain datasource, therefore the global default of 15s applies here",options:{sparklineDisplay:"after"},showProgressBar:!1,showLastUpdated:!0},viz_dZUpbQPE:{type:"splunk.singlevalue",dataSources:{primary:"ds_WmZ05OjQ"},title:"Refresh set to 10 seconds - Last Updated Off",description:"This visualization uses a ds.search datasource, therefore the configured default of 10s applies here",options:{sparklineDisplay:"after"},showProgressBar:!0}},dataSources:{ds_WmZ05OjQ:{type:"ds.search",options:{queryParameters:{earliest:"-4h@m",latest:"now"},query:"| makeresults count=15| streamstats count| eval _time=_time-(count*86400)| eval value=random()%100| fields _time value"},name:"Search_1"},ds_WRhFn3VE:{type:"ds.search",options:{queryParameters:{earliest:"-60m@m",latest:"now"},query:`| makeresults count=15
| streamstats count
| eval _time=_time-(count*86400)`},name:"Search_2"},ds_XEyZrqjG:{type:"ds.chain",options:{extend:"ds_WRhFn3VE",query:"| eval value=random()%100| fields _time value"},name:"Search_3"}},defaults:{dataSources:{global:{options:{refresh:"15s",refreshType:"delay"}},"ds.search":{options:{refresh:"10s",refreshType:"delay"}}}},inputs:{},description:"Data sources of different types can refresh at different intervals, or a global default can be set for all data sources",title:"Refresh Defaults and Show Last Updated",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_pcZVNjLm",type:"block",position:{x:0,y:0,w:600,h:726}},{item:"viz_dZUpbQPE",type:"block",position:{x:600,y:364,w:600,h:362}},{item:"viz_HzpHxRa6",type:"block",position:{x:600,y:0,w:600,h:364}}]}},globalInputs:[]}};var s=e(i()),o=e(r());(0,s.default)(o.default.createElement(t,{definition:a}),{pageTitle:"Refresh Defaults",hideFooter:!0,layout:"fixed"});
