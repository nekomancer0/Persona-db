import { c as create_ssr_component, d as each, v as validate_component } from './ssr-4lhOaISg.js';
import './client-CQ5E_ugM.js';
import { R as RecentCharacters } from './RecentCharacters-DVr_TPRy.js';
import { u as user, s as socket } from './stores-DTHoQrrK.js';
import { U as UserProfile } from './UserProfile-9QkXJeyR.js';
import './exports-DuWZopOC.js';
import 'axios';
import './PartialUser-D8t6hnvI.js';
import './index-ClHrc94L.js';
import 'socket.io-client';
import 'dayjs';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap");.center.svelte-150z58n.svelte-150z58n{display:flex;flex-direction:column;justify-content:center;align-items:center}.center.svelte-150z58n img.svelte-150z58n{width:60%}.center.svelte-150z58n h2.svelte-150z58n{font-family:"Protest Revolution";transform:translateX(50%)}.box.svelte-150z58n .inline.svelte-150z58n{display:flex;justify-content:space-around}.box.svelte-150z58n .inline .users.svelte-150z58n{display:flex;flex-direction:column;gap:30px}.box.svelte-150z58n .inline .users .inline-user.svelte-150z58n{align-items:center;display:flex}.box.svelte-150z58n .inline .users .inline-user button.svelte-150z58n{margin-left:10px}.full.svelte-150z58n.svelte-150z58n{height:calc(100vh - 35px)}@media only screen and (max-width: 768px){.center.svelte-150z58n img.svelte-150z58n{width:100%}.center.svelte-150z58n h2.svelte-150z58n{transform:translateX(0);text-align:center}.container h1{text-align:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let users = null;
  user.subscribe(async (user2) => {
    if (new Object(user2).hasOwnProperty("admin") && user2.admin) {
      socket.emit("dashbord");
      socket.emit("get_users", (usersx) => {
        users = usersx.sort((a, b) => a.createdAt - b.createdAt).reverse();
      });
    }
  });
  $$result.css.add(css);
  return `<main><div class="container full svelte-150z58n" data-svelte-h="svelte-fiqluh"><div class="center svelte-150z58n"><img src="/welcome1.png" alt="" class="svelte-150z58n"> <h2 class="svelte-150z58n">to the fictional character database</h2></div></div> <div class="box svelte-150z58n"><div class="inline svelte-150z58n"><div class="users svelte-150z58n">${users ? `${each(users, (user2) => {
    return `<div class="inline-user svelte-150z58n">${validate_component(UserProfile, "UserProfile").$$render($$result, { user: user2 }, {}, {})} <button class="delete svelte-150z58n" data-svelte-h="svelte-t00u4h">Delete</button> </div>`;
  })}` : ``}</div> <div class="changelog-box" data-svelte-h="svelte-1ftz0xp"><textarea name="content" id="content" cols="80" rows="15"></textarea> <button class="send svelte-150z58n">Send</button></div></div></div> ${validate_component(RecentCharacters, "RecentCharacters").$$render($$result, {}, {}, {})} </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cqm7dggQ.js.map
