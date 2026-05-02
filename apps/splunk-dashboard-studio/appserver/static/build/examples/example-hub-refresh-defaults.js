import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as r}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_pcZVNjLm:{type:"splunk.markdown",options:{markdown:`## Overview
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
