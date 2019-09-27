import React from "react";
import styled from "@emotion/styled";

export function CheckIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M7.214 10.074l5.323-5.52.926.892-6.249 6.48-3.677-3.813.926-.893 2.751 2.854z"
      />
    </Svg>
  );
}

export default CheckIcon;

const Svg = styled("svg")`
  height: 1em;
  width: 1em;
`;
