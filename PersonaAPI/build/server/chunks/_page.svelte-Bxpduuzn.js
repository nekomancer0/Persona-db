import { c as create_ssr_component, e as escape, i as is_promise, n as noop, d as each, v as validate_component, b as add_attribute } from './ssr-4lhOaISg.js';
import axios from 'axios';
import { r as root } from './stores-DTHoQrrK.js';
import { P as PartialUser } from './PartialUser-D8t6hnvI.js';
import './index-ClHrc94L.js';
import 'socket.io-client';

const css = {
  code: ".inline.svelte-kkud9r{display:flex;justify-content:space-around}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  async function getUsersResult() {
    let usersResult = [];
    let res = await axios.get(`${root}/users`);
    for (let d of res.data) {
      if (d.username.includes(query)) {
        usersResult.push(d);
      }
    }
    return usersResult;
  }
  async function getCharactersResult() {
    let charactersResult = [];
    let res2 = await axios.get(`${root}/characters`);
    for (let d of res2.data) {
      if (d.name.includes(query)) {
        charactersResult.push(d);
      } else {
        let found = false;
        let keywords = query.split(" ");
        for (let keyword of keywords) {
          if (d.tags.includes(keyword)) {
            found = true;
          }
        }
        if (found)
          charactersResult.push(d);
      }
    }
    return charactersResult;
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
//# sourceMappingURL=_page.svelte-Bxpduuzn.js.map
