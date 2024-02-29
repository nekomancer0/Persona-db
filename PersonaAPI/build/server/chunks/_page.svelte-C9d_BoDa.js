import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, i as is_promise, n as noop, d as each, e as escape } from './ssr-4lhOaISg.js';
import './client-CQ5E_ugM.js';
import { U as UserProfile } from './UserProfile-xxZHPYId.js';
import { u as user } from './stores-Bjhq2HjD.js';
import { a as api } from './api-BmO5NqYO.js';
import './exports-DuWZopOC.js';
import 'dayjs';
import './PartialUser-C33NVore.js';
import 'axios';
import './index-ClHrc94L.js';
import 'socket.io-client';

const css = {
  code: "form.svelte-156mf8b.svelte-156mf8b{border-radius:15px;padding:10px;width:50%;margin-inline:auto;text-align:center}form.svelte-156mf8b button.svelte-156mf8b{margin-top:10px}.my-characters-box.svelte-156mf8b.svelte-156mf8b{margin-block:20px;text-align:center}.my-characters-box.svelte-156mf8b .characters.svelte-156mf8b{display:flex;gap:10px;justify-content:center}.my-characters-box.svelte-156mf8b .characters .box.svelte-156mf8b{width:300px;height:20%;padding:20px}.my-characters-box.svelte-156mf8b .characters .box .inline.svelte-156mf8b{display:flex;justify-content:space-around;align-items:center}.my-characters-box.svelte-156mf8b .characters .box .inline .icon.svelte-156mf8b{height:150px;height:150px;border-radius:50%}.alert.svelte-156mf8b.svelte-156mf8b{margin-bottom:50px}.controls.svelte-156mf8b.svelte-156mf8b{display:flex;flex-direction:column}.inline.svelte-156mf8b.svelte-156mf8b{display:flex;justify-content:space-around}.control.svelte-156mf8b.svelte-156mf8b{display:inline;margin-inline:auto}.control.svelte-156mf8b label.svelte-156mf8b{margin-right:10px;text-align:left}.control.svelte-156mf8b+.control.svelte-156mf8b{margin-top:10px}.alert.svelte-156mf8b.svelte-156mf8b{padding:5px;width:45%;border-radius:10px;color:white}.success.svelte-156mf8b.svelte-156mf8b{background-color:green;border:2px solid rgb(4, 78, 4)}.error.svelte-156mf8b.svelte-156mf8b{background-color:red;border:2px solid rgb(88, 4, 4)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let updateForm;
  async function getMyCharacters() {
    let characters = await api.getCharacters();
    return characters.filter((chara) => chara.ownerId === $user._id);
  }
  $$result.css.add(css);
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-103wdwc_START -->${$$result.title = `<title>Persona - My Profile</title>`, ""}<meta name="author" content="Persona DB - My Profile"><meta name="description" content="Find and host any original characters"><meta property="og:title" content="Persona DB"><meta property="og:description" content="Find and host any original characters"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-103wdwc_END -->`, ""} <main><div class="container"><h1 data-svelte-h="svelte-bjixez">My Profile</h1> ${$user ? `${``} ${``} <div class="inline svelte-156mf8b">${validate_component(UserProfile, "UserProfile").$$render($$result, { user: $user }, {}, {})} <form id="update-form" class="box svelte-156mf8b"${add_attribute("this", updateForm, 0)} data-svelte-h="svelte-111zpai"><h2>Update</h2> <div class="controls svelte-156mf8b"><div class="control svelte-156mf8b"><label for="file" class="svelte-156mf8b">Avatar :</label> <input type="file" class="input-file" name="file" id="file" accept="image/png, image/jpeg, image/gif"></div> <div class="control svelte-156mf8b"><label for="file" class="svelte-156mf8b">Username :</label> <input type="text" name="username" id="username" placeholder="Set a new username" autocomplete="off"></div></div> <button id="submit" class="svelte-156mf8b">Update</button></form></div> <div class="my-characters-box svelte-156mf8b"><h2 data-svelte-h="svelte-l0qx6s">My characters</h2> <div class="characters svelte-156mf8b">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(charas) {
      return ` ${each(charas, (chara) => {
        return `<div class="box svelte-156mf8b"><div class="inline svelte-156mf8b"><div class="block"><h3 class="name">${escape(chara.name)}</h3> <a${add_attribute("href", `/${chara.code}`, 0)} id="go">Page</a></div> <img${add_attribute("src", chara.icon, 0)} alt="" class="icon svelte-156mf8b"></div> <a${add_attribute("href", `/${chara.code}`, 0)}>${escape(chara.name)}</a> </div>`;
      })} `;
    }(__value);
  }(getMyCharacters())}</div></div>` : `<p data-svelte-h="svelte-xpjzu7">You are not connected</p> <ul data-svelte-h="svelte-ejvyc0"><li><a href="/login">Login</a></li></ul>`}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C9d_BoDa.js.map
