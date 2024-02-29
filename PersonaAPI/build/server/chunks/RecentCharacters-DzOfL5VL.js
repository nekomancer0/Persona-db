import { c as create_ssr_component, i as is_promise, n as noop, d as each, v as validate_component, b as add_attribute, e as escape } from './ssr-4lhOaISg.js';
import { P as PartialUser } from './PartialUser-C33NVore.js';
import { a as api } from './api-BmO5NqYO.js';

const css$1 = {
  code: ".character.svelte-nnkgeq.svelte-nnkgeq{display:flex;flex-direction:column;text-align:center;gap:10px}.character.svelte-nnkgeq .author.svelte-nnkgeq{margin-inline:auto}.character.svelte-nnkgeq .author.svelte-nnkgeq p{color:whits}.character.svelte-nnkgeq a.svelte-nnkgeq{color:white}",
  map: null
};
const PartialCharacter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { character } = $$props;
  let { owner } = $$props;
  if ($$props.character === void 0 && $$bindings.character && character !== void 0)
    $$bindings.character(character);
  if ($$props.owner === void 0 && $$bindings.owner && owner !== void 0)
    $$bindings.owner(owner);
  $$result.css.add(css$1);
  return `<div class="character svelte-nnkgeq"><div class="author svelte-nnkgeq">${validate_component(PartialUser, "PartialUser").$$render($$result, { user: owner }, {}, {})}</div> <div class="name"><a${add_attribute("href", `/${character.code}`, 0)} class="svelte-nnkgeq">${escape(character.name)}</a></div> </div>`;
});
const css = {
  code: ".box.svelte-uc0bar.svelte-uc0bar{background-color:rgb(43, 41, 41);padding:10px}.box.svelte-uc0bar h3.svelte-uc0bar{color:rgb(230, 176, 185);text-align:center}.recent-characters.svelte-uc0bar.svelte-uc0bar{display:flex;justify-content:space-around}",
  map: null
};
const RecentCharacters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function getRecentCharacters() {
    let characters = await Promise.all((await api.getCharacters()).map(async (c) => ({ ...c, user: await api.getUser(c.ownerId) })));
    return characters.sort((a, b) => a.editedAt - b.editedAt).reverse().slice(0, 5);
  }
  $$result.css.add(css);
  return `<div class="box svelte-uc0bar"><h3 class="svelte-uc0bar" data-svelte-h="svelte-p7nwy5">Activity</h3> <div class="recent-characters svelte-uc0bar">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(charas) {
      return ` ${each(charas, (character) => {
        return `${validate_component(PartialCharacter, "PartialCharacter").$$render($$result, { character, owner: character.user }, {}, {})}`;
      })} `;
    }(__value);
  }(getRecentCharacters())}</div> </div>`;
});

export { RecentCharacters as R };
//# sourceMappingURL=RecentCharacters-DzOfL5VL.js.map
