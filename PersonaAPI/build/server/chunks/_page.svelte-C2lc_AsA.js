import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, i as is_promise, n as noop, d as each } from './ssr-4lhOaISg.js';
import axios from 'axios';
import { U as UserProfile } from './UserProfile-9QkXJeyR.js';
import { r as root } from './stores-DTHoQrrK.js';
import 'dayjs';
import './PartialUser-D8t6hnvI.js';
import './index-ClHrc94L.js';
import 'socket.io-client';

const css = {
  code: ".my-characters-box.svelte-161lils{margin-block:20px;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let user;
  let notFound = false;
  async function getByUsername() {
    try {
      let result = await axios.get(`${root}/users/${data.id}`);
      user = result.data;
    } catch (e) {
      notFound = false;
    }
  }
  (async () => {
    await getByUsername();
  })();
  async function getMyCharacters() {
    let allCharactersResult = await axios.get(`${root}/characters`);
    let mycharacters = allCharactersResult.data.filter((chara) => chara.ownerId === user._id);
    return mycharacters;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-cr98qq_START -->${$$result.title = `<title>Persona - User ${escape(data.id)}</title>`, ""}<meta name="author" content="${"Persona DB - User " + escape(data.id, true)}"><meta property="og:title" content="${"Persona DB - User " + escape(data.id, true)}">${user ? `<meta name="description" content="${"Informations about " + escape(data.id, true)}"> <meta property="og:description" content="${"Informations about " + escape(data.id, true)}"> <meta property="og:image"${add_attribute("content", user.avatar, 0)}>` : `<meta name="description" content="${"Informations about " + escape(data.id, true)}"> <meta property="og:description" content="${"Couldn't find user " + escape(data.id, true)}"> <meta property="og:image" content="https://persona-db.xyz/favicon.png">`}<!-- HEAD_svelte-cr98qq_END -->`, ""} <main><div class="container"><h1>User : ${escape(data.id)}</h1> <br> ${user && !notFound ? `${validate_component(UserProfile, "UserProfile").$$render($$result, { user }, {}, {})} <div class="my-characters-box svelte-161lils"><h2>${escape(user?.username)}&#39;s Characters</h2> <div class="characters">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(charas) {
      return ` ${each(charas, (chara) => {
        return `<a${add_attribute("href", `/${chara.code}`, 0)}>${escape(chara.name)}</a>`;
      })} `;
    }(__value);
  }(getMyCharacters())}</div></div>` : `<p>Couldn&#39;t find user with name ${escape(data.id)}</p>`}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C2lc_AsA.js.map
