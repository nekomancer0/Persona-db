import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from './ssr-4lhOaISg.js';
import { u as user } from './stores-Bjhq2HjD.js';
import './client-CQ5E_ugM.js';
import 'dompurify';
import 'axios';
import './index-ClHrc94L.js';
import 'socket.io-client';
import './exports-DuWZopOC.js';

const css$2 = {
  code: ".tooltip.svelte-4dwvi9{border:1px solid #ddd;box-shadow:1px 1px 1px #ddd;background:rgb(34, 28, 28);border-radius:4px;color:white;padding:4px;position:absolute}",
  map: null
};
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$2);
  return `<div>${slots.default ? slots.default({}) : ``}</div> ${``}`;
});
const css$1 = {
  code: ".chatbox-and-icon.svelte-1fno66w.svelte-1fno66w{position:absolute;right:10px;bottom:10px}.chatbox-and-icon.svelte-1fno66w .btn.svelte-1fno66w{float:right;border-radius:50%;width:30px;height:30px}.chatbox-and-icon.svelte-1fno66w .chatbox.svelte-1fno66w{background-color:rgb(230, 176, 185);border-radius:15px;height:320px;border:1px solid rgb(43, 41, 41);padding:5px;z-index:5}.chatbox-and-icon.svelte-1fno66w .chatbox .messages.svelte-1fno66w{display:flex;flex-direction:column;height:80%;overflow-y:auto;clip-path:none;scroll-behavior:smooth}.chatbox-and-icon.svelte-1fno66w .chatbox .messaging-div.svelte-1fno66w{display:flex;justify-content:space-around;margin:5px}.chatbox-and-icon.svelte-1fno66w .chatbox .messaging-div input.svelte-1fno66w{width:280px}",
  map: null
};
const Chatbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let chatboxdiv;
  let searchuserInput;
  let messageInput;
  let messagesDiv;
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `<div class="chatbox-and-icon svelte-1fno66w"><div class="chatbox svelte-1fno66w"${add_attribute("style", `display: ${"none"}`, 0)}${add_attribute("this", chatboxdiv, 0)}><div class="user-searching"><input type="text" class="search-user svelte-1fno66w" placeholder="User to DM"${add_attribute("this", searchuserInput, 0)}> ${`${``}`}</div> <div class="messages svelte-1fno66w"${add_attribute("this", messagesDiv, 0)}></div> <div class="messaging-div svelte-1fno66w"><input type="text" class="content svelte-1fno66w" placeholder="enter a message..."${add_attribute("this", messageInput, 0)}> <button class="send" data-svelte-h="svelte-sxy7mc">Send</button></div></div> ${`<button class="btn svelte-1fno66w"><span class="fa fa-envelope"></span>${escape("")}</button>`} </div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");body{background-image:url(https://images.template.net/177100/anime-background-presentation-edit-online.jpg);background-repeat:repeat;background-size:100%}*{font-family:"Montserrat";margin:0;color:rgb(43, 41, 41)}h1, h2, h3, h4, h5, h6, b{margin-bottom:20px}input{border:1px solid gray;border-radius:10px;height:26px;width:400px;text-indent:10px;margin-inline:5px}input[type="file"]{align-items:center;border:0;outline:0;height:35px}input[type="file"]::-webkit-file-upload-button{border:1px solid rgb(43, 41, 41);border-radius:10px;box-shadow:rgb(43, 41, 41) 2px 2px;color:rgb(43, 41, 41);margin-right:10px;height:27px;width:120px}button:hover, a:hover, input[type="file"]::-webkit-file-upload-button:hover{opacity:0.8}button{border:1px solid rgb(43, 41, 41);box-shadow:rgb(43, 41, 41) 2px 2px;border-radius:10px;height:27px;width:100px;color:rgb(43, 41, 41);background-color:rgb(230, 176, 185);margin-inline:5px}button.clicked{box-shadow:inset rgb(43, 41, 41) 3px 3px;transition:box-shadow 0.5s ease-out}.container{margin-top:2%;margin-left:2%}nav.svelte-7ue247.svelte-7ue247{display:flex;align-items:center;justify-content:space-between;gap:30px;background-color:rgb(230, 176, 185);padding:10px;height:35px}nav.svelte-7ue247 h1.svelte-7ue247{margin-bottom:0;color:white}nav.svelte-7ue247 a.svelte-7ue247{text-decoration-line:none;color:white}nav.svelte-7ue247 .searching input.svelte-7ue247{border:0;outline:0}nav.svelte-7ue247 .title.svelte-7ue247{color:white}nav.svelte-7ue247 .title.svelte-7ue247:hover{text-decoration-line:none}nav.svelte-7ue247 .profile-corner.svelte-7ue247{display:flex;gap:20px;align-items:center}nav.svelte-7ue247 .profile-corner img.svelte-7ue247{border-radius:50%;width:50px;height:50px}.box{background-color:rgb(230, 176, 185);border:1px solid rgb(43, 41, 41);box-shadow:rgb(43, 41, 41) 2px 2px}@media only screen and (max-width: 768px){body{margin:0;background-size:auto 768px;background-image:url(https://images.template.net/177100/anime-background-presentation-edit-online.jpg);background-repeat:no-repeat}nav.svelte-7ue247.svelte-7ue247{padding:5px}nav.svelte-7ue247 .searching.svelte-7ue247{display:none}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `<nav class="navbar svelte-7ue247"><a class="title svelte-7ue247" href="/" data-svelte-h="svelte-1lz486n"><h1 class="svelte-7ue247">Persona</h1></a> <div class="links" data-svelte-h="svelte-ix3u3b"><a href="/discover" class="svelte-7ue247">Discover</a></div> <div class="searching svelte-7ue247" data-svelte-h="svelte-vna3yu"><input type="text" class="searchbar svelte-7ue247" placeholder="Search something..."> <button class="searchbtn">Search!</button></div> <div class="profile-corner svelte-7ue247">${!$user ? `<a href="/login" class="svelte-7ue247" data-svelte-h="svelte-1vxwqu1">Login</a>` : `<a href="/disconnect" class="svelte-7ue247" data-svelte-h="svelte-1lsbkpz">Disconnect</a> <a href="/create" class="svelte-7ue247" data-svelte-h="svelte-13h8egb">Create</a> ${validate_component(Tooltip, "Tooltip").$$render($$result, { title: `${$user.username}` }, {}, {
    default: () => {
      return `<a href="/profile" class="svelte-7ue247"><img${add_attribute("src", $user.avatar, 0)} alt="Profile" class="svelte-7ue247"></a>`;
    }
  })}`}</div></nav> ${slots.default ? slots.default({}) : ``} ${$user ? `${validate_component(Chatbox, "Chatbox").$$render($$result, {}, {}, {})}` : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BRHjgO5-.js.map
