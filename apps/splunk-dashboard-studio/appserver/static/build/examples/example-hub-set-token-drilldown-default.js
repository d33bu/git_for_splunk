import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var o={visualizations:{viz_LEuCUe5h:{type:"splunk.markdown",options:{markdown:`## Overview 

This example shows how to set static default values with drilldown tokens. This can be set in the UI or using the shown source code below which is part of the \`defaults\` stanza of the dashboard definition. Note that for most cases, the <nameSpace> would be \`default\`. This feature also only supports **static** strings as initial values.

Dashboards allow for various manipulations and interactions that result in the setting of a token. This can be done through the drilldown settings of a visualization or through a form input. Most tokens however, only receive values after an initial interaction has been made with the dashboard. The implication of this behaviour would mean that any visualization or object on the dashboard that requires that token in its search, would not show results when the dashboard is first loaded and that token did not get set. 

Form inputs have the option for default values for their tokens to address this problem. Notice in the [Dropdown Input Example](/app/splunk-dashboard-studio/example-hub-dropdown-input), the charts populate as expected and the inputs have "All" selected as the default. This example shows how to do the same with drilldown tokens. 
\`\`\`
"defaults": {
	"tokens": {
		"<nameSpace>": {
			"<tokenName>": {
				"value":  "<staticValue>"
			}
		}
	}
}
\`\`\``}},viz_H4zD53XX:{type:"splunk.table",dataSources:{primary:"ds_BU6mpc5w"},eventHandlers:[{type:"drilldown.setToken",options:{tokens:[{token:"bytes_in",key:"row.host.value"},{token:"bytes_out",key:"row.host.value"}]}}],title:"Data Table"},viz_v5WItj06:{type:"splunk.markdown",options:{markdown:`## Table Set Token Source

\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_BU6mpc5w"
    },
    "eventHandlers": [
        {
            "type": "drilldown.setToken",
            "options": {
                "tokens": [
                    {
                        "token": "bytes_in_token",
                        "key": "row.host.value"
                    },
                    {
                        "token": "bytes_out_token",
                        "key": "row.host.value"
                    }
                ]
            }
        }
    ],
    "options": {},
    "context": {},
}
\`\`\`

## Source for Setting Token on Default
\`\`\`
"defaults": {
	"tokens": {
		"default": {
			"bytes_in_token": {
				"value": "host18"
			}
		}
	}
}
\`\`\``}},viz_zcUcO0ds:{type:"splunk.singlevalue",showProgressBar:!1,showLastUpdated:!1,dataSources:{primary:"ds_d7dofQOu"},title:"Bytes-In Chart, Defaults to host18 on page load"},viz_Tf8jnWbf:{type:"splunk.markdown",options:{markdown:`## SPL for Bytes-In Chart
\`\`\`
| inputlookup firewall_example.csv
| search host=<$bytes_in_token$>
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_in) over myTime by host
\`\`\`
## SPL for Bytes-Out Chart
\`\`\`
| inputlookup firewall_example.csv
| search host=<$bytes_out$>
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_out) over myTime by host
\`\`\`
Note that you would put your token name where the angle brackets are. 

`}},viz_hfu16cJZ:{type:"splunk.singlevalue",title:"Bytes-Out Chart, no default on page load",dataSources:{primary:"ds_5x5kW4iW"},description:"Requires click event for visualization to render"}},dataSources:{ds_BU6mpc5w:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| stats sum(bytes_in) sum(bytes_out) by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_1"},ds_d7dofQOu:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| search host=$bytes_in$
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_in) over myTime by host`,queryParameters:{earliest:"-24h@h",latest:"now"}},name:"Search_2"},ds_5x5kW4iW:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:`| inputlookup firewall_example.csv
| search host=$bytes_out$
| eval myTime=strftime(timestamp,"%H:%M")
| chart sum(bytes_out) over myTime by host`},name:"Search_3"}},defaults:{tokens:{default:{bytes_in:{value:"host18"}}}},inputs:{},description:"Populate token-dependent on page load by using static default values",title:"Set a Token Default",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_LEuCUe5h",type:"block",position:{x:0,y:0,w:1440,h:447}},{item:"viz_H4zD53XX",type:"block",position:{x:0,y:447,w:306,h:695}},{item:"viz_v5WItj06",type:"block",position:{x:306,y:447,w:285,h:695}},{item:"viz_hfu16cJZ",type:"block",position:{x:591,y:744,w:311,h:398}},{item:"viz_zcUcO0ds",type:"block",position:{x:591,y:447,w:311,h:297}},{item:"viz_Tf8jnWbf",type:"block",position:{x:902,y:447,w:298,h:695}}]}},globalInputs:[]}};var n=t(i()),s=t(a());(0,n.default)(s.default.createElement(e,{definition:o}),{pageTitle:"Set a Token Default",hideFooter:!0,layout:"fixed"});
