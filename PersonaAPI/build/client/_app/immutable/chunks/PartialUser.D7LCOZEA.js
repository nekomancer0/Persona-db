import{s as D,j as G,d as y,u as M,k as N,l as U}from"./scheduler.BWOwpdHh.js";import{S as V,i as $,x as E,b as C,t as p,g as z,f as P,h as B,d,e as k,s as I,k as F,c as b,a as S,m as j,o as H,w as _,q as m,A as J,r as K}from"./index.MrXRJrN0.js";import"./stores.q1PpW4Db.js";function A(o){let s,a,e,t,r,c=o[0].username+"",u,h,f,v,q;const g=o[3].default,i=G(g,o,o[2],null);return{c(){s=k("div"),a=k("img"),t=I(),r=k("p"),u=F(c),h=I(),i&&i.c(),this.h()},l(l){s=b(l,"DIV",{class:!0});var n=S(s);a=b(n,"IMG",{src:!0,alt:!0,class:!0}),t=j(n),r=b(n,"P",{class:!0});var w=S(r);u=H(w,c),w.forEach(d),h=j(n),i&&i.l(n),n.forEach(d),this.h()},h(){y(a.src,e=o[0].avatar)||_(a,"src",e),_(a,"alt",""),_(a,"class","avatar svelte-1mgpsy4"),_(r,"class","svelte-1mgpsy4"),_(s,"class","inline svelte-1mgpsy4")},m(l,n){C(l,s,n),m(s,a),m(s,t),m(s,r),m(r,u),m(s,h),i&&i.m(s,null),f=!0,v||(q=J(s,"click",o[1]),v=!0)},p(l,n){(!f||n&1&&!y(a.src,e=l[0].avatar))&&_(a,"src",e),(!f||n&1)&&c!==(c=l[0].username+"")&&K(u,c),i&&i.p&&(!f||n&4)&&M(i,g,l,l[2],f?U(g,l[2],n,null):N(l[2]),null)},i(l){f||(p(i,l),f=!0)},o(l){P(i,l),f=!1},d(l){l&&d(s),i&&i.d(l),v=!1,q()}}}function L(o){let s,a,e=o[0]&&A(o);return{c(){e&&e.c(),s=E()},l(t){e&&e.l(t),s=E()},m(t,r){e&&e.m(t,r),C(t,s,r),a=!0},p(t,[r]){t[0]?e?(e.p(t,r),r&1&&p(e,1)):(e=A(t),e.c(),p(e,1),e.m(s.parentNode,s)):e&&(z(),P(e,1,1,()=>{e=null}),B())},i(t){a||(p(e),a=!0)},o(t){P(e),a=!1},d(t){t&&d(s),e&&e.d(t)}}}function O(o,s,a){let{$$slots:e={},$$scope:t}=s,{user:r}=s;function c(){window.location.href=`/profile/@${r.username}`}return o.$$set=u=>{"user"in u&&a(0,r=u.user),"$$scope"in u&&a(2,t=u.$$scope)},[r,c,t,e]}class W extends V{constructor(s){super(),$(this,s,O,L,D,{user:0})}}export{W as P};