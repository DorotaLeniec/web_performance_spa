import { h, app } from "https://unpkg.com/hyperapp@2.0.3";
import htm from "https://unpkg.com/htm@2.2.1?module"

const html = htm.bind(h);

app({
    view: state => html`<div>text</div>`,
    node: document.body
});