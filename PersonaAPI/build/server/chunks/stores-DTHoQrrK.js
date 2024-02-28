import axios from 'axios';
import { w as writable } from './index-ClHrc94L.js';
import { io } from 'socket.io-client';

axios.defaults.withCredentials = true;
const user = writable();
const root = "https://persona-db.xyz/api";
const socketRoot = "https://persona-db.xyz";
const socket = io(socketRoot);
function Linkify(inputText) {
  return inputText;
}

export { Linkify as L, root as r, socket as s, user as u };
//# sourceMappingURL=stores-DTHoQrrK.js.map
