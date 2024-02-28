import { c as create_ssr_component, b as add_attribute, e as escape } from './ssr-4lhOaISg.js';
import './client-CQ5E_ugM.js';

/* empty css                                          */
const css = {
  code: ".avatar.svelte-1mgpsy4.svelte-1mgpsy4{height:50px;width:50px;border-radius:50%}.inline.svelte-1mgpsy4.svelte-1mgpsy4{display:flex;align-items:center;gap:15px}.inline.svelte-1mgpsy4 .svelte-1mgpsy4:hover{cursor:pointer}",
  map: null
};
const PartialUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `  ${user ? `<div class="inline svelte-1mgpsy4"><img${add_attribute("src", user.avatar, 0)} alt="" class="avatar svelte-1mgpsy4"> <p class="svelte-1mgpsy4">${escape(user.username)}</p> ${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});

export { PartialUser as P };
//# sourceMappingURL=PartialUser-C33NVore.js.map
