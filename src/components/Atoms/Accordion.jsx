import React from "react";

const Accordion = ({ id, heading, content, isActive, onClick }) => {
  return (
    <div className="w-full bg-white dark:border-gray-700">
      <button
        type="button"
        className="h-32 md:h-10 overflow-hidden flex items-center justify-between 
                  w-full p-5 font-medium rtl:text-right text-gray-500 
                  border border-b-1 border-gray-300 rounded-t-xl focus:ring-1
                 focus:ring-gray-200 dark:focus:ring-gray-800 
                 dark:border-gray-700 dark:text-gray-400 bg-white hover:bg-gray-100
                 dark:hover:bg-gray-800 gap-3 "
        onClick={onClick}
        aria-expanded={isActive ? "true" : "false"}
        aria-controls={`${id}-body`}
      >
        <span className="font-[600] text-sm">{heading}</span>
        <svg
          className={`w-3 h-3  shrink-0 ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isActive && (
        <div
          id={`${id}-body`}
          className={`w-[100%] duration-300 p-5 border border-gray-200 rounded-lg dark:border-gray-700 `}
          aria-labelledby={`${id}-heading`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
