import html from "./html.js";

export const VoteButtons = ({ score, index }) => html`
  <div class="post__vote-buttons">
    <button class="post__vote-down">-</button>
    <span class="post__vote-score"
      >${score === 0 ? "0" : score > 0 ? "+" + score : score}</span
    >
    <button class="post__vote-up">+</button>
  </div>
`;
