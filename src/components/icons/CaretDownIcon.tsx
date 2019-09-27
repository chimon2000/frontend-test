import React from "react";
import styled from "@emotion/styled";

export function CaretDownIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="6"
      fill="none"
      viewBox="0 0 8 6">
      <path
        fill="#969696"
        d="M7 .75l.795.796-3.772 3.772L.25 1.546 1.046.75l2.977 2.977L7 .75z"
      />
    </Svg>
  );
}

export default CaretDownIcon;

const Svg = styled("svg")`
  height: 0.5em;
  width: 0.5em;
`;
