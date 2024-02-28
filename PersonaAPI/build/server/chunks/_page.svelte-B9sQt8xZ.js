import { c as create_ssr_component, v as validate_component, i as is_promise, n as noop, d as each, e as escape } from './ssr-4lhOaISg.js';
import axios from 'axios';
import { R as RecentCharacters } from './RecentCharacters-DVr_TPRy.js';
import { r as root } from './stores-DTHoQrrK.js';
import dayjs from 'dayjs';
import { P as PartialUser } from './PartialUser-D8t6hnvI.js';
import './index-ClHrc94L.js';
import 'socket.io-client';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap");.changelogs.svelte-7qf24f.svelte-7qf24f{margin-inline:10%;display:flex;justify-content:center;flex-direction:column;gap:50px}.changelogs.svelte-7qf24f h2.svelte-7qf24f{text-align:center}.changelogs.svelte-7qf24f .log.svelte-7qf24f{padding:20px;margin-bottom:10px;border:1px solid gray;border-radius:15px;background-color:rgb(178, 224, 235);padding:10px}.changelogs.svelte-7qf24f .log .inline.svelte-7qf24f{display:flex;flex-direction:row;justify-content:space-around}.changelogs.svelte-7qf24f .log p.svelte-7qf24f{text-indent:5%}.center.svelte-7qf24f.svelte-7qf24f{display:flex;flex-direction:column;justify-content:center;align-items:center}.center.svelte-7qf24f img.svelte-7qf24f{width:60%}.center.svelte-7qf24f h2.svelte-7qf24f{font-family:"Protest Revolution";transform:translateX(50%)}.full.svelte-7qf24f.svelte-7qf24f{height:calc(100vh - 35px)}@media only screen and (max-width: 768px){.center.svelte-7qf24f img.svelte-7qf24f{width:100%}.center.svelte-7qf24f h2.svelte-7qf24f{transform:translateX(0);text-align:center}.container h1{text-align:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function getChangelogs() {
    try {
      let result = await axios.get(`${root}/changelogs`);
      return result.data.reverse();
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  async function getUser(userId) {
    let result = await axios.get(`${root}/users/${userId}`);
    return result.data;
  }
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5jsod_START -->${$$result.title = `<title>Persona, fictional character database</title>`, ""}<meta name="author" content="Persona DB"><meta name="description" content="Find and host any original characters"><meta property="og:title" content="Persona DB"><meta property="og:description" content="Find and host any original characters"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-5jsod_END -->`, ""} <main><div class="container full svelte-7qf24f" data-svelte-h="svelte-fiqluh"><div class="center svelte-7qf24f"><img src="/welcome1.png" alt="" class="svelte-7qf24f"> <h2 class="svelte-7qf24f">to the fictional character database</h2></div></div> ${validate_component(RecentCharacters, "RecentCharacters").$$render($$result, {}, {}, {})} <div class="changelogs svelte-7qf24f"><h2 class="svelte-7qf24f" data-svelte-h="svelte-1il5hxl">Changelogs</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(changelogs) {
      return ` ${each(changelogs, (changelog) => {
        return `<div class="log svelte-7qf24f"><div class="inline svelte-7qf24f"><h3>${escape(dayjs(changelog.createdAt).format("DD/MM/YYYY"))}</h3> ${function(__value2) {
          if (is_promise(__value2)) {
            __value2.then(null, noop);
            return ``;
          }
          return function(user) {
            return ` ${validate_component(PartialUser, "PartialUser").$$render($$result, { user }, {}, {})} `;
          }(__value2);
        }(getUser(changelog.userId))}</div> <p class="svelte-7qf24f">${escape(changelog.content)}</p> </div>`;
      })} `;
    }(__value);
  }(getChangelogs())}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B9sQt8xZ.js.map
