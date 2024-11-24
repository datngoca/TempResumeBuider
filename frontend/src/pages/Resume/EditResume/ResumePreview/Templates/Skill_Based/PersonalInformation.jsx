import React from "react";

const PersonalInformation = ({ personalInfo, summary }) => {
  return (
    <div className="text-inherit font-inherit w-full bg-inherit p-4 rounded-lg shadow-md">
      <img
        src={personalInfo?.image || "/default-avatar.png"} // Ảnh mặc định
        alt={personalInfo?.name || "User"}
        className="w-24 h-24 rounded-full mb-4 mx-auto"
      />
      <h1 className="text-2xl font-bold text-center">
        {personalInfo?.name || "No Name Provided"}
      </h1>
      <p className="text-lg text-gray-600 text-center">
        {personalInfo?.address || "No Address Provided"}
      </p>
      <p className="text-center">
        {personalInfo?.email || "No Email Provided"}
      </p>
      <p className="text-center">
        {personalInfo?.phone || "No Phone Provided"}
      </p>
      <div className="flex gap-4 justify-center mt-4">
        {personalInfo?.github && (
          <a
            href={personalInfo.github}
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {personalInfo?.linkedin && (
          <a
            href={personalInfo.linkedin}
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        )}
      </div>
      <p className="mt-4 text-sm">{summary || "No Summary Provided"}</p>
    </div>
  );
};

export default PersonalInformation;
