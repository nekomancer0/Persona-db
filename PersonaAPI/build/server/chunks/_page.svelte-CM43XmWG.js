import { c as create_ssr_component } from './ssr-4lhOaISg.js';
import axios from 'axios';
import './stores-DTHoQrrK.js';
import './client-CQ5E_ugM.js';
import './index-ClHrc94L.js';
import 'socket.io-client';
import './exports-DuWZopOC.js';

const css = {
  code: ".forms.svelte-m0q0fj.svelte-m0q0fj{display:flex;justify-content:space-around}h1.svelte-m0q0fj.svelte-m0q0fj{margin-bottom:10px}.alert.svelte-m0q0fj.svelte-m0q0fj{padding:5px;width:45%;border-radius:10px;color:white}.success.svelte-m0q0fj.svelte-m0q0fj{background-color:green;border:2px solid rgb(4, 78, 4)}.error.svelte-m0q0fj.svelte-m0q0fj{background-color:red;border:2px solid rgb(88, 4, 4)}form.svelte-m0q0fj.svelte-m0q0fj{border:1px solid gray;border-radius:15px;padding:10px}form.svelte-m0q0fj .register-btn.svelte-m0q0fj{width:160px}form.svelte-m0q0fj button.svelte-m0q0fj{float:right;margin-bottom:10px}@media only screen and (max-width: 768px){.forms.svelte-m0q0fj.svelte-m0q0fj{flex-direction:column;margin-bottom:5px}.forms.svelte-m0q0fj form.svelte-m0q0fj{width:90%}.forms.svelte-m0q0fj input{width:90%}.forms.svelte-m0q0fj button{margin-left:60%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  axios.defaults.withCredentials = true;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-pgu42o_START -->${$$result.title = `<title>Persona - Login</title>`, ""}<meta name="author" content="Persona DB - Login & Register"><meta name="description" content="Find and host any original characters"><meta property="og:title" content="Persona DB - Login & Register"><meta property="og:description" content="Find and host any original characters"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-pgu42o_END -->`, ""} <main><div class="container">${``} ${``} <div class="forms svelte-m0q0fj" data-svelte-h="svelte-woqk6r"><div class="full"><h1 class="svelte-m0q0fj">Login</h1> <form action="" method="post" id="login-form" class="box svelte-m0q0fj"><div class="control"><label for="username">Username</label> <br><br> <input type="text" name="username" id="username" placeholder="Username" autocomplete="off"></div> <br> <div class="control"><label for="password">Password</label><br><br> <input type="password" name="password" id="password" placeholder="Password"></div> <br> <button type="submit" class="svelte-m0q0fj">Log In</button></form></div> <div class="full"><h1 class="svelte-m0q0fj">Register</h1> <form action="" method="post" id="register-form" class="box svelte-m0q0fj"><div class="control"><label for="username">Username</label> <br><br> <input type="text" name="username" id="username" placeholder="Username" autocomplete="off"></div> <br> <div class="control"><label for="email">Email</label> <br><br> <input type="text" name="email" id="email" placeholder="Email" autocomplete="off"></div> <br> <div class="control"><label for="password">Password</label><br><br> <input type="password" name="password" id="password" placeholder="Password"></div> <br> <div class="control"><label for="repeat-password">Repeat Password</label><br><br> <input type="password" name="repeat-password" id="repeat-password" placeholder="Repeat Password"></div> <br> <button type="submit" class="register-btn svelte-m0q0fj">Create an account</button></form></div></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CM43XmWG.js.map
