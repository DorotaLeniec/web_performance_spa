import { h, app } from "./web_modules/hyperapp.js";
import htm from "./web_modules/htm.js";

const html = htm.bind(h);

const state = 0;

app({
    init: state,
    view: state => html`<div>${state}</div>`,
    node: document.body
});