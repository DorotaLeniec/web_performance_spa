import { h, app } from "./web_modules/hyperapp.js";
import htm from "./web_modules/htm.js";

const html = htm.bind(h);

const state = 0;

const Down = state => state - 1;
const Up = state => state + 1;

app({
    init: state,
    view: state => html`
          <div>
            <h1>${state}</h1>
            <button onclick=${Down}>-</button>
            <button onclick=${Up}>+</button>
          </div>
    `,
    node: document.body
});