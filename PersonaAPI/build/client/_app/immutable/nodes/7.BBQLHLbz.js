import{s as U,n as M,o as V}from"../chunks/scheduler.BWOwpdHh.js";import{S as $,i as x,e as b,s as S,v as B,c as g,d,m as j,a as E,n as H,w as p,q as u,b as P,k as R,o as C,r as F}from"../chunks/index.MrXRJrN0.js";import{g as z}from"../chunks/globals.D0QH3NT1.js";import{a as N}from"../chunks/stores.B2cYib0m.js";import{a as D}from"../chunks/api.DB7-yUPC.js";import{g as T}from"../chunks/entry.Cbhw0m9C.js";const{document:_}=z;function k(f){let t,r,o;return{c(){t=b("div"),r=b("p"),o=R(f[0]),this.h()},l(e){t=g(e,"DIV",{class:!0});var a=E(t);r=g(a,"P",{});var l=E(r);o=C(l,f[0]),l.forEach(d),a.forEach(d),this.h()},h(){p(t,"class","success alert svelte-m0q0fj")},m(e,a){P(e,t,a),u(t,r),u(r,o)},p(e,a){a&1&&F(o,e[0])},d(e){e&&d(t)}}}function A(f){let t,r,o;return{c(){t=b("div"),r=b("p"),o=R(f[1]),this.h()},l(e){t=g(e,"DIV",{class:!0});var a=E(t);r=g(a,"P",{});var l=E(r);o=C(l,f[1]),l.forEach(d),a.forEach(d),this.h()},h(){p(t,"class","error alert svelte-m0q0fj")},m(e,a){P(e,t,a),u(t,r),u(r,o)},p(e,a){a&2&&F(o,e[1])},d(e){e&&d(t)}}}function G(f){let t,r,o,e,a,l,v,n,w,y,c,I='<div class="full"><h1 class="svelte-m0q0fj">Login</h1> <form action="" method="post" id="login-form" class="box svelte-m0q0fj"><div class="control"><label for="username">Username</label> <br/><br/> <input type="text" name="username" id="username" placeholder="Username" autocomplete="off"/></div> <br/> <div class="control"><label for="password">Password</label><br/><br/> <input type="password" name="password" id="password" placeholder="Password"/></div> <br/> <button type="submit" class="svelte-m0q0fj">Log In</button></form></div> <div class="full"><h1 class="svelte-m0q0fj">Register</h1> <form action="" method="post" id="register-form" class="box svelte-m0q0fj"><div class="control"><label for="username">Username</label> <br/><br/> <input type="text" name="username" id="username" placeholder="Username" autocomplete="off"/></div> <br/> <div class="control"><label for="email">Email</label> <br/><br/> <input type="text" name="email" id="email" placeholder="Email" autocomplete="off"/></div> <br/> <div class="control"><label for="password">Password</label><br/><br/> <input type="password" name="password" id="password" placeholder="Password"/></div> <br/> <div class="control"><label for="repeat-password">Repeat Password</label><br/><br/> <input type="password" name="repeat-password" id="repeat-password" placeholder="Repeat Password"/></div> <br/> <button type="submit" class="register-btn svelte-m0q0fj">Create an account</button></form></div>',s=f[0]&&k(f),i=f[1]&&A(f);return{c(){t=b("meta"),r=b("meta"),o=b("meta"),e=b("meta"),a=b("meta"),l=S(),v=b("main"),n=b("div"),s&&s.c(),w=S(),i&&i.c(),y=S(),c=b("div"),c.innerHTML=I,this.h()},l(m){const h=B("svelte-pgu42o",_.head);t=g(h,"META",{name:!0,content:!0}),r=g(h,"META",{name:!0,content:!0}),o=g(h,"META",{property:!0,content:!0}),e=g(h,"META",{property:!0,content:!0}),a=g(h,"META",{property:!0,content:!0}),h.forEach(d),l=j(m),v=g(m,"MAIN",{});var L=E(v);n=g(L,"DIV",{class:!0});var q=E(n);s&&s.l(q),w=j(q),i&&i.l(q),y=j(q),c=g(q,"DIV",{class:!0,"data-svelte-h":!0}),H(c)!=="svelte-woqk6r"&&(c.innerHTML=I),q.forEach(d),L.forEach(d),this.h()},h(){_.title="Persona - Login",p(t,"name","author"),p(t,"content","Persona DB - Login & Register"),p(r,"name","description"),p(r,"content","Find and host any original characters"),p(o,"property","og:title"),p(o,"content","Persona DB - Login & Register"),p(e,"property","og:description"),p(e,"content","Find and host any original characters"),p(a,"property","og:image"),p(a,"content","https://persona-db.xyz/favicon.png"),p(c,"class","forms svelte-m0q0fj"),p(n,"class","container")},m(m,h){u(_.head,t),u(_.head,r),u(_.head,o),u(_.head,e),u(_.head,a),P(m,l,h),P(m,v,h),u(v,n),s&&s.m(n,null),u(n,w),i&&i.m(n,null),u(n,y),u(n,c)},p(m,[h]){m[0]?s?s.p(m,h):(s=k(m),s.c(),s.m(n,w)):s&&(s.d(1),s=null),m[1]?i?i.p(m,h):(i=A(m),i.c(),i.m(n,y)):i&&(i.d(1),i=null)},i:M,o:M,d(m){m&&(d(l),d(v)),d(t),d(r),d(o),d(e),d(a),s&&s.d(),i&&i.d()}}}function J(f,t,r){N.defaults.withCredentials=!0;let o="",e="";function a(l){r(1,e=l),setTimeout(()=>{r(1,e="")},3e3)}return V(()=>{let l=document.querySelector("#login-form");l.addEventListener("submit",async n=>{n.preventDefault();let w=l.querySelector("#username"),y=l.querySelector("#password");try{let c=await D.login({username:w.value,password:y.value});typeof c=="string"?await T(`/profile/@${w.value}`):a(c.message)}catch(c){console.log(c)}});let v=document.querySelector("#register-form");v.addEventListener("submit",async n=>{n.preventDefault();let w=v.querySelector("#username"),y=v.querySelector("#password"),c=v.querySelector("#email");if(v.querySelector("#repeat-password").value!==y.value)return a("Passwords don't match");try{let s=await D.register({username:w.value,email:c.value,password:y.value});typeof s=="string"?await T(`/profile/@${w.value}`):a(s.message)}catch(s){console.log(s)}})}),[o,e]}class Z extends ${constructor(t){super(),x(this,t,J,G,U,{})}}export{Z as component};
