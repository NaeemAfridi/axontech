import React from "react";
import Avatar from "./Avatar";

import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import customer3 from "../../assets/customer3.png";
import customer4 from "../../assets/customer4.png";

const CustomerCard = ({ className, src, alt }) => {
  const images = [customer1, customer2, customer3, customer4];

  return (
    <div data-aos="fade-right" data-aos-duration="1000" className={className}>
      <div>
        <span className="text-sm font-semibold">Our Customers</span>
      </div>
      <div className="flex items-end my-1">
        {images.map((item) => (
          <Avatar key={item} src={item} alt="Loading..." />
        ))}
        <span className="text-[#FF7344] text-base font-medium mx-3">+25K</span>
      </div>
    </div>
  );
};

export default CustomerCard;
