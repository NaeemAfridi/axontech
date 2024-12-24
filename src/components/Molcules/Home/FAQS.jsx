import React from "react";
import AccordionContainer from "./AccordionContainer";

const FAQS = () => (
  <div className="h-auto  flex flex-col w-full mt-10 py-0 md:py-10">
    <span className="w-full text-center font-semibold text-xl">
      Frequently Asked Questions
    </span>
    <div className="py-8">
      <AccordionContainer />
    </div>
  </div>
);

export default FAQS;
