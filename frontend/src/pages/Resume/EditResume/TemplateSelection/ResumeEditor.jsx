import React from "react";

const ResumeEditor = ({ resumeData, setResumeData }) => {
  const handleInputChange = (field, value) => {
    setResumeData({
      ...resumeData,
      [field]: value,
    });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Edit Resume</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md"
          value={resumeData.personalInfo.name}
          onChange={(e) =>
            handleInputChange("personalInfo", {
              ...resumeData.personalInfo,
              name: e.target.value,
            })
          }
        />
      </div>
      {/* Thêm các trường nhập liệu khác cho địa chỉ, kỹ năng, lịch sử làm việc */}
    </div>
  );
};

export default ResumeEditor;
