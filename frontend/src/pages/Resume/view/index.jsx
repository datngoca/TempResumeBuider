import ResumePreview from "../EditResume/ResumePreview/index";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { DataContext } from "@/context/DataContext";

function ViewResume() {
  const [data, setData] = useState(null); // Sử dụng null thay vì undefined để dễ kiểm tra
  const { id } = useParams();
  const access_token = localStorage.getItem("access_token");

  // Hàm gọi API để lấy thông tin resume
  useEffect(() => {
    if (id && access_token) {
      GetResumeInfo();
    }
  }, [id, access_token]); // Chạy lại khi id hoặc access_token thay đổi

  const GetResumeInfo = async () => {
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

  const HandleDownload = () => {
    window.print();
  };

  if (!data) {
    return (
      <div className="loading-state">
        <p>Loading resume information...</p>
      </div>
    );
  }

  return (
    <DataContext.Provider value={{ data, setData, id, access_token }}>
      <div id="no-print">
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generated Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and share the unique
            resume URL with your friends and family.
          </p>
          <div className="flex justify-between px-44 my-10">
            <button onClick={HandleDownload}>Download</button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume, please open the URL to see it",
                url: `${import.meta.env.VITE_BACKEND_URL}/my-resume/${id}/view`, // Sử dụng id thay vì resumeId
                title: `${data?.personalInformation?.name} resume`,
              }}
              onClick={() => console.log("Shared successfully!")}
            >
              <button>Share</button>
            </RWebShare>
          </div>
        </div>
      </div>

      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview data={data} />{" "}
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default ViewResume;
