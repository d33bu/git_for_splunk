import{a as e}from"../chunks/chunk-MJZB6YZ4.js";import"../chunks/chunk-SH4R7UWG.js";import"../chunks/chunk-KKL7RZI7.js";import"../chunks/chunk-HQG6DYZY.js";import"../chunks/chunk-N26LD34B.js";import"../chunks/chunk-LHCFVQBZ.js";import"../chunks/chunk-UZXRHNY7.js";import"../chunks/chunk-7456XROP.js";import"../chunks/chunk-37NLSUUP.js";import"../chunks/chunk-RONUZ7MB.js";import"../chunks/chunk-CFI2Z47Y.js";import"../chunks/chunk-U3FJYIKH.js";import"../chunks/chunk-KTPU6OVW.js";import"../chunks/chunk-VOUKCIF6.js";import"../chunks/chunk-MPAGGLHN.js";import"../chunks/chunk-ST4PTDTX.js";import"../chunks/chunk-XNSF3IAV.js";import"../chunks/chunk-GLBM25BR.js";import"../chunks/chunk-NGEYEGDK.js";import"../chunks/chunk-UMIX3X4X.js";import"../chunks/chunk-NVRGEB4W.js";import"../chunks/chunk-KYXUQO6T.js";import"../chunks/chunk-2BA2WA5Y.js";import"../chunks/chunk-GPB4XJC6.js";import"../chunks/chunk-YQT7ZZ4C.js";import{b as i}from"../chunks/chunk-PZTYWAR5.js";import"../chunks/chunk-PXOAEDFA.js";import"../chunks/chunk-K2KT63PV.js";import"../chunks/chunk-B4VPXMCY.js";import"../chunks/chunk-LA6DL47F.js";import"../chunks/chunk-VRCBFY2H.js";import"../chunks/chunk-FQX2JRRT.js";import"../chunks/chunk-FN5SWCA2.js";import{b as o}from"../chunks/chunk-YESDDU4C.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_rbsVgtoZ:{type:"splunk.markdown",options:{markdown:`## Overview
Test data can be created with the ds.test datasource type. This allows you to define a JSON object with fields and values. 

Test datasources are NOT configurable through the front end visual editor. However, if a component uses a test datasource, it will show the datasource's name in the configuration panel. 

Test data sources are best for testing a dashboard and exploring dashboard capabilities. If you do not want to run searches while building or experimenting with your build, a test data source can be used to get your dashboard configured before actual searches are used. `}},viz_XTR0gI0t:{type:"splunk.column",dataSources:{primary:"ds_ProductType"},title:"Product Purchases Distribution"},viz_cUYmS9vD:{type:"splunk.markdown",options:{markdown:`### Test Datasource Definition
\`\`\`
"ds_ProductType": {
    "name": "ds_ProductType",
    "type": "ds.test",
    "options": {
        "data": {
            "fields": [
                {
                    "name": "Type"
                },
                {
                    "name": "Purchases"
                }
            ],
            "columns": [
                [
                    "Pets",
                    "Kids",
                    "Womens Shirts",
                    "Hats",
                    "Mens Shirts",
                    "Outerwear",
                    "Activewear"
                ],
                [
                    36821,
                    28683,
                    46253,
                    26723,
                    35745,
                    46253,
                    26723,
                    35745
                ]
            ]
        }
    }
}
}
\`\`\``}}},dataSources:{ds_ProductType:{name:"ds_ProductType",type:"ds.test",options:{data:{fields:[{name:"Type"},{name:"Purchases"}],columns:[["Pets","Kids","Womens Shirts","Hats","Mens Shirts","Outerwear","Activewear"],[36821,28683,46253,26723,35745,46253,26723,35745]]}}}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{},description:"Use a JSON object with static data to create power components without running searches",title:"Test Data Source",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_rbsVgtoZ",type:"block",position:{x:0,y:0,w:1440,h:181}},{item:"viz_XTR0gI0t",type:"block",position:{x:0,y:181,w:615,h:543}},{item:"viz_cUYmS9vD",type:"block",position:{x:615,y:181,w:585,h:543}}]}},globalInputs:[]}};var a=t(i()),s=t(o());(0,a.default)(s.default.createElement(e,{definition:n}),{pageTitle:"Test Data",hideFooter:!0,layout:"fixed"});
