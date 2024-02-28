import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from './ssr-4lhOaISg.js';
import { u as user, s as socket } from './stores-DTHoQrrK.js';
import 'dompurify';
import 'axios';
import './index-ClHrc94L.js';
import 'socket.io-client';

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
  code: ".chatbox-and-icon.svelte-1g0mprc.svelte-1g0mprc{position:absolute;right:10px;bottom:10px}.chatbox-and-icon.svelte-1g0mprc .btn.svelte-1g0mprc{float:right;border-radius:50%;width:30px;height:30px}.chatbox-and-icon.svelte-1g0mprc .chatbox.svelte-1g0mprc{background-color:rgb(230, 176, 185);border-radius:15px;height:320px;border:1px solid rgb(43, 41, 41);padding:5px;z-index:5}.chatbox-and-icon.svelte-1g0mprc .chatbox .messages.svelte-1g0mprc{display:flex;flex-direction:column;height:80%;overflow-y:auto;clip-path:none;scroll-behavior:smooth}.chatbox-and-icon.svelte-1g0mprc .chatbox .messaging-div.svelte-1g0mprc{display:flex;position:absolute;bottom:30px;right:20px;margin-bottom:10px}.chatbox-and-icon.svelte-1g0mprc .chatbox .messaging-div input.svelte-1g0mprc{width:280px}",
  map: null
};
const Chatbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let { socket: socket2 } = $$props;
  let chatboxdiv;
  let searchuserInput;
  let messageInput;
  let messagesDiv;
  if ($$props.socket === void 0 && $$bindings.socket && socket2 !== void 0)
    $$bindings.socket(socket2);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `<div class="chatbox-and-icon svelte-1g0mprc"><div class="chatbox svelte-1g0mprc"${add_attribute("style", `display: ${"none"}`, 0)}${add_attribute("this", chatboxdiv, 0)}><div class="user-searching"><input type="text" class="search-user svelte-1g0mprc" placeholder="User to DM"${add_attribute("this", searchuserInput, 0)}> ${`${``}`}</div> <div class="messages svelte-1g0mprc"${add_attribute("this", messagesDiv, 0)}></div> <div class="messaging-div svelte-1g0mprc"><input type="text" class="content svelte-1g0mprc" placeholder="enter a message..."${add_attribute("this", messageInput, 0)}> <button class="send" data-svelte-h="svelte-sxy7mc">Send</button></div></div> ${`<button class="btn svelte-1g0mprc"><span class="fa fa-envelope"></span>${escape("")}</button>`} </div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");body{background-image:url(https://images.template.net/177100/anime-background-presentation-edit-online.jpg);background-repeat:repeat;background-size:100%}*{font-family:"Montserrat";margin:0;color:rgb(43, 41, 41)}h1, h2, h3, h4, h5, h6, b{margin-bottom:20px}input{border:1px solid gray;border-radius:10px;height:25px;width:400px;text-indent:10px;margin-inline:5px}input[type="file"]{align-items:center;border:0;outline:0;height:35px}input[type="file"]::-webkit-file-upload-button{border:1px solid rgb(43, 41, 41);border-radius:10px;box-shadow:rgb(43, 41, 41) 2px 2px;color:rgb(43, 41, 41);margin-right:10px;height:27px;width:120px}button:hover, a:hover, input[type="file"]::-webkit-file-upload-button:hover{opacity:0.8}button{border:1px solid rgb(43, 41, 41);box-shadow:rgb(43, 41, 41) 2px 2px;border-radius:10px;height:27px;width:100px;color:rgb(43, 41, 41);background-color:rgb(230, 176, 185);margin-inline:5px}button.clicked{box-shadow:inset rgb(43, 41, 41) 3px 3px;transition:box-shadow 0.5s ease-out}.container{margin-top:2%;margin-left:2%}nav.svelte-2gpvk8.svelte-2gpvk8{display:flex;align-items:center;justify-content:space-between;gap:30px;background-color:rgb(230, 176, 185);padding:10px;height:35px}nav.svelte-2gpvk8 h1.svelte-2gpvk8{margin-bottom:0;color:white}nav.svelte-2gpvk8 a.svelte-2gpvk8{text-decoration-line:none;color:white}nav.svelte-2gpvk8 .searching input.svelte-2gpvk8{border:0;outline:0}nav.svelte-2gpvk8 .title.svelte-2gpvk8{color:white}nav.svelte-2gpvk8 .title.svelte-2gpvk8:hover{text-decoration-line:none}nav.svelte-2gpvk8 .profile-corner.svelte-2gpvk8{display:flex;gap:20px;align-items:center}nav.svelte-2gpvk8 .profile-corner img.svelte-2gpvk8{border-radius:50%;width:50px;height:50px}.box{background-color:rgb(230, 176, 185);border:1px solid rgb(43, 41, 41);box-shadow:rgb(43, 41, 41) 2px 2px}@media only screen and (max-width: 768px){body{margin:0;background-size:auto 768px;background-image:url(https://images.template.net/177100/anime-background-presentation-edit-online.jpg);background-repeat:no-repeat}nav.svelte-2gpvk8.svelte-2gpvk8{padding:5px}nav.svelte-2gpvk8 .searching.svelte-2gpvk8{display:none}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `<nav class="navbar svelte-2gpvk8"><a class="title svelte-2gpvk8" href="/" data-svelte-h="svelte-1lz486n"><h1 class="svelte-2gpvk8">Persona</h1></a> <div class="links" data-svelte-h="svelte-ix3u3b"><a href="/discover" class="svelte-2gpvk8">Discover</a></div> <div class="searching svelte-2gpvk8" data-svelte-h="svelte-vna3yu"><input type="text" class="searchbar svelte-2gpvk8" placeholder="Search something..."> <button class="searchbtn">Search!</button></div> <div class="profile-corner svelte-2gpvk8">${!$user ? `<a href="/login" class="svelte-2gpvk8" data-svelte-h="svelte-1vxwqu1">Login</a>` : `<a href="/disconnect" class="svelte-2gpvk8" data-svelte-h="svelte-1lsbkpz">Disconnect</a> <a href="/create" class="svelte-2gpvk8" data-svelte-h="svelte-13h8egb">Create</a> ${validate_component(Tooltip, "Tooltip").$$render($$result, { title: `${$user.username}` }, {}, {
    default: () => {
      return `<a href="/profile" class="svelte-2gpvk8"><img${add_attribute("src", $user.avatar, 0)} alt="Profile" class="svelte-2gpvk8"></a>`;
    }
  })}`}</div></nav> ${slots.default ? slots.default({}) : ``} ${$user ? `${validate_component(Chatbox, "Chatbox").$$render($$result, { socket }, {}, {})}` : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CBnycf4a.js.map
