import { c as create_ssr_component, d as each, e as escape, b as add_attribute, i as is_promise, n as noop, v as validate_component } from './ssr-4lhOaISg.js';
import { P as PartialUser } from './PartialUser-C33NVore.js';
import { a as api } from './api-Xv6W7-b_.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';
import 'axios';
import './stores-DTHoQrrK.js';
import './index-ClHrc94L.js';
import 'socket.io-client';

const css = {
  code: ".boxes.svelte-13kztb5.svelte-13kztb5{margin-top:20px;display:flex;gap:10px}.boxes.svelte-13kztb5 .box.svelte-13kztb5{padding:20px;position:relative;width:300px;height:20%;border:1px solid gray;border-radius:15px}.boxes.svelte-13kztb5 .box .inline.svelte-13kztb5{display:flex;justify-content:space-around;align-items:center}.boxes.svelte-13kztb5 .box .inline .icon.svelte-13kztb5{height:150px;height:150px;border-radius:50%}.boxes.svelte-13kztb5 .box .name.svelte-13kztb5{color:white;display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let characters = null;
  (async () => {
    characters = await api.getCharacters();
  })();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ao1zme_START -->${$$result.title = `<title>Persona - Discover</title>`, ""}<meta name="author" content="Persona DB - Discover Characters"><meta name="description" content="Find and host any original characters"><meta property="og:title" content="Persona DB - Discover Characters"><meta property="og:description" content="Find and host any original characters"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-1ao1zme_END -->`, ""} <main><div class="container"><h1 data-svelte-h="svelte-a3tqx1">Discover Characters</h1> <div class="boxes svelte-13kztb5">${characters ? `${each(characters, (character) => {
    return `<div class="box svelte-13kztb5"><div class="inline svelte-13kztb5"><div class="block"><h3 class="name svelte-13kztb5">${escape(character.name)}</h3> <a${add_attribute("href", `/${character.code}`, 0)} id="go">Page</a></div> <img${add_attribute("src", character.icon, 0)} alt="" class="icon svelte-13kztb5"></div> <div class="owner">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(user) {
        return ` ${validate_component(PartialUser, "PartialUser").$$render($$result, { user }, {}, {})} `;
      }(__value);
    }(api.getUser(character.ownerId))}</div> </div>`;
  })}` : ``}</div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CwdtdHMS.js.map
