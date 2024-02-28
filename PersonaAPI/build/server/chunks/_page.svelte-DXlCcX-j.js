import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from './ssr-4lhOaISg.js';
import { g as goto } from './client-CQ5E_ugM.js';
import { r as root } from './stores-DTHoQrrK.js';
import axios from 'axios';
import { M as MarkdownEditor, S as StatsEditor, T as TagInput } from './MarkdownEditor-CaVqMs1B.js';
import './exports-DuWZopOC.js';
import './index-ClHrc94L.js';
import 'socket.io-client';
import 'marked';
import 'isomorphic-dompurify';

const css = {
  code: ".box.svelte-1icyjj8.svelte-1icyjj8{margin-inline:auto;width:80%;border:1px solid gray;border-radius:10px;padding:5px;margin-bottom:10px}.inline.svelte-1icyjj8.svelte-1icyjj8{display:flex;justify-content:space-around}.tag-box.svelte-1icyjj8.svelte-1icyjj8,.stats-box.svelte-1icyjj8.svelte-1icyjj8{display:flex;flex-direction:column;align-items:center}.images-corner.svelte-1icyjj8.svelte-1icyjj8{display:flex;justify-content:flex-end}.images-corner.svelte-1icyjj8 .images-form.svelte-1icyjj8{display:flex;justify-content:space-between}.images-corner.svelte-1icyjj8 .images-form .setting-icon img.svelte-1icyjj8{width:150px;height:150px;cursor:pointer}.images-corner.svelte-1icyjj8 .images-form .setting-refsheet img.svelte-1icyjj8{width:630px;height:270px;cursor:pointer}.images-corner.svelte-1icyjj8 .images-form input.svelte-1icyjj8{margin-inline:auto;margin-bottom:10px}.inline-name.svelte-1icyjj8.svelte-1icyjj8{display:flex;align-items:center;justify-content:center;gap:50px;width:80%;border-bottom:1px solid rgb(43, 41, 41);margin-inline:auto;margin-bottom:10px}.inline-name.svelte-1icyjj8 input[type=text].svelte-1icyjj8{border:0;background-color:rgba(209, 209, 209, 0);outline:0;font-size:2rem;font-weight:bold;width:50%;border-radius:0;border-bottom:0}.inline-name.svelte-1icyjj8 h1.svelte-1icyjj8{font-size:2rem;margin-bottom:0}.alert.svelte-1icyjj8.svelte-1icyjj8{padding:5px;width:45%;border-radius:10px;color:white}.success.svelte-1icyjj8.svelte-1icyjj8{background-color:green;border:2px solid rgb(4, 78, 4)}.error.svelte-1icyjj8.svelte-1icyjj8{background-color:red;border:2px solid rgb(88, 4, 4)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let statsData;
  let tagsData = [];
  let character = {};
  (async () => {
    try {
      let result = await axios.get(`${root}/characters/${data.id}`);
      character = result.data;
    } catch {
      await goto();
    }
  })();
  let imagesForm;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-e87uqu_START -->${$$result.title = `<title>Editing ${escape(character.name || "a character")}</title>`, ""}<!-- HEAD_svelte-e87uqu_END -->`, ""} <main><div class="container">${``} ${``} <div class="box svelte-1icyjj8"><div class="inline-name svelte-1icyjj8"><h1 class="svelte-1icyjj8" data-svelte-h="svelte-ynt621">Character :</h1> <input type="text" name="name" id="name" placeholder="Give a name to the character" autocomplete="off"${add_attribute("value", character.name, 0)} class="svelte-1icyjj8"> <button data-svelte-h="svelte-h0ynbm">Edit</button></div> ${validate_component(MarkdownEditor, "MarkdownEditor").$$render(
      $$result,
      { markdown: character.description },
      {
        markdown: ($$value) => {
          character.description = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div id="editorjs"></div> <div class="images-corner svelte-1icyjj8"><form action="" class="images-form svelte-1icyjj8" method="put" id="images-form"${add_attribute("this", imagesForm, 0)}><div class="setting-icon"><label for="icon" data-svelte-h="svelte-16b1hwa">Icon</label> <br> <input type="file" name="icon" id="icon" max="1" hidden class="svelte-1icyjj8"> ${character.icon ? `<img${add_attribute("src", character.icon, 0)} alt="" class="svelte-1icyjj8">` : `<button data-svelte-h="svelte-qnmkvj">Upload Icon</button>`}</div> <div class="setting-refsheet"><label for="refsheet" data-svelte-h="svelte-1ahd2x6">Refsheet</label> <br> <input type="file" name="refsheet" id="refsheet" max="1" hidden class="svelte-1icyjj8"> ${character.refsheet ? `<img${add_attribute("src", character.refsheet, 0)} alt="" class="svelte-1icyjj8">` : `<button data-svelte-h="svelte-oeurci">Upload Refsheet</button>`}</div></form></div></div> <div class="box svelte-1icyjj8"><div class="inline svelte-1icyjj8"><div class="stats-box svelte-1icyjj8"><h3 data-svelte-h="svelte-5zwsxb">Stats</h3> ${character && character.stats ? `${validate_component(StatsEditor, "StatsEditor").$$render(
      $$result,
      {
        dataToSet: character.stats,
        data: statsData
      },
      {
        data: ($$value) => {
          statsData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> <div class="tag-box svelte-1icyjj8"><h3 data-svelte-h="svelte-1nl40cx">Tags</h3> ${character && character.tags ? `${validate_component(TagInput, "TagInput").$$render(
      $$result,
      {
        placeholder: "Add keywords",
        tagsToSet: character.tags,
        keywordsList: tagsData
      },
      {
        keywordsList: ($$value) => {
          tagsData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(TagInput, "TagInput").$$render(
      $$result,
      {
        placeholder: "Add keywords",
        keywordsList: tagsData
      },
      {
        keywordsList: ($$value) => {
          tagsData = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div></div></div></div> </main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DXlCcX-j.js.map
