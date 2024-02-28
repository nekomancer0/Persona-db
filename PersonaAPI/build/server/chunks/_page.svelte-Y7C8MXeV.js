import { c as create_ssr_component, e as escape, i as is_promise, n as noop, d as each, v as validate_component, b as add_attribute } from './ssr-4lhOaISg.js';
import './stores-DTHoQrrK.js';
import { P as PartialUser } from './PartialUser-C33NVore.js';
import { a as api } from './api-Xv6W7-b_.js';
import './client-CQ5E_ugM.js';
import 'axios';
import './index-ClHrc94L.js';
import 'socket.io-client';
import './exports-DuWZopOC.js';

const css = {
  code: ".inline.svelte-kkud9r{display:flex;justify-content:space-around}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  async function getUsersResult() {
    let users = (await api.getUsers()).filter((u) => u.username.includes(query));
    return users;
  }
  async function getCharactersResult() {
    let characters = await api.getCharacters();
    let results = [];
    for (let character of characters) {
      if (character.name.includes(query))
        results.push(character);
      else {
        let found = false;
        let keywords = query.split(" ");
        for (let keyword of keywords) {
          if (character.tags.includes(keyword)) {
            found = true;
          }
        }
        if (found)
          results.push(character);
      }
    }
    return results;
  }
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1q82o1r_START -->${$$result.title = `<title>Persona - Search</title>`, ""}<meta name="author" content="Persona DB - Search"><meta name="description" content="${"Search results for " + escape(query, true)}"><meta property="og:title" content="Persona DB - Search"><meta property="og:description" content="${"Search results for " + escape(query, true)}"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-1q82o1r_END -->`, ""} <main><div class="container"><h1>Searching <i>${escape(query)}</i></h1> <div class="inline svelte-kkud9r"><div class="users"><h2 data-svelte-h="svelte-owdh1y">Users</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(usersResult) {
      return ` ${usersResult.length ? `${each(usersResult, (user) => {
        return `${validate_component(PartialUser, "PartialUser").$$render($$result, { user }, {}, {})}`;
      })}` : ``} `;
    }(__value);
  }(getUsersResult())}</div> <div class="characters"><h2 data-svelte-h="svelte-19nbxqm">Characters</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(charactersResult) {
      return ` ${charactersResult.length ? `${each(charactersResult, (chara) => {
        return `<li><a${add_attribute("href", `/${chara.code}`, 0)}>${escape(chara.name)}</a></li>`;
      })}` : ``} `;
    }(__value);
  }(getCharactersResult())}</div></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Y7C8MXeV.js.map
