import React from "react";
import {
  FeaturedIn,
  Services,
  SummarVibes,
  WhyChoose,
  LatestWK,
  Blogs,
  Testimonial,
  // AccordionContainer,
  FAQS,
} from "../components/Molcules";
// import NftFilter from "./NftFilter";

const Home = () => {
  return (
    <div className="pb-5 mx-8 lg:px-16">
      <SummarVibes />
      <FeaturedIn />
      <Services />
      <WhyChoose />
      <LatestWK />
      <Blogs />
      <Testimonial />
      <FAQS />
    </div>
  );
};

export default Home;
