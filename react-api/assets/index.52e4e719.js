import{a as e,r as t,b as a}from"./vendor.e66bd9bd.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),r(o)},onload(){a(self[t].moduleMap[s]),r(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("assets/");const n=e.create({baseURL:"https://newsapi.org/v2",timeout:5e3});function r({isLoading:e,onSubmit:a}){return t.createElement("form",{className:"SearchForm",onSubmit:e=>a(e)},t.createElement("input",{name:"search",type:"text",placeholder:"Search something...",required:!0}),t.createElement("button",{type:"submit",disabled:e},e?"Loading...":"Search"))}function l({isLoading:e,onSubmit:a}){return t.createElement("div",{className:"Header"},t.createElement("a",{href:"/"},t.createElement("h1",null,"React API")),t.createElement(r,{isLoading:e,onSubmit:a}),t.createElement("a",{href:"https://newsapi.org/",target:"_blank",rel:"noreferrer"},t.createElement("b",null,"News API")))}function s({title:e,author:a,description:n,publishedAt:r,url:l,source:s,urlToImage:i}){return t.createElement("a",{className:"NewsCard",href:l,target:"_blank",rel:"noreferrer"},t.createElement("div",{className:"NewsCard__pic",style:{backgroundImage:`url(${i})`}}),t.createElement("div",{className:"NewsCard__content"},t.createElement("h3",null,e),t.createElement("p",{className:"NewsCard__info date"},new Date(Date.parse(r)).toLocaleString("ru-RU",{day:"numeric",month:"long",year:"numeric"})," в ",new Date(Date.parse(r)).toLocaleString("ru-RU",{hour:"numeric",minute:"numeric"})),t.createElement("p",{className:"NewsCard__info author"},a),t.createElement("p",{className:"NewsCard__info source"},null==s?void 0:s.name),t.createElement("p",{className:"NewsCard__description"},n)))}function i({cards:e=[],handleSort:a,handleLangFilter:n,currentPage:r,countOfPages:l,setPage:i}){return t.createElement("div",{className:"Main"},e.length>0?t.createElement("div",{className:"sortBtnWrapper"},t.createElement("label",{htmlFor:"language"},"Filter by language:",t.createElement("select",{id:"language",onChange:e=>{n((null==e?void 0:e.target).value)}},t.createElement("option",null,"ru"),t.createElement("option",null,"en"),t.createElement("option",null,"de"),t.createElement("option",null,"fr"),t.createElement("option",null,"it"))),t.createElement("label",{htmlFor:"sortBy"},"Sort by:",t.createElement("select",{id:"sortBy",onChange:e=>{a((null==e?void 0:e.target).value)}},t.createElement("option",null,"newest"),t.createElement("option",null,"popularity"),t.createElement("option",null,"relevancy")))):null,t.createElement("ul",{className:"cardsField"},e?e.map((e=>{const a=1e4*Math.random(),{author:n,content:r,description:l,publishedAt:i,title:o,url:c,source:u,urlToImage:m}=e;return t.createElement("li",{key:a},t.createElement(s,{author:n,content:r,description:l,publishedAt:i,title:o,url:c,key:a+1e3*Math.random(),urlToImage:m,source:u}))})):null),e.length>0?t.createElement("form",{className:"page-info",onSubmit:e=>i(e)},"Page",t.createElement("input",{type:"text",defaultValue:r,id:"currentPage"}),"of",t.createElement("span",null,l),t.createElement("button",{type:"submit"},"GO")):null)}class o extends t.Component{constructor(e){super(e),this.isLoadingHandle=()=>this.setState((e=>({isLoading:!e.isLoading}))),this.handleApiData=async()=>{this.isLoadingHandle();const{langFilter:e,sortBy:t,searchValue:a,currentPage:r}=this.state;try{const l=await n.get(`everything?q=${a}&apiKey=c01db5a20bb2479eba9962427e07a8c3&language=${e}&sortBy=${t}&page=${r}&pageSize=9`),s=await l.data.articles,i=Math.ceil(await l.data.totalResults/9);this.setState({countOfPages:i,newsCards:s})}catch(l){console.log(l)}finally{this.isLoadingHandle()}},this.formSubmitHandle=async e=>{e.preventDefault();const t=e.target.search.value;this.setState({currentPage:await 1,searchValue:await t}),this.handleApiData()},this.handleLangFilter=async e=>{this.setState({langFilter:await e}),this.handleApiData()},this.handleSort=async e=>{this.setState({sortBy:await e}),this.handleApiData()},this.handleCurrentPage=async e=>{e.preventDefault();let t=+e.target.currentPage.value;const{countOfPages:a}=this.state;a&&t>a&&(t=a),this.setState({currentPage:await t}),this.handleApiData()},this.state={isLoading:!1,newsCards:[],langFilter:"ru",sortBy:"publishedAt",searchValue:"",currentPage:1,countOfPages:0}}render(){const{isLoading:e,newsCards:a,currentPage:n,countOfPages:r}=this.state;return t.createElement("div",{className:"App"},t.createElement(l,{isLoading:e,onSubmit:this.formSubmitHandle}),t.createElement(i,{cards:a,currentPage:n,countOfPages:r,handleSort:this.handleSort,handleLangFilter:this.handleLangFilter,setPage:this.handleCurrentPage}))}}a.render(t.createElement(t.StrictMode,null,t.createElement(o,null)),document.getElementById("root"));
//# sourceMappingURL=index.52e4e719.js.map
