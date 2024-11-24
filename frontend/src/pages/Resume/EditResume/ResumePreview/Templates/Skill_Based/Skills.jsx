import React from "react";
import SectionTitle from "./SectionTitle";

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return <p>No skills provided.</p>;
  }

  return (
    <div className="text-inherit font-inherit w-full">
      <SectionTitle title="Skills" />
      <ul className="list-disc ml-6 mt-2">
        {skills.map((skill) => (
          <li key={skill._id?.$oid || skill._id}>
            <strong>{skill.title}:</strong> {skill.value || "No Value Provided"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
