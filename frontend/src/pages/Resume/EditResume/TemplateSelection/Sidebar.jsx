import React, { useState } from "react";

const SidebarTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Danh sách template mẫu
  const templates = [
    { id: "toronto", name: "Toronto", type: ["PDF"] },
    { id: "stockholm", name: "Stockholm", type: ["PDF", "DOCX"] },
    { id: "new_york", name: "New York", type: ["PDF", "DOCX"] },
    { id: "vienna", name: "Vienna", type: ["PDF"] },
    { id: "sydney", name: "Sydney", type: ["PDF", "DOCX"] },
    { id: "london", name: "London", type: ["PDF"] },
    { id: "dublin", name: "Dublin", type: ["PDF"] },
    { id: "moscow", name: "Moscow", type: ["PDF"] },
  ];

  return (
    <div className="w-1/4 h-screen bg-[#1e2532] p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-white mb-6">Templates</h2>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`relative p-4 rounded-lg cursor-pointer ${
              selectedTemplate === template.id
                ? "border-2 border-blue-500 bg-gray-800"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {/* Tên template */}
            <h3 className="text-white text-sm font-bold mb-2">
              {template.name}
            </h3>

            {/* Nút chọn (nếu được chọn) */}
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✔</span>
              </div>
            )}

            {/* Các loại file hỗ trợ */}
            <div className="absolute bottom-2 right-2 flex space-x-1">
              {template.type.map((fileType, index) => (
                <div
                  key={index}
                  className="bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-black"
                >
                  {fileType}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarTemplates;
