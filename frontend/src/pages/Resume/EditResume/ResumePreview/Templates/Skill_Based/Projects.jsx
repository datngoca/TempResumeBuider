import React from "react";
import SectionTitle from "./SectionTitle";

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p>No projects provided.</p>;
  }

  return (
    <div className="text-inherit font-inherit w-full">
      <SectionTitle title="Projects" />
      {projects.map((project) => (
        <div key={project._id?.$oid || project._id} className="mb-4">
          <h3 className="text-lg font-bold">
            {project.title || "No Title Provided"}
          </h3>
          <p className="text-gray-600">
            {project.description || "No Description Provided"}
          </p>
          {project.features && (
            <p className="text-sm text-gray-500">
              <strong>Features:</strong> {project.features}
            </p>
          )}
          {project.technologies && (
            <p className="text-sm text-gray-500">
              <strong>Technologies:</strong> {project.technologies}
            </p>
          )}
          <div className="flex gap-4 mt-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
