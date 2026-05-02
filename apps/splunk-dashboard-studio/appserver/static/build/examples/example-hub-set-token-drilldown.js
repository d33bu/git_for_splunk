import{a as t}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as s}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as a}from"../chunks/chunk-YESDDU4C.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_crcN6mzo:{type:"splunk.column",dataSources:{primary:"ds_search2"},title:"Sourcetype Column Chart",description:"Chart content updates when selecting users"},viz_fKWCh9Ee:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| search host = $user$
| chart count over myTime by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.column",
    "dataSources": {
        "primary": "ds_search2"
    },
    "options": {},
    "context": {}
}
\`\`\``}},viz_XoAtwekf:{type:"splunk.table",dataSources:{primary:"ds_search1"},title:"Host Table",description:"Click a host below to update column chart",eventHandlers:[{type:"drilldown.setToken",options:{events:["any"],key:"value",token:"user"}}]},viz_kK99DS2i:{type:"splunk.markdown",options:{markdown:`### SPL
\`\`\`
| inputlookup firewall_example.csv
| chart count by host
\`\`\`
### Source Definition
\`\`\`
{
    "type": "splunk.table",
    "dataSources": {
        "primary": "ds_search1"
    },
    "title": "User Table",
    "description": "Click a user below to update column chart",
    "options": {},
    "context": {},
    "eventHandlers": [
        {
            "type": "drilldown.setToken",
            "options": {
                "events": [
                    "any"
                ],
                "key": "value",
                "token": "token"
            }
        }
    ]
}
\`\`\``}},viz_YxUwAzLI:{type:"splunk.markdown",options:{markdown:`## Overview

Drilldowns allow for more complex, interactive behaviour turning the dashboard experience from viewing to discovering. 

This page covers an example using the \`setToken\` event handler. Like an input, this type of event handler sets a token value based on an interaction with an existing visualization. The token can then be used elsewhere in the dashboard to control the data for another visualization. 

By clicking on a cell in the table below, the corresponding information on the column chart updates. The click sets a token, which is then used in the search for the column chart. 

There is also support for static tokens, which provides a static string as the value of a token when a certain interaction takes place. Both configurations are available to the `}},viz_xSc6MKql:{type:"splunk.singlevalue",title:"Static Tokens",description:"Clicking on the Visualization Changes Background Color",dataSources:{primary:"ds_click"},eventHandlers:[{type:"drilldown.setToken",options:{tokens:[{token:"staticToken",value:"transparent"}]}}]},viz_3bXQ7bMn:{type:"splunk.markdown",options:{markdown:`### Source Definition for Static Token

\`\`\`
{
    "type": "splunk.singlevalue",
    "dataSources": {
        "primary": "ds_click"
    },
    "eventHandlers": [
        {
            "type": "drilldown.setToken",
            "options": {
                "tokens": [
                    {
                        "token": "staticToken",
                        "value": "transparent"
                    }
                ]
            }
        }
    ]
}

\`\`\``}},viz_zAjOTJcM:{type:"splunk.column",options:{backgroundColor:"$staticToken$"},dataSources:{primary:"ds_x8Fc75MI"},title:"Chart with Static Token set up for backgroundColor"}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| chart count by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"},ds_search2:{type:"ds.search",options:{query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| search host = $user$
| chart count over myTime by host`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_2"},ds_click:{type:"ds.search",options:{query:`| makeresults
| eval value = "Click to change color" `,queryParameters:{earliest:"-15m",latest:"now"}},name:"Search_3"},ds_x8Fc75MI:{type:"ds.search",options:{queryParameters:{earliest:"-24h@h",latest:"now"},query:`| inputlookup firewall_example.csv
| eval myTime=strftime(timestamp,"%H:%M")
| search host = host254
| chart count over myTime by host`},name:"Search_4"}},defaults:{},inputs:{},description:"Set tokens based on interactions with visualizations",title:"Drilldown to Visualization with setToken",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_YxUwAzLI",type:"block",position:{x:0,y:0,w:1440,h:221}},{item:"viz_XoAtwekf",type:"block",position:{x:0,y:221,w:297,h:376}},{item:"viz_xSc6MKql",type:"block",position:{x:0,y:597,w:300,h:382}},{item:"viz_kK99DS2i",type:"block",position:{x:297,y:221,w:303,h:376}},{item:"viz_3bXQ7bMn",type:"block",position:{x:300,y:597,w:300,h:382}},{item:"viz_crcN6mzo",type:"block",position:{x:600,y:221,w:327,h:376}},{item:"viz_zAjOTJcM",type:"block",position:{x:600,y:597,w:600,h:382}},{item:"viz_fKWCh9Ee",type:"block",position:{x:927,y:221,w:273,h:376}}]}},globalInputs:[]}};var o=e(s()),i=e(a());(0,o.default)(i.default.createElement(t,{definition:n}),{pageTitle:"Drilldown with Set Token",hideFooter:!0,layout:"fixed"});
