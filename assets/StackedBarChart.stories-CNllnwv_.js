import{R as o}from"./index-DJO9vBfz.js";import{S as r}from"./index-BL9o_FXf.js";import"./jsx-runtime-CkxqCPlQ.js";import"./tiny-invariant-CopsF_GD.js";const p={title:"Grafics/Stacked Bar Dash",component:r,tags:["autodocs"],argTypes:{maxWidth:{control:{type:"number",min:200}},maxHeight:{control:{type:"number",min:200}},colorCollection:{control:{type:"object"}},barSize:{control:{type:"number",min:10,max:500,step:10}},hoverColors:{control:{type:"object"}}},render:e=>{const l=[{label:"January",Vendas:4e3,Despesas:2400,Lucro:1250},{label:"February",Vendas:3e3,Despesas:1398,Lucro:4250},{label:"March",Vendas:2e3,Despesas:9800,Lucro:2250},{label:"April",Vendas:2780,Despesas:3908,Lucro:3250},{label:"May",Vendas:1890,Despesas:4800,Lucro:1250}];return o.createElement("div",{style:{width:"700px",height:"400px"}},o.createElement(r,{dataBody:l,maxWidth:e.maxWidth,maxHeight:e.maxHeight,colorCollection:e.colorCollection,barSize:e.barSize,hoverColors:e.hoverColors}))},args:{maxWidth:700,maxHeight:400,barSize:40,colorCollection:{Vendas:"#2545d6",Despesas:"#c12f2f",Lucro:"#2cb7a9"},hoverColors:{Vendas:"#000",Despesas:"#000",Lucro:"#000"}}},a={args:{}};var t,s,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Default"];export{a as Default,u as __namedExportsOrder,p as default};