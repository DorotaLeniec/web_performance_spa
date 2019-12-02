import { h, app } from "https://unpkg.com/hyperapp@2.0.3";

app({
    view: state => h("div", {}, "text"),
    node: document.body
});