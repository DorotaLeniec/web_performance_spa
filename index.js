import { h, app } from "./web_modules/hyperapp.js";
import htm from "./web_modules/htm.js";

const html = htm.bind(h);

app({
    view: state => html`<div>text</div>`,
    node: document.body
});