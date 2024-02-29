import{s as X,d as N,n as k}from"../chunks/scheduler.BWOwpdHh.js";import{S as Y,i as Z,e as g,s as M,v as ee,c as b,d as f,m as V,a as I,n as te,w as i,q as h,b as B,t as C,f as T,h as R,x as S,g as W,y as ae,k as j,o as G,r as re,j as ne,l as le,p as oe,u as se}from"../chunks/index.MrXRJrN0.js";import{e as J,h as K,u as ce}from"../chunks/each.MqN4OFCs.js";import{P as ie}from"../chunks/PartialUser.0Mh093ly.js";import{a as U}from"../chunks/api.CI0u685j.js";function L(s,a,l){const t=s.slice();return t[1]=a[l],t}function O(s){let a,l,t=J(s[0]),e=[];for(let n=0;n<t.length;n+=1)e[n]=Q(L(s,t,n));const m=n=>T(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();a=S()},l(n){for(let o=0;o<e.length;o+=1)e[o].l(n);a=S()},m(n,o){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(n,o);B(n,a,o),l=!0},p(n,o){if(o&1){t=J(n[0]);let r;for(r=0;r<t.length;r+=1){const E=L(n,t,r);e[r]?(e[r].p(E,o),C(e[r],1)):(e[r]=Q(E),e[r].c(),C(e[r],1),e[r].m(a.parentNode,a))}for(W(),r=t.length;r<e.length;r+=1)m(r);R()}},i(n){if(!l){for(let o=0;o<t.length;o+=1)C(e[o]);l=!0}},o(n){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)T(e[o]);l=!1},d(n){n&&f(a),ae(e,n)}}}function ue(s){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function he(s){let a,l;return a=new ie({props:{user:s[4]}}),{c(){ne(a.$$.fragment)},l(t){le(a.$$.fragment,t)},m(t,e){oe(a,t,e),l=!0},p(t,e){const m={};e&1&&(m.user=t[4]),a.$set(m)},i(t){l||(C(a.$$.fragment,t),l=!0)},o(t){T(a.$$.fragment,t),l=!1},d(t){se(a,t)}}}function fe(s){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Q(s){let a,l,t,e,m=s[1].name+"",n,o,r,E,P,w,_,D,c,u,p,z,$,d={ctx:s,current:null,token:null,hasCatch:!1,pending:fe,then:he,catch:ue,value:4,blocks:[,,,]};return K(p=U.getUser(s[1].ownerId),d),{c(){a=g("div"),l=g("div"),t=g("div"),e=g("h3"),n=j(m),o=M(),r=g("a"),E=j("Page"),w=M(),_=g("img"),c=M(),u=g("div"),d.block.c(),z=M(),this.h()},l(y){a=b(y,"DIV",{class:!0});var v=I(a);l=b(v,"DIV",{class:!0});var A=I(l);t=b(A,"DIV",{class:!0});var q=I(t);e=b(q,"H3",{class:!0});var x=I(e);n=G(x,m),x.forEach(f),o=V(q),r=b(q,"A",{href:!0,id:!0});var F=I(r);E=G(F,"Page"),F.forEach(f),q.forEach(f),w=V(A),_=b(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(f),c=V(v),u=b(v,"DIV",{class:!0});var H=I(u);d.block.l(H),H.forEach(f),z=V(v),v.forEach(f),this.h()},h(){i(e,"class","name svelte-13kztb5"),i(r,"href",P=`/${s[1].code}`),i(r,"id","go"),i(t,"class","block"),N(_.src,D=s[1].icon)||i(_,"src",D),i(_,"alt",""),i(_,"class","icon svelte-13kztb5"),i(l,"class","inline svelte-13kztb5"),i(u,"class","owner"),i(a,"class","box svelte-13kztb5")},m(y,v){B(y,a,v),h(a,l),h(l,t),h(t,e),h(e,n),h(t,o),h(t,r),h(r,E),h(l,w),h(l,_),h(a,c),h(a,u),d.block.m(u,d.anchor=null),d.mount=()=>u,d.anchor=null,h(a,z),$=!0},p(y,v){s=y,(!$||v&1)&&m!==(m=s[1].name+"")&&re(n,m),(!$||v&1&&P!==(P=`/${s[1].code}`))&&i(r,"href",P),(!$||v&1&&!N(_.src,D=s[1].icon))&&i(_,"src",D),d.ctx=s,v&1&&p!==(p=U.getUser(s[1].ownerId))&&K(p,d)||ce(d,s,v)},i(y){$||(C(d.block),$=!0)},o(y){for(let v=0;v<3;v+=1){const A=d.blocks[v];T(A)}$=!1},d(y){y&&f(a),d.block.d(),d.token=null,d=null}}}function de(s){let a,l,t,e,m,n,o,r,E,P="Discover Characters",w,_,D,c=s[0]&&O(s);return{c(){a=g("meta"),l=g("meta"),t=g("meta"),e=g("meta"),m=g("meta"),n=M(),o=g("main"),r=g("div"),E=g("h1"),E.textContent=P,w=M(),_=g("div"),c&&c.c(),this.h()},l(u){const p=ee("svelte-1ao1zme",document.head);a=b(p,"META",{name:!0,content:!0}),l=b(p,"META",{name:!0,content:!0}),t=b(p,"META",{property:!0,content:!0}),e=b(p,"META",{property:!0,content:!0}),m=b(p,"META",{property:!0,content:!0}),p.forEach(f),n=V(u),o=b(u,"MAIN",{});var z=I(o);r=b(z,"DIV",{class:!0});var $=I(r);E=b($,"H1",{"data-svelte-h":!0}),te(E)!=="svelte-a3tqx1"&&(E.textContent=P),w=V($),_=b($,"DIV",{class:!0});var d=I(_);c&&c.l(d),d.forEach(f),$.forEach(f),z.forEach(f),this.h()},h(){document.title="Persona - Discover",i(a,"name","author"),i(a,"content","Persona DB - Discover Characters"),i(l,"name","description"),i(l,"content","Find and host any original characters"),i(t,"property","og:title"),i(t,"content","Persona DB - Discover Characters"),i(e,"property","og:description"),i(e,"content","Find and host any original characters"),i(m,"property","og:image"),i(m,"content","https://persona-db.xyz/favicon.png"),i(_,"class","boxes svelte-13kztb5"),i(r,"class","container")},m(u,p){h(document.head,a),h(document.head,l),h(document.head,t),h(document.head,e),h(document.head,m),B(u,n,p),B(u,o,p),h(o,r),h(r,E),h(r,w),h(r,_),c&&c.m(_,null),D=!0},p(u,[p]){u[0]?c?(c.p(u,p),p&1&&C(c,1)):(c=O(u),c.c(),C(c,1),c.m(_,null)):c&&(W(),T(c,1,1,()=>{c=null}),R())},i(u){D||(C(c),D=!0)},o(u){T(c),D=!1},d(u){u&&(f(n),f(o)),f(a),f(l),f(t),f(e),f(m),c&&c.d()}}}function me(s,a,l){let t=null;return(async()=>l(0,t=await U.getCharacters()))(),[t]}class ke extends Y{constructor(a){super(),Z(this,a,me,de,X,{})}}export{ke as component};