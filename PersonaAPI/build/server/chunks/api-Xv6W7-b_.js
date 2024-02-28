import axios from 'axios';
import { r as root } from './stores-DTHoQrrK.js';

class API {
  async getUser(id) {
    let result = await axios.get(`${root}/users/${id}`);
    return result.data;
  }
  async getUsers() {
    let result = await axios.get(`${root}/users`);
    return result.data;
  }
  async getCharacter(code) {
    let result = await axios.get(`${root}/characters/${code}`);
    return result.data;
  }
  async getCharacters() {
    let result = await axios.get(`${root}/characters`);
    return result.data;
  }
  async getMe() {
    let result = await axios.post(`${root}/users/exchange`);
    return result.data;
  }
  async updateMe(options) {
    try {
      let result = await axios.put(`${root}/users`, options);
      return result.data;
    } catch (e) {
      return e.result.data;
    }
  }
  async login(options) {
    try {
      let result = await axios.post(`${root}/users/login`, options, { withCredentials: true });
      return result.data.token;
    } catch (e) {
      return e.result.data;
    }
  }
  async register(options) {
    try {
      let result = await axios.post(`${root}/users`, options, { withCredentials: true });
      return result.data.token;
    } catch (e) {
      return e.result.data;
    }
  }
  async deleteMe() {
    try {
      let result = await axios.delete(`${root}/users`);
      return result.data;
    } catch (e) {
      return e.result.data;
    }
  }
  async addCharacter(options) {
    try {
      let result = await axios.post(`${root}/characters`, options);
      return result.data;
    } catch (e) {
      return e.result.data;
    }
  }
  async updateCharacter(options) {
    try {
      let result = await axios.put(`${root}/characters`, options);
      return result.data;
    } catch (e) {
      return e.result.data;
    }
  }
  async upload(formdata) {
    try {
      let resultUpload = await axios.post(`${root}/upload`, formdata);
      if (resultUpload.data.url) {
        return resultUpload.data.url;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }
  async deleteCharacter(id) {
    try {
      let result = await axios.put(`${root}/characters/${id}`);
      return result.data;
    } catch (e) {
      return e.result.data;
    }
  }
}
const api = new API();

export { api as a };
//# sourceMappingURL=api-Xv6W7-b_.js.map
