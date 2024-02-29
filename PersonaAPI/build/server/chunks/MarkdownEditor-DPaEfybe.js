import { c as create_ssr_component, b as add_attribute, e as escape } from './ssr-4lhOaISg.js';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { L as Linkify } from './stores-Bjhq2HjD.js';

const css$2 = {
  code: ".stats-container.svelte-10uucay{display:flex;flex-direction:column-reverse;gap:5px}.stats-container .line{margin-inline:auto}.stats-container .line #value{width:80px}.stats-container .line #name{width:300px}.stats-container .line #add{width:60px}.stats-container .line #remove{width:60px}",
  map: null
};
const StatsEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let { dataToSet = void 0 } = $$props;
  if (dataToSet && dataToSet.length === 1) {
    if (dataToSet[0].name === "")
      dataToSet = void 0;
  }
  let statLineDiv;
  let statsContainer;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.dataToSet === void 0 && $$bindings.dataToSet && dataToSet !== void 0)
    $$bindings.dataToSet(dataToSet);
  $$result.css.add(css$2);
  return `<div class="stats-container svelte-10uucay"${add_attribute("this", statsContainer, 0)}><div class="line"${add_attribute("this", statLineDiv, 0)}><input type="text" id="name" autocomplete="off" placeholder="Name of the stats (HP, ATK, DEX, etc)">
		:
		<input type="number" id="value" autocomplete="off" placeholder="Value"> <button id="add" data-svelte-h="svelte-d3lgtr">+</button></div> </div>`;
});
const css$1 = {
  code: ".keywords.svelte-1ccqldb{display:flex;gap:5px}.keyword-input-box.svelte-1ccqldb{border-width:0 0 1px 0;border-color:gray;border-style:solid;width:400px;display:flex;gap:1px;margin-inline:auto}.keyword-input-box.svelte-1ccqldb:hover{cursor:text}input.svelte-1ccqldb{width:250px;border:0;border-radius:0;border-width:0;background-color:rgba(255, 255, 255, 0)}input.svelte-1ccqldb:focus{outline:none}.keyword{display:flex;background-color:rgb(201, 173, 122);align-items:center;gap:10px;padding:5px;border-radius:5px}.keyword-delete:hover{cursor:pointer}",
  map: null
};
const TagInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placeholder } = $$props;
  let { max = 5 } = $$props;
  let { keywordsList = [] } = $$props;
  let { tagsToSet = void 0 } = $$props;
  let keywordsEl;
  let ibox;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.keywordsList === void 0 && $$bindings.keywordsList && keywordsList !== void 0)
    $$bindings.keywordsList(keywordsList);
  if ($$props.tagsToSet === void 0 && $$bindings.tagsToSet && tagsToSet !== void 0)
    $$bindings.tagsToSet(tagsToSet);
  $$result.css.add(css$1);
  return `<div class="keyword-input-box svelte-1ccqldb"${add_attribute("this", ibox, 0)}><div class="keywords svelte-1ccqldb"${add_attribute("this", keywordsEl, 0)}></div> <input type="text"${add_attribute("placeholder", placeholder, 0)} class="svelte-1ccqldb"> </div>`;
});
const css = {
  code: "textarea.svelte-1i5byj1,.preview.svelte-1i5byj1{box-sizing:border-box;display:block;width:100%}textarea.svelte-1i5byj1{font-family:monospace, Roboto;height:25%;border:none;margin:0;padding:1rem}.preview.svelte-1i5byj1{height:75%;padding:2rem;border-top:solid 2px #888}body{padding:0}",
  map: null
};
const MarkdownEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { markdown = "" } = $$props;
  if ($$props.markdown === void 0 && $$bindings.markdown && markdown !== void 0)
    $$bindings.markdown(markdown);
  $$result.css.add(css);
  return ` <textarea placeholder="Enter description here" class="svelte-1i5byj1">${escape(markdown || "")}</textarea>  <div class="preview svelte-1i5byj1"><!-- HTML_TAG_START -->${DOMPurify.sanitize(Linkify(marked(markdown)), {
    FORBID_TAGS: ["script"],
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"]
  })}<!-- HTML_TAG_END --></div> `;
});

export { MarkdownEditor as M, StatsEditor as S, TagInput as T };
//# sourceMappingURL=MarkdownEditor-DPaEfybe.js.map
