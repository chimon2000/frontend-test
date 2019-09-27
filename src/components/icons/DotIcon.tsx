import React from "react";

export function DotIcon({
  filled = false,
  className
}: {
  filled?;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      className={className}>
      <path
        fill={filled ? "#00E8A4" : "#FF3548"}
        fillRule="evenodd"
        d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default DotIcon;
