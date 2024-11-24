import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import ResumeEditor from "./ResumeEditor";
import ResumePreview from "../ResumePreview";
import { DataContext } from "@/context/DataContext";
import { IoIosArrowBack } from "react-icons/io";

const EditorPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("Template1"); // Template được chọn
  const { data, setData, id, access_token, setShowTemplateSelection } =
    useContext(DataContext);

  return (
    <div className="bg-[#1e2532] text-white">
      <div className="flex w-full h-[7%] bg-[#0f141e] justify-between items-center px-10">
        {/* Nút Back */}
        <button
          onClick={() => setShowTemplateSelection(false)}
          className="flex items-center text-white"
        >
          <IoIosArrowBack className="mr-2" />
          <span>Back to Editor</span>
        </button>

        {/* Các mẫu ở giữa */}
        <div className="flex items-center justify-center space-x-4">
          <div className="text-white">Mau 1</div>
          <div className="text-white">Mau 2</div>
          <div className="text-white">Mau 3</div>
          <div className="text-white">Mau 4</div>
          <div className="text-white">Mau 5</div>
        </div>
        <button className="bg-blue-500 rounded-sm p-2 font-semibold mr-1">
          Download PDF
        </button>
      </div>

      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <Sidebar
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />

        {/* Main Content */}
        <div className=" p-4 w-3/4">
          {/* Resume Preview */}
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
