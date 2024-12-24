import React from "react";

const RectangleSvg = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7537 0.49879C14.5205 -0.0413695 16.3906 0.953004 16.9308 2.71979L19.9447 12.5779C20.4849 14.3447 19.4905 16.2148 17.7237 16.755L7.87627 19.7657C6.10949 20.3058 4.23934 19.3115 3.69918 17.5447L0.685248 7.68655C0.145089 5.91977 1.13946 4.04962 2.90624 3.50946L12.7537 0.49879Z"
        fill={fill}
      />
    </svg>
  );
};

export default RectangleSvg;
