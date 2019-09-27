import React from "react";

type StarIconProps = {
  fill?: "empty" | "half" | "whole";
};

export function StarIcon({ fill = "empty" }: StarIconProps) {
  if (fill === "empty")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#002B56"
          d="M9.998 1.566l2.293 6.149.122.325H18.264l-4.705 3.54-.3.227.134.352 2.24 5.84L10.3 14l-.3-.225-.3.225-5.317 4 2.224-5.842.134-.351-.3-.226L1.736 8.04h5.83l.122-.324 2.31-6.15z"
        />
      </svg>
    );

  if (fill === "half")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#002B56"
          d="M9.998 1.566l2.293 6.149.122.325H18.264l-4.705 3.54-.3.227.134.352 2.24 5.84L10.3 14l-.3-.225-.3.225-5.317 4 2.224-5.842.134-.351-.3-.226L1.736 8.04h5.83l.122-.324 2.31-6.15z"
        />
        <mask
          id="a"
          width="20"
          height="20"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            stroke="#fff"
            d="M9.998 1.566l2.293 6.149.122.325H18.264l-4.705 3.54-.3.227.134.352 2.24 5.84L10.3 14l-.3-.225-.3.225-5.317 4 2.224-5.842.134-.351-.3-.226L1.736 8.04h5.83l.122-.324 2.31-6.15z"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#002B56" d="M0 0H10V20H0z" />
        </g>
      </svg>
    );

  console.log("full");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#002B56"
        fillRule="evenodd"
        d="M10 .14l2.76 7.4h7l-5.9 4.44 2.86 7.46L10 14.4l-6.7 5.04 2.84-7.46-5.9-4.44h6.98L10 .14z"
        clipRule="evenodd"
      />
    </svg>
  );
}
