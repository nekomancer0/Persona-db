import { c as create_ssr_component, e as escape, v as validate_component, i as is_promise, n as noop, d as each } from './ssr-4lhOaISg.js';
import axios from 'axios';
import { R as RecentCharacters } from './RecentCharacters-DzOfL5VL.js';
import { s as socket, r as root } from './stores-Bjhq2HjD.js';
import dayjs from 'dayjs';
import { P as PartialUser } from './PartialUser-C33NVore.js';
import './api-BmO5NqYO.js';
import './index-ClHrc94L.js';
import 'socket.io-client';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap");#guest_count.svelte-s3gv7x.svelte-s3gv7x{float:right}.changelogs.svelte-s3gv7x.svelte-s3gv7x{margin-inline:10%;display:flex;justify-content:center;flex-direction:column;gap:50px}.changelogs.svelte-s3gv7x h2.svelte-s3gv7x{text-align:center}.changelogs.svelte-s3gv7x .log.svelte-s3gv7x{padding:20px;margin-bottom:10px;border:1px solid gray;border-radius:15px;background-color:rgb(178, 224, 235);padding:10px}.changelogs.svelte-s3gv7x .log .inline.svelte-s3gv7x{display:flex;flex-direction:row;justify-content:space-around}.changelogs.svelte-s3gv7x .log p.svelte-s3gv7x{text-indent:5%}.center.svelte-s3gv7x.svelte-s3gv7x{display:flex;flex-direction:column;justify-content:center;align-items:center}.center.svelte-s3gv7x img.svelte-s3gv7x{width:60%}.center.svelte-s3gv7x h2.svelte-s3gv7x{font-family:"Protest Revolution";transform:translateX(50%)}.full.svelte-s3gv7x.svelte-s3gv7x{height:calc(100vh - 35px)}@media only screen and (max-width: 768px){.center.svelte-s3gv7x img.svelte-s3gv7x{width:100%}.center.svelte-s3gv7x h2.svelte-s3gv7x{transform:translateX(0);text-align:center}.container h1{text-align:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let guest_count = 0;
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
  socket.on("guest_count", (count) => {
    guest_count = count;
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5jsod_START -->${$$result.title = `<title>Persona, fictional character database</title>`, ""}<meta name="author" content="Persona DB"><meta name="description" content="Find and host any original characters"><meta property="og:title" content="Persona DB"><meta property="og:description" content="Find and host any original characters"><meta property="og:image" content="https://persona-db.xyz/favicon.png"><!-- HEAD_svelte-5jsod_END -->`, ""} <main><p id="guest_count" class="svelte-s3gv7x">There are ${escape(guest_count)} guests.</p> <div class="container full svelte-s3gv7x" data-svelte-h="svelte-fiqluh"><div class="center svelte-s3gv7x"><img src="/welcome1.png" alt="" class="svelte-s3gv7x"> <h2 class="svelte-s3gv7x">to the fictional character database</h2></div></div> ${validate_component(RecentCharacters, "RecentCharacters").$$render($$result, {}, {}, {})} <div class="changelogs svelte-s3gv7x"><h2 class="svelte-s3gv7x" data-svelte-h="svelte-1il5hxl">Changelogs</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(changelogs) {
      return ` ${each(changelogs, (changelog) => {
        return `<div class="log svelte-s3gv7x"><div class="inline svelte-s3gv7x"><h3>${escape(dayjs(changelog.createdAt).format("DD/MM/YYYY"))}</h3> ${function(__value2) {
          if (is_promise(__value2)) {
            __value2.then(null, noop);
            return ``;
          }
          return function(user) {
            return ` ${validate_component(PartialUser, "PartialUser").$$render($$result, { user }, {}, {})} `;
          }(__value2);
        }(getUser(changelog.userId))}</div> <p class="svelte-s3gv7x">${escape(changelog.content)}</p> </div>`;
      })} `;
    }(__value);
  }(getChangelogs())}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DTHEh8Ec.js.map
