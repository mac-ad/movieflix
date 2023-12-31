import * as React from "react";
const SvgMovie = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.65 4.5 16.91.96l3.93-.78.78 3.92-1.97.4m-2.94.57-2.74-3.53-1.97.39 2.75 3.53 1.96-.39m-4.9.98L9.07 2.5l-1.97.41 2.75 3.53 1.96-.39M4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97L4.16 3.5M22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8h20m-2 2H4v8h16v-8M7 24h2v-2H7v2m8 0h2v-2h-2v2m-4 0h2v-2h-2v2Z"
    />
  </svg>
);
export default SvgMovie;
