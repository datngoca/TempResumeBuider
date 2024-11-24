import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="border-b-2 border-gray-300 pb-2 mb-4 w-full text-inherit font-bold">
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
