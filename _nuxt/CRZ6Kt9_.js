import{d as i,A as o,v as c,ah as h,p as u,l as p,i as d,G as l,E as a,ai as m,aj as f}from"./D8EJxhxL.js";const g=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(n){const t=n,r=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(u().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return p(e,t.src)}return t.src});return(s,e)=>(d(),l(m(a(f)),{src:a(r),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(g,{__name:"ProseImg"});export{S as default};
