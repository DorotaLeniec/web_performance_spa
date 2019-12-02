import { h, app } from "./web_modules/hyperapp.js";
import html from "./html.js";
import Comments from "./comments.js";

const state = {
  comments: [
    {
      username: "@username_9",
      score: 499,
      text:
        "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
    },
    {
      username: "@username_83",
      score: 498,
      text:
        "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
    }
  ]
};

app({
  init: state,
  view: state => html`
    <section class="post">
      <h1 class="post__title">A post about priorities and scheduling</h1>
      <a href="#" class="post__link">http://example.com/post</a>
      <div class="post__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
          mauris, euismod quis imperdiet eu, lacinia in leo. Mauris in orci sit
          amet eros finibus molestie. Vivamus laoreet, nibh eget ultrices
          consequat, leo mauris suscipit libero, eget feugiat enim turpis ac
          neque. Nam venenatis dolor ac posuere rhoncus.
        </p>
        <p>
          In eget finibus sapien, sit amet tempus augue. Pellentesque eu
          interdum nulla, sit amet dictum turpis. Sed ut lorem quis purus
          aliquet egestas. Nulla id risus ex. Morbi et lacinia risus. Integer
          eget ornare arcu. Donec purus est, dignissim a ante a, lacinia
          placerat massa. Donec quis lacinia lorem.
        </p>
      </div>
      <${Comments} comments=${state.comments} />
    </section>
  `,
  node: document.body
});
