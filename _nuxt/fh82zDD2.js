const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CuQWd-f4.js","./D8EJxhxL.js","./entry.DyXhvymZ.css"])))=>i.map(i=>d[i]);
import{_ as w}from"./D8EJxhxL.js";import{c as d,a as p,t as f}from"./DF0yQAck.js";async function g(t,r){return await $fetch(`/api/content/${r}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(r)],t:void 0}})}async function S(t,r="gzip"){var s;const e=Uint8Array.from(atob(t),u=>u.charCodeAt(0)),a=(s=new Response(new Blob([e])).body)==null?void 0:s.pipeThrough(new DecompressionStream(r));return(await new Response(a).text()).split(`
`)}function l(t,r){const e=b(t),n={...r};for(const a in n)e[a]==="json"&&n[a]&&n[a]!=="undefined"&&(n[a]=JSON.parse(n[a])),e[a]==="boolean"&&n[a]!=="undefined"&&(n[a]=!!n[a]);for(const a in n)n[a]==="NULL"&&(n[a]=void 0);return n}function b(t){const r=t.match(/FROM\s+(\w+)/);if(!r)return{};const e=p[h(r[1])];return(e==null?void 0:e.fields)||{}}function h(t){return t.replace(/^_content_/,"")}let o;const m={},i={};function $(t){async function r(e){return o||(i._=i._||_(),o=await i._,i._=void 0),m[String(e)]||(i[String(e)]=i[String(e)]||y(e),await i[String(e)],m[String(e)]="loaded",i[String(e)]=void 0),o}return{all:async(e,n)=>(await r(t),o.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).map(a=>l(e,a))),first:async(e,n)=>(await r(t),l(e,o.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async(e,n)=>{await r(t),await o.exec({sql:e,bind:n})}}}async function _(){if(!o){const t=await w(()=>import("./CuQWd-f4.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.default);globalThis.sqlite3ApiConfig={silent:!0,debug:(...e)=>console.debug(...e),warn:(...e)=>{String(e[0]).includes("OPFS sqlite3_vfs")||console.warn(...e)},error:(...e)=>console.error(...e),log:(...e)=>console.log(...e)};const r=await t();o=new r.oo1.DB}return o}async function y(t){if(window.sessionStorage.getItem("previewToken"))return o;let r=null;const e=`checksum_${t}`,n=`collection_${t}`;let a="matched";try{const c=o.exec({sql:`SELECT * FROM ${f.info} where id = '${e}'`,rowMode:"object",returnValue:"resultRows"}).shift();(c==null?void 0:c.version)!==d[String(t)]&&(a="mismatch")}catch{a="missing"}if(a!=="matched"){if(window.localStorage.getItem(`content_${e}`)===d[String(t)]&&(r=window.localStorage.getItem(`content_${n}`)),!r){r=await g(void 0,String(t));try{window.localStorage.setItem(`content_${e}`,d[String(t)]),window.localStorage.setItem(`content_${n}`,r)}catch(s){console.error("Database integrity check failed, rebuilding database",s)}}const c=await S(r);await o.exec({sql:`DROP TABLE IF EXISTS ${f[String(t)]}`}),a==="mismatch"&&await o.exec({sql:`DELETE FROM ${f.info} WHERE id = '${e}'`});for(const s of c)try{await o.exec(s)}catch(u){console.error("Error executing command",u)}}return o}export{$ as loadDatabaseAdapter};
