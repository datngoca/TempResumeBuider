import React from "react";
import SectionTitle from "./SectionTitle";

const Experience = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <p>No experiences provided.</p>;
  }

  return (
    <div className="text-inherit font-inherit w-full">
      <SectionTitle title="Work Experience" />
      {experiences.map((exp) => (
        <div key={exp._id?.$oid || exp._id} className="mb-4">
          <h3 className="text-lg font-bold">
            {exp.title || "No Title Provided"}
          </h3>
          <p className="text-gray-600">
            {exp.company || "No Company"} - {exp.position || "No Position"}
          </p>
          <p className="text-sm text-gray-500">
            {exp.date || "No Date Provided"}
          </p>
          <ul className="list-disc ml-6 mt-2">
            {exp.responsibilities?.map((task, index) => (
              <li key={index}>{task}</li>
            )) || <li>No responsibilities listed.</li>}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
