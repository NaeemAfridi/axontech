import React from "react";

const CheckIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // className="border w-2"
        viewBox="0 0 23 24"
        fill="none"
      >
        <ellipse
          cx="11.4851"
          cy="11.9843"
          rx="11.4851"
          ry="11.4329"
          fill="#00A7E1"
        />
        <path
          d="M6.89111 11.9842L10.3367 15.4141L16.0792 9.69763"
          stroke="white"
          strokeWidth="1.71493"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
