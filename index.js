import { app } from "./web_modules/hyperapp.js";
import {view, state, FetchComments} from "./page.js";
import {LazyLoadListen} from "./lazy.js";

app({
  init: [state, LazyLoadListen, FetchComments],
  view,
  node: document.body
});