import { app } from "./web_modules/hyperapp.js";
import {view, state} from "./page.js";
import {LazyLoadListen} from "./lazy.js";

app({
  init: [state, LazyLoadListen],
  view,
  node: document.body
});