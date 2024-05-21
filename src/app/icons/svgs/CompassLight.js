import * as React from "react";
const SvgCompassLight = (props) => (
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
      d="m7 17 3.2-6.8L17 7l-3.2 6.8L7 17m5-5.9a.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8Z"
    />
  </svg>
);
export default SvgCompassLight;

