import educationImg from "../../../assets/Projects/VIRTUAL-EDUCATION.png";

const Aims = () => {
  return (
    <div className="w-full rounded-lg p-10 bg-white flex flex-col md:flex-row justify-between">
      <div
        data-aos-duration="1000"
        data-aos="fade-right"
        className=" w-full md:w-7/12"
      >
        <p className="w-full md:w-10/12 text-lg font-semibold mt-10 text-center md:text-start">
          <h1 className="text-[#01a7e1]">
            AXON<span className="text-green-500">TECH</span>
          </h1>
          Company aims to invest in companies that provide highly innovative
          solutions
        </p>
        <p className="w-full md:w-8/12 text-sm my-5 text-center md:text-start">
          As a full-service digital designer, We work closely with our clients
          to define, design and develop transformative user experiences across
          all platforms and brand’s touchpoints.
        </p>
      </div>
      <div className=" w-full md:w-4/12">
        <img
          data-aos-duration="1000"
          data-aos="fade-left"
          src={educationImg}
          className="w-full h-auto mx-auto md:mr-0 object-cover"
        />
      </div>
    </div>
  );
};

export default Aims;
