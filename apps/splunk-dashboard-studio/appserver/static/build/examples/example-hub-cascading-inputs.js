import{a as t}from"../chunks/chunk-I5BB7BKK.js";import"../chunks/chunk-MRIJBZHF.js";import"../chunks/chunk-J6KLLII2.js";import"../chunks/chunk-3B4IMCP7.js";import"../chunks/chunk-NK3PM7J5.js";import"../chunks/chunk-6C75IYHY.js";import"../chunks/chunk-4EXRCLRA.js";import"../chunks/chunk-DOFRSF7V.js";import"../chunks/chunk-M7GO2BWY.js";import"../chunks/chunk-UJKC6IMZ.js";import"../chunks/chunk-CPVMDTXS.js";import"../chunks/chunk-7BC36DSI.js";import"../chunks/chunk-IP4KOC6H.js";import"../chunks/chunk-XOMARGSF.js";import"../chunks/chunk-JJHHQMG7.js";import"../chunks/chunk-FZU6PMJX.js";import"../chunks/chunk-BN7SIALI.js";import"../chunks/chunk-RXP3HQVR.js";import"../chunks/chunk-UT6FFTSB.js";import"../chunks/chunk-TEQROHHI.js";import"../chunks/chunk-5QFAPDML.js";import"../chunks/chunk-SWI6TFLO.js";import"../chunks/chunk-76W6LHMW.js";import"../chunks/chunk-NGCX5STL.js";import"../chunks/chunk-2BA2WA5Y.js";import{b as s}from"../chunks/chunk-YVIPV4RV.js";import"../chunks/chunk-SRGEWTYX.js";import"../chunks/chunk-L5G6C5DB.js";import"../chunks/chunk-IABWXKO7.js";import"../chunks/chunk-TSPT2GUD.js";import"../chunks/chunk-G73RBPZJ.js";import"../chunks/chunk-VL7OFEA7.js";import"../chunks/chunk-VM6CT5YT.js";import{b as r}from"../chunks/chunk-25J5MIFG.js";import{h as e}from"../chunks/chunk-ME4V5RLK.js";var a={visualizations:{viz_RBdQ2qQ5:{type:"splunk.markdown",options:{markdown:`## Overview
Use the selected value from one input to filter and power a second form input.  This allows for the available options on the second input to be narrowed by the updated search. 

In the following example, the selected user in the 1st dropdown sets a token named \`$token1$\` that populates the available options in the other input. Both tokens from the input are then used in the search for the table visualization.

#### SPL Query for First Input
\`\`\`
| inputlookup outages_example.csv
| search "Geographic Areas"="New York*"
| stats count by "Geographic Areas"
\`\`\`

#### How to Power the Second Input from the Selected Value of the First Input

Here is the search that we want to use to power the second form input

\`\`\`
| inputlookup outages_example.csv
| search "Geographic Areas" IN ("$token1$")
| stats count by "Respondent"
\`\`\`


#### Full Source for the Second Form Input
\`\`\`
{
    "type": "input.multiselect",
    "options": {
        "items": [
            {
                "label": "All",
                "value": "*"
            }
        ],
        "token": "token2",
        "defaultValue": "*"
    },
    "dataSources": {
        "primary": "ds_search2"
    },
    "title": "Select Sourcetype"
}
\`\`\`
`}},viz_J9wtUPaV:{type:"splunk.table",dataSources:{primary:"ds_XIkban1T"},options:{backgroundColor:"> themes.defaultBackgroundColor"},title:"Sourcetype Table",description:'Search Query: | inputlookup outages_example.csv| search "Geographic Areas" IN ("$dd1$") Respondent IN ("$dd2$")'}},dataSources:{ds_search1:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| search "Geographic Areas"="New York*"
| stats count by "Geographic Areas"`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_1"},ds_Pk5HZtCJ:{type:"ds.search",options:{query:`| inputlookup outages_example.csv
| search "Geographic Areas" IN ("$dd1$")
| stats count by "Respondent"`,queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_2"},ds_XIkban1T:{type:"ds.search",options:{query:'| inputlookup outages_example.csv| search "Geographic Areas" IN ("$dd1$") Respondent IN ("$dd2$")',queryParameters:{earliest:"-60m@m",latest:"now"}},name:"Search_4"}},defaults:{dataSources:{"ds.search":{options:{queryParameters:{latest:"$global_time.latest$",earliest:"$global_time.earliest$"}}}}},inputs:{input_ovnr6KpF:{type:"input.dropdown",options:{items:">frame(label, value) | prepend(formattedStatics) | objects()",token:"dd1",defaultValue:"*"},dataSources:{primary:"ds_search1"},title:"Select Geographic Area",context:{formattedConfig:{number:{prefix:""}},formattedStatics:">statics | formatByType(formattedConfig)",statics:[["All"],["*"]],label:'>primary | seriesByName("Geographic Areas") | renameSeries("label") | formatByType(formattedConfig)',value:'>primary | seriesByName("Geographic Areas") | renameSeries("value") | formatByType(formattedConfig)'}},input_9MxBqEwU:{type:"input.multiselect",options:{items:[{label:"All",value:"*"}],token:"dd2",defaultValue:"*"},dataSources:{primary:"ds_Pk5HZtCJ"},title:"Select Respondent"}},description:"Power a form input from other input values to narrow search results",title:"Cascading Inputs",layout:{tabs:{items:[{layoutId:"layout_1",label:"New tab"}]},layoutDefinitions:{layout_1:{type:"grid",structure:[{item:"viz_RBdQ2qQ5",type:"block",position:{x:0,y:0,w:666,h:853}},{item:"viz_J9wtUPaV",type:"block",position:{x:666,y:0,w:534,h:853}}]}},globalInputs:["input_ovnr6KpF","input_9MxBqEwU"]}};var o=e(s()),n=e(r());(0,o.default)(n.default.createElement(t,{definition:a}),{pageTitle:"Cascading Inputs",hideFooter:!0,layout:"fixed"});
