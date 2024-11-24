import React from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

const ResumeTemplate = ({ data }) => {
  return (
    <div className="text-sm font-normal bg-white w-full h-full p-6 rounded-lg shadow-lg">
      {data.personalInformation && (
        <PersonalInformation
          personalInfo={data.personalInformation}
          summary={data.summary}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {data.experiences && <Experience experiences={data.experiences} />}
        <div>
          {data.skills && <Skills skills={data.skills} />}
          {data.projects && <Projects projects={data.projects} />}
          {data.education && <Education education={data.education} />}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
