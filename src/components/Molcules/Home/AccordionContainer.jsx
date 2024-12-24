import React from "react";
import { Accordion } from "../../Atoms";
import details from "../../../assets/data/Accordion";

const AccordionContainer = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div
      className="flex flex-col gap-1 mt-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {details.map((accordion, index) => (
        <Accordion
          key={accordion.id}
          id={accordion.id}
          heading={accordion.heading}
          content={accordion.content}
          isActive={index === activeIndex}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
