import React from "react";
import styled from "@emotion/styled";

export function MarkerIcon({ className }: { className? }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 66"
      className={className}>
      <path
        fill="#002B56"
        fillRule="evenodd"
        d="M38.88 32.02A20.902 20.902 0 0042 21C42 9.402 32.598 0 21 0S0 9.402 0 21c0 4.102 1.176 7.93 3.21 11.164l16.263 32.724c.74 1.49 2.871 1.477 3.593-.022L38.88 32.019z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M21 35c7.732 0 14-6.268 14-14S28.732 7 21 7 7 13.268 7 21s6.268 14 14 14z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default MarkerIcon;

const Svg = styled("svg")`
  height: 40px;
`;
