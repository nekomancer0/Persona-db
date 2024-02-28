import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, i as is_promise, n as noop, d as each, e as escape } from './ssr-4lhOaISg.js';
import './client-CQ5E_ugM.js';
import axios from 'axios';
import { U as UserProfile } from './UserProfile-9QkXJeyR.js';
import { u as user, r as root } from './stores-DTHoQrrK.js';
import './exports-DuWZopOC.js';
import 'dayjs';
import './PartialUser-D8t6hnvI.js';
import './index-ClHrc94L.js';
import 'socket.io-client';

const css = {
  code: "form.svelte-7dbtqd.svelte-7dbtqd{-webkit-box-shadow:inset 1px 1px 13px -3px #000000;box-shadow:inset 1px 1px 13px -3px #000000;border-radius:15px;padding:10px;width:50%;margin-inline:auto;text-align:center}form.svelte-7dbtqd button.svelte-7dbtqd{margin-top:10px}.my-characters-box.svelte-7dbtqd.svelte-7dbtqd{margin-block:20px;text-align:center}.alert.svelte-7dbtqd.svelte-7dbtqd{margin-bottom:50px}.controls.svelte-7dbtqd.svelte-7dbtqd{display:flex;flex-direction:column}.inline.svelte-7dbtqd.svelte-7dbtqd{display:flex;justify-content:space-around}.control.svelte-7dbtqd.svelte-7dbtqd{display:inline;margin-inline:auto}.control.svelte-7dbtqd label.svelte-7dbtqd{margin-right:10px;text-align:left}.control.svelte-7dbtqd+.control.svelte-7dbtqd{margin-top:10px}.alert.svelte-7dbtqd.svelte-7dbtqd{padding:5px;width:45%;border-radius:10px;color:white}.success.svelte-7dbtqd.svelte-7dbtqd{background-color:green;border:2px solid rgb(4, 78, 4)}.error.svelte-7dbtqd.svelte-7dbtqd{background-color:red;border:2px solid rgb(88, 4, 4)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let updateForm;
  async function getMyCharacters() {
    let allCharactersResult = await axios.get(`${root}/characters`);
    let mycharacters = allCharactersResult.data.filter((chara) => chara.ownerId === $user._id);
    return mycharacters;
  }
  $$result.css.add(css);
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-103wdwc_START -->${$$result.title = `<title>Persona - My Profile</title>`, ""}<meta name="author" content="Persona DB - My Profile"><meta name="description" content="Find and host any original characters"><meta property="og:title" content="Persona DB"><meta property="og:description" content="Find and host any original characters"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-103wdwc_END -->`, ""} <main><div class="container"><h1 data-svelte-h="svelte-bjixez">My Profile</h1> ${$user ? `${``} ${``} <div class="inline svelte-7dbtqd">${validate_component(UserProfile, "UserProfile").$$render($$result, { user: $user }, {}, {})} <form id="update-form" class="box svelte-7dbtqd"${add_attribute("this", updateForm, 0)} data-svelte-h="svelte-111zpai"><h2>Update</h2> <div class="controls svelte-7dbtqd"><div class="control svelte-7dbtqd"><label for="file" class="svelte-7dbtqd">Avatar :</label> <input type="file" class="input-file" name="file" id="file" accept="image/png, image/jpeg, image/gif"></div> <div class="control svelte-7dbtqd"><label for="file" class="svelte-7dbtqd">Username :</label> <input type="text" name="username" id="username" placeholder="Set a new username" autocomplete="off"></div></div> <button id="submit" class="svelte-7dbtqd">Update</button></form></div> <div class="my-characters-box svelte-7dbtqd"><h2 data-svelte-h="svelte-l0qx6s">My characters</h2> <div class="characters">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(charas) {
      return ` ${each(charas, (chara) => {
        return `<a${add_attribute("href", `/${chara.code}`, 0)}>${escape(chara.name)}</a>`;
      })} `;
    }(__value);
  }(getMyCharacters())}</div></div>` : `<p data-svelte-h="svelte-xpjzu7">You are not connected</p> <ul data-svelte-h="svelte-ejvyc0"><li><a href="/login">Login</a></li></ul>`}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CeAnOzhP.js.map
