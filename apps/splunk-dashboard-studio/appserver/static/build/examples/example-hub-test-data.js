import{a as e}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as i}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as o}from"../chunks/chunk-25J5MIFG.js";import{h as t}from"../chunks/chunk-ME4V5RLK.js";var n={visualizations:{viz_rbsVgtoZ:{type:"splunk.markdown",options:{markdown:`## Overview
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
