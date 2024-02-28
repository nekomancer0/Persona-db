import{s as _t,b as de,a as ye,r as mt,n as it,d as ke}from"../chunks/scheduler.BWOwpdHh.js";import{S as pt,i as ht,z as we,s as b,e as d,j as je,v as vt,d as m,m as k,c as f,a as j,n as Q,l as Ee,w as c,b as X,q as i,p as Ce,A as re,t as F,f as W,h as tt,u as Ie,k as ot,o as ct,r as ut,g as st}from"../chunks/index.MrXRJrN0.js";import{g as at}from"../chunks/entry.FLlzqz6F.js";import{a as Oe,r as Fe}from"../chunks/stores.q1PpW4Db.js";import{M as gt,S as bt,T as dt}from"../chunks/MarkdownEditor.Zi-qCKPb.js";function kt({params:a}){return a}const Nt=Object.freeze(Object.defineProperty({__proto__:null,load:kt},Symbol.toStringTag,{value:"Module"}));function nt(a){let e,n,l;return{c(){e=d("div"),n=d("p"),l=ot(a[0]),this.h()},l(r){e=f(r,"DIV",{class:!0});var s=j(e);n=f(s,"P",{});var t=j(n);l=ct(t,a[0]),t.forEach(m),s.forEach(m),this.h()},h(){c(e,"class","success alert svelte-1icyjj8")},m(r,s){X(r,e,s),i(e,n),i(n,l)},p(r,s){s&1&&ut(l,r[0])},d(r){r&&m(e)}}}function lt(a){let e,n,l;return{c(){e=d("div"),n=d("p"),l=ot(a[1]),this.h()},l(r){e=f(r,"DIV",{class:!0});var s=j(e);n=f(s,"P",{});var t=j(n);l=ct(t,a[1]),t.forEach(m),s.forEach(m),this.h()},h(){c(e,"class","error alert svelte-1icyjj8")},m(r,s){X(r,e,s),i(e,n),i(n,l)},p(r,s){s&2&&ut(l,r[1])},d(r){r&&m(e)}}}function yt(a){let e,n="Upload Icon",l,r;return{c(){e=d("button"),e.textContent=n},l(s){e=f(s,"BUTTON",{"data-svelte-h":!0}),Q(e)!=="svelte-qnmkvj"&&(e.textContent=n)},m(s,t){X(s,e,t),l||(r=re(e,"click",a[8]),l=!0)},p:it,d(s){s&&m(e),l=!1,r()}}}function wt(a){let e,n,l,r;return{c(){e=d("img"),this.h()},l(s){e=f(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ke(e.src,n=a[4].icon)||c(e,"src",n),c(e,"alt",""),c(e,"class","svelte-1icyjj8")},m(s,t){X(s,e,t),l||(r=re(e,"click",a[8]),l=!0)},p(s,t){t&16&&!ke(e.src,n=s[4].icon)&&c(e,"src",n)},d(s){s&&m(e),l=!1,r()}}}function jt(a){let e,n="Upload Refsheet",l,r;return{c(){e=d("button"),e.textContent=n},l(s){e=f(s,"BUTTON",{"data-svelte-h":!0}),Q(e)!=="svelte-oeurci"&&(e.textContent=n)},m(s,t){X(s,e,t),l||(r=re(e,"click",a[8]),l=!0)},p:it,d(s){s&&m(e),l=!1,r()}}}function Et(a){let e,n,l,r;return{c(){e=d("img"),this.h()},l(s){e=f(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ke(e.src,n=a[4].refsheet)||c(e,"src",n),c(e,"alt",""),c(e,"class","svelte-1icyjj8")},m(s,t){X(s,e,t),l||(r=re(e,"click",a[8]),l=!0)},p(s,t){t&16&&!ke(e.src,n=s[4].refsheet)&&c(e,"src",n)},d(s){s&&m(e),l=!1,r()}}}function rt(a){let e,n,l;function r(t){a[12](t)}let s={dataToSet:a[4].stats};return a[2]!==void 0&&(s.data=a[2]),e=new bt({props:s}),de.push(()=>we(e,"data",r)),{c(){je(e.$$.fragment)},l(t){Ee(e.$$.fragment,t)},m(t,u){Ce(e,t,u),l=!0},p(t,u){const p={};u&16&&(p.dataToSet=t[4].stats),!n&&u&4&&(n=!0,p.data=t[2],ye(()=>n=!1)),e.$set(p)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function Ct(a){let e,n,l;function r(t){a[14](t)}let s={placeholder:"Add keywords"};return a[3]!==void 0&&(s.keywordsList=a[3]),e=new dt({props:s}),de.push(()=>we(e,"keywordsList",r)),{c(){je(e.$$.fragment)},l(t){Ee(e.$$.fragment,t)},m(t,u){Ce(e,t,u),l=!0},p(t,u){const p={};!n&&u&8&&(n=!0,p.keywordsList=t[3],ye(()=>n=!1)),e.$set(p)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function It(a){let e,n,l;function r(t){a[13](t)}let s={placeholder:"Add keywords",tagsToSet:a[4].tags};return a[3]!==void 0&&(s.keywordsList=a[3]),e=new dt({props:s}),de.push(()=>we(e,"keywordsList",r)),{c(){je(e.$$.fragment)},l(t){Ee(e.$$.fragment,t)},m(t,u){Ce(e,t,u),l=!0},p(t,u){const p={};u&16&&(p.tagsToSet=t[4].tags),!n&&u&8&&(n=!0,p.keywordsList=t[3],ye(()=>n=!1)),e.$set(p)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Ie(e,t)}}}function Tt(a){let e,n,l,r,s,t,u,p,h,fe="Character :",Y,I,Z,ie,q,_e="Edit",oe,S,ce,_,U,N,T,w,g,x,ze="Icon",Te,De,Le,A,$e,Ve,D,ee,Ge="Refsheet",Se,Ue,Ne,M,Be,Pe,te,z,R,se,He="Stats",qe,Ae,O,ae,Je="Tags",Me,L,$,ne,Re,Ke;document.title=e="Editing "+(a[4].name||"a character");let E=a[0]&&nt(a),C=a[1]&&lt(a);function ft(o){a[10](o)}let Qe={};a[4].description!==void 0&&(Qe.markdown=a[4].description),S=new gt({props:Qe}),de.push(()=>we(S,"markdown",ft));function We(o,y){return o[4].icon?wt:yt}let me=We(a),B=me(a);function Xe(o,y){return o[4].refsheet?Et:jt}let pe=Xe(a),P=pe(a),v=a[4]&&a[4].stats&&rt(a);const Ye=[It,Ct],G=[];function Ze(o,y){return o[4]&&o[4].tags?0:1}return L=Ze(a),$=G[L]=Ye[L](a),{c(){n=b(),l=d("main"),r=d("div"),E&&E.c(),s=b(),C&&C.c(),t=b(),u=d("div"),p=d("div"),h=d("h1"),h.textContent=fe,Y=b(),I=d("input"),ie=b(),q=d("button"),q.textContent=_e,oe=b(),je(S.$$.fragment),_=b(),U=d("div"),N=b(),T=d("div"),w=d("form"),g=d("div"),x=d("label"),x.textContent=ze,Te=b(),De=d("br"),Le=b(),A=d("input"),$e=b(),B.c(),Ve=b(),D=d("div"),ee=d("label"),ee.textContent=Ge,Se=b(),Ue=d("br"),Ne=b(),M=d("input"),Be=b(),P.c(),Pe=b(),te=d("div"),z=d("div"),R=d("div"),se=d("h3"),se.textContent=He,qe=b(),v&&v.c(),Ae=b(),O=d("div"),ae=d("h3"),ae.textContent=Je,Me=b(),$.c(),this.h()},l(o){vt("svelte-e87uqu",document.head).forEach(m),n=k(o),l=f(o,"MAIN",{});var ue=j(l);r=f(ue,"DIV",{class:!0});var V=j(r);E&&E.l(V),s=k(V),C&&C.l(V),t=k(V),u=f(V,"DIV",{class:!0});var H=j(u);p=f(H,"DIV",{class:!0});var le=j(p);h=f(le,"H1",{class:!0,"data-svelte-h":!0}),Q(h)!=="svelte-ynt621"&&(h.textContent=fe),Y=k(le),I=f(le,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,autocomplete:!0,class:!0}),ie=k(le),q=f(le,"BUTTON",{"data-svelte-h":!0}),Q(q)!=="svelte-h0ynbm"&&(q.textContent=_e),le.forEach(m),oe=k(H),Ee(S.$$.fragment,H),_=k(H),U=f(H,"DIV",{id:!0}),j(U).forEach(m),N=k(H),T=f(H,"DIV",{class:!0});var xe=j(T);w=f(xe,"FORM",{action:!0,class:!0,method:!0,id:!0});var he=j(w);g=f(he,"DIV",{class:!0});var J=j(g);x=f(J,"LABEL",{for:!0,"data-svelte-h":!0}),Q(x)!=="svelte-16b1hwa"&&(x.textContent=ze),Te=k(J),De=f(J,"BR",{}),Le=k(J),A=f(J,"INPUT",{type:!0,name:!0,id:!0,max:!0,class:!0}),$e=k(J),B.l(J),J.forEach(m),Ve=k(he),D=f(he,"DIV",{class:!0});var K=j(D);ee=f(K,"LABEL",{for:!0,"data-svelte-h":!0}),Q(ee)!=="svelte-1ahd2x6"&&(ee.textContent=Ge),Se=k(K),Ue=f(K,"BR",{}),Ne=k(K),M=f(K,"INPUT",{type:!0,name:!0,id:!0,max:!0,class:!0}),Be=k(K),P.l(K),K.forEach(m),he.forEach(m),xe.forEach(m),H.forEach(m),Pe=k(V),te=f(V,"DIV",{class:!0});var et=j(te);z=f(et,"DIV",{class:!0});var ve=j(z);R=f(ve,"DIV",{class:!0});var ge=j(R);se=f(ge,"H3",{"data-svelte-h":!0}),Q(se)!=="svelte-5zwsxb"&&(se.textContent=He),qe=k(ge),v&&v.l(ge),ge.forEach(m),Ae=k(ve),O=f(ve,"DIV",{class:!0});var be=j(O);ae=f(be,"H3",{"data-svelte-h":!0}),Q(ae)!=="svelte-1nl40cx"&&(ae.textContent=Je),Me=k(be),$.l(be),be.forEach(m),ve.forEach(m),et.forEach(m),V.forEach(m),ue.forEach(m),this.h()},h(){c(h,"class","svelte-1icyjj8"),c(I,"type","text"),c(I,"name","name"),c(I,"id","name"),c(I,"placeholder","Give a name to the character"),c(I,"autocomplete","off"),I.value=Z=a[4].name,c(I,"class","svelte-1icyjj8"),c(p,"class","inline-name svelte-1icyjj8"),c(U,"id","editorjs"),c(x,"for","icon"),c(A,"type","file"),c(A,"name","icon"),c(A,"id","icon"),c(A,"max","1"),A.hidden=!0,c(A,"class","svelte-1icyjj8"),c(g,"class","setting-icon"),c(ee,"for","refsheet"),c(M,"type","file"),c(M,"name","refsheet"),c(M,"id","refsheet"),c(M,"max","1"),M.hidden=!0,c(M,"class","svelte-1icyjj8"),c(D,"class","setting-refsheet"),c(w,"action",""),c(w,"class","images-form svelte-1icyjj8"),c(w,"method","put"),c(w,"id","images-form"),c(T,"class","images-corner svelte-1icyjj8"),c(u,"class","box svelte-1icyjj8"),c(R,"class","stats-box svelte-1icyjj8"),c(O,"class","tag-box svelte-1icyjj8"),c(z,"class","inline svelte-1icyjj8"),c(te,"class","box svelte-1icyjj8"),c(r,"class","container")},m(o,y){X(o,n,y),X(o,l,y),i(l,r),E&&E.m(r,null),i(r,s),C&&C.m(r,null),i(r,t),i(r,u),i(u,p),i(p,h),i(p,Y),i(p,I),i(p,ie),i(p,q),i(u,oe),Ce(S,u,null),i(u,_),i(u,U),i(u,N),i(u,T),i(T,w),i(w,g),i(g,x),i(g,Te),i(g,De),i(g,Le),i(g,A),i(g,$e),B.m(g,null),i(w,Ve),i(w,D),i(D,ee),i(D,Se),i(D,Ue),i(D,Ne),i(D,M),i(D,Be),P.m(D,null),a[11](w),i(r,Pe),i(r,te),i(te,z),i(z,R),i(R,se),i(R,qe),v&&v.m(R,null),i(z,Ae),i(z,O),i(O,ae),i(O,Me),G[L].m(O,null),ne=!0,Re||(Ke=[re(I,"input",a[6]),re(q,"click",a[7])],Re=!0)},p(o,[y]){(!ne||y&16)&&e!==(e="Editing "+(o[4].name||"a character"))&&(document.title=e),o[0]?E?E.p(o,y):(E=nt(o),E.c(),E.m(r,s)):E&&(E.d(1),E=null),o[1]?C?C.p(o,y):(C=lt(o),C.c(),C.m(r,t)):C&&(C.d(1),C=null),(!ne||y&16&&Z!==(Z=o[4].name)&&I.value!==Z)&&(I.value=Z);const ue={};!ce&&y&16&&(ce=!0,ue.markdown=o[4].description,ye(()=>ce=!1)),S.$set(ue),me===(me=We(o))&&B?B.p(o,y):(B.d(1),B=me(o),B&&(B.c(),B.m(g,null))),pe===(pe=Xe(o))&&P?P.p(o,y):(P.d(1),P=pe(o),P&&(P.c(),P.m(D,null))),o[4]&&o[4].stats?v?(v.p(o,y),y&16&&F(v,1)):(v=rt(o),v.c(),F(v,1),v.m(R,null)):v&&(st(),W(v,1,1,()=>{v=null}),tt());let V=L;L=Ze(o),L===V?G[L].p(o,y):(st(),W(G[V],1,1,()=>{G[V]=null}),tt(),$=G[L],$?$.p(o,y):($=G[L]=Ye[L](o),$.c()),F($,1),$.m(O,null))},i(o){ne||(F(S.$$.fragment,o),F(v),F($),ne=!0)},o(o){W(S.$$.fragment,o),W(v),W($),ne=!1},d(o){o&&(m(n),m(l)),E&&E.d(),C&&C.d(),Ie(S),B.d(),P.d(),a[11](null),v&&v.d(),G[L].d(),Re=!1,mt(Ke)}}}function Dt(a,e,n){let{data:l}=e,r="",s="",t,u=[];function p(_){n(1,s=_),setTimeout(()=>{n(1,s="")},3e3)}let h={};(async()=>{try{let _=await Oe.get(`${Fe}/characters/${l.id}`);n(4,h=_.data)}catch{await at("/discover")}})();function fe(_){n(4,h.name=_.target.value,h)}let Y;function I(_){Oe.put(`${Fe}/characters`,{_id:h._id,...h,tags:u,stats:t}).then(async U=>{await at(`/${h.code}`)}).catch(U=>{p(U.response.data.message)})}const Z=async _=>new Promise((U,N)=>{const T=new FileReader;T.readAsDataURL(_),T.onload=()=>U(T.result),T.onerror=w=>N(w)});function ie(_){let N=_.target.parentNode.querySelector("input[type='file']");N.click(),N.addEventListener("change",async()=>{let T=N.files[0];_.target.src=await Z(T);let w=new FormData;w.set("image",T);try{let g=await Oe.post(`${Fe}/upload`,w);g.data.url&&(N.id.includes("icon")?n(4,h.icon=g.data.url,h):N.id.includes("refsheet")&&n(4,h.refsheet=g.data.url,h))}catch(g){console.log(g)}})}function q(_){a.$$.not_equal(h.description,_)&&(h.description=_,n(4,h))}function _e(_){de[_?"unshift":"push"](()=>{Y=_,n(5,Y)})}function oe(_){t=_,n(2,t)}function S(_){u=_,n(3,u)}function ce(_){u=_,n(3,u)}return a.$$set=_=>{"data"in _&&n(9,l=_.data)},[r,s,t,u,h,Y,fe,I,ie,l,q,_e,oe,S,ce]}class Bt extends pt{constructor(e){super(),ht(this,e,Dt,Tt,_t,{data:9})}}export{Bt as component,Nt as universal};