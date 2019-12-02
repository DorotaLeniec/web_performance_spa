import html from "./html.js";
import {VoteButtons} from "./vote-buttons.js";

const Comments = ({ comments, index }) => html`
  <section class="post__comments">
    <h1>Comments</h1>
    ${comments.map((c, index) => {
      return html`
        <div class="post__comment">
          <h2 class="post__comment-author">${c.username} wrote</h2>
          <p class="post__comment-text">
            ${c.text}
          </p>
          <${VoteButtons} index=${index} score=${c.score}/>
        </div>
      `;
    })}
  </section>
`;

export default Comments;
