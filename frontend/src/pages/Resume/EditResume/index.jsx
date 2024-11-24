import { DataContext } from "@/context/DataContext";
import FormSection from "./FormSection";
import ResumePreview from "./ResumePreview";
import TemplateSelection from "./TemplateSelection/index";

import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";

function EditResume() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        if (id !== "undefined") {
          const response = await axios.get(
            `http://localhost:8000/api/v1/resume-builders/${id}`,
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching resume data!", error);
      }
    };

    fetchResume();
  }, [id, access_token]);
  const handleDownload = () => {
    Navigate("/view/${id}");
  };
  return (
    <>
      <DataContext.Provider value={{ data, setData, id, access_token }}>
        <div>
          <div className="flex min-h-screen">
            {/* Form Section */}
            <div id="no-print" className="w-1/2 p-4 overflow-y-auto h-screen">
              <FormSection />
            </div>

            {/* Preview Section */}
            <div id="preview" className="w-1/2 bg-gray-500 ">
              <div id="no-print">
                {/* Header */}
                <div className="flex items-center justify-between bg-gray-200 p-4">
                  <div className="flex items-center">
                    <AiFillAppstore className="text-3xl mr-2" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Chọn Template
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-gray-300 px-3 py-1 mx-2 rounded">
                      A+
                    </button>
                    <button className="bg-gray-300 px-3 py-1 rounded">
                      A-
                    </button>
                    <button
                      onClick={handleDownload}
                      className="bg-green-500 text-white px-4 py-2 ml-4 rounded"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div id="print-area"></div>
              <ResumePreview />
            </div>
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
}

export default EditResume;
