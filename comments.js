import html from "./html.js";

const Comments = ({ comments }) => html`
  <section class="post__comments">
    <h1>Comments</h1>
    ${comments.map(c => {
      return html`
        <div class="post__comment">
          <h2 class="post__comment-author">${c.username} wrote</h2>
          <p class="post__comment-text">
            ${c.text}
          </p>
          <${VoteButtons} score=${c.score} />
        </div>
      `;
    })}
  </section>
`;

export default Comments;
