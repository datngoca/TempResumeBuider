import React from "react";
import SectionTitle from "./SectionTitle";

const Education = ({ education }) => {
  if (!education || education.length === 0) {
    return <p>No education details provided.</p>;
  }

  return (
    <div className="text-inherit font-inherit w-full">
      <SectionTitle title="Education" />
      {education.map((edu) => (
        <div key={edu._id?.$oid || edu._id} className="mb-4">
          <h3 className="text-lg font-bold">
            {edu.degree || "No Degree Provided"}
          </h3>
          <p className="text-gray-600">
            {edu.institution || "No Institution Provided"}
          </p>
          <p className="text-sm text-gray-500">
            {edu.date || "No Date Provided"}
          </p>
          {edu.gpa && <p className="text-gray-500">GPA: {edu.gpa}</p>}
        </div>
      ))}
    </div>
  );
};

export default Education;
