import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-4lhOaISg.js';
import dayjs from 'dayjs';
import { P as PartialUser } from './PartialUser-C33NVore.js';

const UserProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div>${user ? `${validate_component(PartialUser, "PartialUser").$$render($$result, { user }, {}, {})} <br> <p><b data-svelte-h="svelte-msihox">Created at:</b> ${escape(dayjs(user.createdAt).format("DD/MM/YY"))}</p> <p><b data-svelte-h="svelte-js7r8s">Status:</b> ${escape(user.online ? "Online" : "Offline")}</p>` : ``}</div>`;
});

export { UserProfile as U };
//# sourceMappingURL=UserProfile-xxZHPYId.js.map
