import React from "react";
import amico from "../../assets/amico.svg";

const ServiceCard = ({ src, alt, title }) => {
  return (
    <div className="w-[90%] h-36 flex flex-col justify-center items-center gap-2 bg-[#FCF1E1] rounded-lg px-5 text-center">
      {/* <div className="w-[16%] h-36 flex flex-col justify-center items-start gap-2 bg-[rgba(255,232,199,0.91)] rounded-lg px-5 "> */}
      <img
        src={src}
        alt="loading..."
        className="sm:w-18 sm:h-16 h-16 object-cover"
      />
      <p className="text-base sm:text-md font-medium mb-3">{title}</p>
    </div>
  );
};

export default ServiceCard;

// import React from "react";
// import amico from "../../assets/amico.svg";

// const ServiceCard = ({ src, alt, title }) => {
//   return (
//     <div className="w-[90%] h-36 flex flex-col justify-center items-center gap-2 bg-[#FCF1E1] rounded-lg px-5 text-center">
//       {/* <div className="w-[16%] h-36 flex flex-col justify-center items-start gap-2 bg-[rgba(255,232,199,0.91)] rounded-lg px-5 "> */}
//       <img src={src} alt="loading..." className="w-18 h-16" />
//       <p className="text-sm sm:text-md font-medium">{title}</p>
//     </div>
//   );
// };

// export default ServiceCard;
