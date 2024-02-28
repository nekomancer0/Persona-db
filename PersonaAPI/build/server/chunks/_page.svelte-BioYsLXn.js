import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component } from './ssr-4lhOaISg.js';
import { L as Linkify, u as user } from './stores-DTHoQrrK.js';
import { Chart, registerables } from 'chart.js';
import { P as PartialUser } from './PartialUser-C33NVore.js';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import './client-CQ5E_ugM.js';
import { a as api } from './api-Xv6W7-b_.js';
import 'axios';
import './index-ClHrc94L.js';
import 'socket.io-client';
import './exports-DuWZopOC.js';

const css = {
  code: ".full.svelte-1icyjj8.svelte-1icyjj8{height:calc(100vh - 35px)}.box.svelte-1icyjj8.svelte-1icyjj8{margin-inline:auto;width:80%;border:1px solid gray;border-radius:10px;padding:5px;margin-bottom:10px}.inline.svelte-1icyjj8.svelte-1icyjj8{display:flex;justify-content:space-around}.refsheet.svelte-1icyjj8.svelte-1icyjj8{height:50%;width:50%}.icon.svelte-1icyjj8.svelte-1icyjj8{width:300px;height:300px}.inline-name.svelte-1icyjj8.svelte-1icyjj8{display:flex;align-items:center;justify-content:center;gap:50px;width:80%;border-bottom:1px solid rgb(43, 41, 41);margin-inline:auto;margin-bottom:10px}.inline-name.svelte-1icyjj8 h1.svelte-1icyjj8{font-size:2rem;margin-bottom:0}.center.svelte-1icyjj8.svelte-1icyjj8{text-align:center}.inline-owner.svelte-1icyjj8.svelte-1icyjj8{display:flex;gap:10px;align-items:center}.description.svelte-1icyjj8.svelte-1icyjj8{padding:10px;margin-left:10%;text-align:justify}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  Chart.register(...registerables);
  let { data } = $$props;
  let chara = null;
  let owner;
  let statsCanva;
  (async () => {
    try {
      chara = await api.getCharacter(data.id);
      owner = await api.getUser(chara.ownerId);
      if (chara?.stats && chara.stats.length === 1 && chara.stats[0].name === "")
        chara.stats = void 0;
    } catch (e) {
      console.log(e);
    }
  })();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-d5uln_START -->${$$result.title = `<title>${escape(chara ? `Character ${chara.name}` : "Unknown Character")}</title>`, ""}<meta name="author" content="${"Persona DB - " + escape(chara ? `Character ${chara.name}` : "Unknown Character", true)}"><meta property="og:title" content="${"Persona DB - " + escape(chara ? `Character ${chara.name}` : "Unknown Character", true)}">${chara ? `<meta name="description" content="${"Informations about " + escape(chara.name, true)}"> <meta property="og:description" content="${"Informations about " + escape(chara.name, true)}"> <meta property="og:image"${add_attribute("content", chara.refsheet, 0)}> <meta property="og:image"${add_attribute("content", chara.icon, 0)}>` : `<meta property="og:description" content="Couldn't find character"> <meta property="og:image" content="https://persona-db.xyz/favicon.png">`}<!-- HEAD_svelte-d5uln_END -->`, ""} <main><div class="container">${``} ${chara ? `<div class="full svelte-1icyjj8"><div class="box svelte-1icyjj8"><div class="inline-name svelte-1icyjj8"><h1 id="chara-name" class="svelte-1icyjj8">${escape(chara.name)}</h1> ${owner && $user && $user.username === owner.username ? `<div class="buttons"><button data-svelte-h="svelte-h0ynbm">Edit</button> <button data-svelte-h="svelte-18732ty">Delete</button></div>` : ``} ${owner ? `<div class="inline-owner svelte-1icyjj8">by
								${validate_component(PartialUser, "PartialUser").$$render($$result, { user: owner }, {}, {})}</div>` : ``}</div> <div class="inline svelte-1icyjj8"><div class="description svelte-1icyjj8">${chara.description ? `<!-- HTML_TAG_START -->${DOMPurify.sanitize(Linkify(marked(chara.description)), {
    FORBID_TAGS: ["script"],
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"]
  })}<!-- HTML_TAG_END -->` : ``}</div> <img${add_attribute("src", chara.icon, 0)} alt="" class="icon svelte-1icyjj8"></div></div> ${chara.stats ? `<div class="inline box svelte-1icyjj8"><canvas id="statscanva" height="400" width="400"${add_attribute("this", statsCanva, 0)}></canvas> <img${add_attribute("src", chara.refsheet, 0)} alt="" class="refsheet svelte-1icyjj8"></div>` : `<div class="center svelte-1icyjj8"><img${add_attribute("src", chara.refsheet, 0)} alt="" class="refsheet svelte-1icyjj8"></div>`}</div>` : ``}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BioYsLXn.js.map
