import { useState } from "react";
import { Input } from "../../Atoms";

const Form = ({ id }) => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    address: "",
    email: "",
    phoneNuber: "",
    highestQualifcation: "",
  });

  const handleForm = (e) => {
    console.log(inputData);
    e.preventDefault();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const inputs = [
    {
      id: 1,
      label: "First Name :",
      placeholder: "Enter First Name",
      name: "firstName",
      type: "text",
      required: true,
      pattern: "^[A-Za-z]{3,10}$",
      errorMessage:
        "First Name should be 3-10 characters and shouldn't includes any special character",
    },
    {
      id: 2,
      label: "Last Name :",
      name: "lastName",
      placeholder: "Enter Last Name",
      type: "text",
      required: true,
      pattern: "^[A-Za-z]{3,10}$",
      errorMessage:
        "Last Name should be 3-10 characters and shouldn't includes any special character",
    },
    {
      id: 3,
      label: "Father’s Name :",
      name: "fatherName",
      placeholder: "Enter Your Father Name",
      type: "text",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
      errorMessage:
        "Father Name should be 3-16 characters and shouldn't includes any special character",
    },
    {
      id: 4,
      label: "Address :",
      name: "address",
      placeholder: "Enter Your Address",
      className: "md:col-span-3",
      required: true,
      type: "text",
      errorMessage: "",
    },
    {
      id: 5,
      label: "Email :",
      name: "email",
      placeholder: "Enter Your Email",
      type: "email",
      required: true,
      errorMessage: "It should be correct template",
    },
    {
      id: 6,
      label: "Phone Number :",
      name: "phoneNumber",
      placeholder: "Enter Number",
      required: true,
      pattern: "^\\+92-3\\d{9,13}$",
      // type: "Number",
      errorMessage: "It should start with +92-3",
    },
    {
      id: 7,
      label: "Highest Qualifcation :",
      name: "highestQualification",
      placeholder: "Enter Highest Qualification",
      type: "text",
      required: true,
    },
  ];
  return (
    <div key={id}>
      <form
        onSubmit={handleForm}
        className="w-full grid
        grid-cols-1 
        sm:grid-cols-2 gap-8
        md:grid-cols-3"
      >
        {inputs?.map((item) => (
          <Input
            key={item.id}
            onChange={(event) => handleInput(event)}
            value={inputData[item.name]}
            {...item}
          />
        ))}
      </form>
    </div>
  );
};

export default Form;
