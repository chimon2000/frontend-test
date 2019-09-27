import React from "react";
import styled from "@emotion/styled";

export function CaretUpIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="6"
      fill="none"
      viewBox="0 0 8 6">
      <path
        fill="#969696"
        d="M7 5.318l.795-.795L4.024.75.25 4.523l.796.795 2.977-2.977L7 5.318z"
      />
    </Svg>
  );
}

export default CaretUpIcon;

const Svg = styled("svg")`
  height: 0.5em;
  width: 0.5em;
`;