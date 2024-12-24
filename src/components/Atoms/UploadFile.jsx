import React, { useState } from "react";

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mt-10 ">
      <span className="text-sm md:text-base">Upload Your Resume</span>
      <div
        className="w-full h-64 rounded-lg border-2 border-dashed border-[rgba(0,0,0,0.36)] flex flex-col items-center justify-center mt-3"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="w-8/12 flex flex-col items-center justify-center gap-2">
          <div className="w-8/12  flex items-center justify-center">
            <label htmlFor="fileInput" className="cursor-pointer">
              {uploadedFile ? (
                <span className="text-[rgba(0,0,0,0.5)] text-sm md:text-base">
                  {uploadedFile.name}
                </span>
              ) : (
                <svg
                  type="file"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 70 71"
                  fill="none"
                  className="w-10 h-10 cursor-pointer"
                  onClick={handleUploadClick}
                >
                  <path
                    d="M34.9997 44.5246V27.0246M34.9997 63.4829C51.1084 63.4829 64.1663 50.425 64.1663 34.3163C64.1663 18.2075 51.1084 5.1496 34.9997 5.1496C18.8909 5.1496 5.83301 18.2075 5.83301 34.3163C5.83301 50.425 18.8909 63.4829 34.9997 63.4829Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.25 33.858L35 25.108L43.75 33.858"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </label>
            <input
              id="fileInput"
              type="file"
              className="hidden text-sm md:text-base"
              accept=".pdf" // Allow PDF and image files
              onChange={handleFileChange}
            />
          </div>

          <span className="font-semibold text-sm md:text-base">
            Browse Files
          </span>
          <span className="text-[rgba(0,0,0,0.5)] text-center text-sm md:text-base">
            Drag and drop file here
          </span>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
