import{r as Y}from"./index-76fb7be0.js";import{I as K,v as G}from"./preview-errors-dde4324f.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";var $={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=Y,Z=Symbol.for("react.element"),H=Symbol.for("react.fragment"),Q=Object.prototype.hasOwnProperty,X=J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,o){var r,i={},p=null,s=null;o!==void 0&&(p=""+o),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Q.call(t,r)&&!ee.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z,type:e,key:p,ref:s,props:i,_owner:X.current}}_.Fragment=H;_.jsx=A;_.jsxs=A;$.exports=_;var R=$.exports;const te=R.Fragment,n=R.jsx,k=R.jsxs,{addons:oe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var re="storybook/actions",ne=`${re}/action-event`,ae={depth:10,clearOnStoryChange:!0,limit:50},B=(e,t)=>{let o=Object.getPrototypeOf(e);return!o||t(o)?o:B(o,t)},ie=e=>!!(typeof e=="object"&&e&&B(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),le=e=>{if(ie(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),r=o==null?void 0:o.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(r.constructor.prototype)}),t}return e},se=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?G():Date.now().toString(36)+Math.random().toString(36).substring(2);function l(e,t={}){let o={...ae,...t},r=function(...i){var y,b;if(t.implicit){let v=(y="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:y.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(v){let c=!((b=window==null?void 0:window.FEATURES)!=null&&b.disallowImplicitActionsInRenderV8),a=new K({phase:v.phase,name:e,deprecated:c});if(c)console.warn(a);else throw a}}let p=oe.getChannel(),s=se(),x=5,h=i.map(le),f=i.length>1?h:h[0],O={id:s,count:0,data:{name:e,args:f},options:{...o,maxDepth:x+(o.depth||3),allowFunction:o.allowFunction||!1}};p.emit(ne,O)};return r.isAction=!0,r}const w=({value:e,onRemove:t})=>n("div",{className:"inline-block mr-1 mb-1 mt-1",children:k("div",{className:"bg-yellow-100 text-yellow-500 p-1.5 rounded-lg flex items-center",children:[n("span",{className:"mr-2 capitalize-first",children:e}),n("button",{onClick:t,className:"text-yellow-500",children:n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]})});try{w.displayName="Badge",w.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const V=({selectedPokemons:e,removePokemon:t})=>n("div",{children:e&&e.map((o,r)=>n(w,{value:o,onRemove:()=>t(r)},o))});try{V.displayName="SelectedOptions",V.__docgenInfo={description:"",displayName:"SelectedOptions",props:{selectedPokemons:{defaultValue:null,description:"",name:"selectedPokemons",required:!0,type:{name:"string[]"}},removePokemon:{defaultValue:null,description:"",name:"removePokemon",required:!0,type:{name:"(index: number) => void"}}}}}catch{}const P=({options:e,value:t,labelSize:o,labelWeight:r,fieldSize:i,placeholder:p,width:s,handleSelectOption:x,setFilter:h,selectedPokemons:f,isSelectVisible:O,setSelectVisible:y,setPopUpVisible:b,removePokemon:v})=>{const c=a=>{f.length<4?x(a):b(!0)};return k(te,{children:[n("label",{className:`block mb-2 ${o} ${r} text-gray-900 dark:text-white`,children:"Choose a Pokemon:"}),k("div",{className:"relative",children:[k("div",{className:`flex items-center mb-1 bg-gray-50 border border-gray-300 text-gray-900 capitalize-first text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-${s} p-${i} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 mr-2 text-gray-400",children:n("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n("input",{value:t,onChange:a=>h(a.target.value),onFocus:()=>y(!0),placeholder:`${p}`,className:"bg-transparent outline-none block w-full"})]}),O&&n("ul",{className:`absolute w-${s} overflow-y-auto scr`,style:{height:205},children:e.map(a=>n("li",{onClick:()=>c(a.name),className:`bg-gray-50 border p-3 rounded-none hover:bg-gray-100  cursor-pointer capitalize-first text-gray-900 ${o} focus:ring-blue-500 focus:border-blue-500 block w-${s} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,children:a.name},a.url))})]}),n(V,{selectedPokemons:f,removePokemon:v})]})},U=P;try{P.displayName="MySelect",P.__docgenInfo={description:"",displayName:"MySelect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"IOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},labelSize:{defaultValue:null,description:"",name:"labelSize",required:!0,type:{name:"string"}},labelWeight:{defaultValue:null,description:"",name:"labelWeight",required:!0,type:{name:"string"}},fieldSize:{defaultValue:null,description:"",name:"fieldSize",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},handleSelectOption:{defaultValue:null,description:"",name:"handleSelectOption",required:!0,type:{name:"(s: string) => void"}},setFilter:{defaultValue:null,description:"",name:"setFilter",required:!0,type:{name:"(s: string) => void"}},selectedPokemons:{defaultValue:null,description:"",name:"selectedPokemons",required:!0,type:{name:"string[]"}},isSelectVisible:{defaultValue:null,description:"",name:"isSelectVisible",required:!0,type:{name:"boolean"}},setSelectVisible:{defaultValue:null,description:"",name:"setSelectVisible",required:!0,type:{name:"(bool: boolean) => void"}},setPopUpVisible:{defaultValue:null,description:"",name:"setPopUpVisible",required:!0,type:{name:"(bool: boolean) => void"}},removePokemon:{defaultValue:null,description:"",name:"removePokemon",required:!0,type:{name:"(index: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((bool: boolean) => void)"}}}}}catch{}const me={title:"MySelect",component:U,tags:["autodocs"],argTypes:{value:{control:{type:"text"}},placeholder:{type:"string",description:"Set a placeholder"},labelSize:{type:"string",description:"Set font size settings",defaultValue:"text-sm",control:{type:"radio"},options:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl"]},labelWeight:{type:"string",description:"Set font weight settings",defaultValue:"font-medium",control:{type:"radio"},options:["font-thin","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold"]},width:{type:"string",description:"Set the width of a component",defaultValue:"full",control:{type:"radio"},options:["full","auto","screen","48","32","16","1/2"]},fieldSize:{type:"string",description:"Set the padding (inner spacing) of a component",defaultValue:"",control:{type:"radio"},options:["1","1.5","2","2.5","3"]},options:{control:{type:"array"}},isSelectVisible:{control:"boolean"},setFilter:{action:"setFilter"},onChange:{action:"onChange"},onFocus:{action:"onFocus"},removePokemon:{control:{disable:!0}},setPopUpVisible:{control:{disable:!0}},selectedPokemons:{control:{disable:!0}}}},S=e=>n(U,{...e}),d=S.bind({});d.args={options:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"}],labelSize:"text-sm",labelWeight:"font-medium",fieldSize:"2.5",placeholder:"Type to find",width:"full",isSelectVisible:!0,setFilter:l("setFilter"),handleSelectOption:l("onChange"),setSelectVisible:l("setSelectVisible(true)")};const u=S.bind({});u.args={options:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"}],labelSize:"text-lg",labelWeight:"font-semibold",fieldSize:"3",placeholder:"Type to find",width:"full",isSelectVisible:!0,setFilter:l("setFilter"),handleSelectOption:l("onChange")};const m=S.bind({});m.args={options:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"}],labelSize:"text-base",labelWeight:"font-normal",fieldSize:"2",placeholder:"Type to find",width:"32",isSelectVisible:!0,setFilter:l("setFilter"),handleSelectOption:l("onChange")};const g=S.bind({});g.args={options:[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"}],labelSize:"text-xs",labelWeight:"font-light",fieldSize:"1.5",placeholder:"Type to find",width:"32",isSelectVisible:!0,setFilter:l("setFilter"),handleSelectOption:l("onChange")};var F,N,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:"args => <MySelect {...args} />",...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,z,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:"args => <MySelect {...args} />",...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var M,C,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"args => <MySelect {...args} />",...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,W,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:"args => <MySelect {...args} />",...(L=(W=g.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const ge=["Default","Large","Medium","Small"];export{d as Default,u as Large,m as Medium,g as Small,ge as __namedExportsOrder,me as default};
