import React from "react";

const General = ({ data }) => {
  return (
    <div className="flex flex-row bg-white shadow-lg p-6 border border-gray-300">
      {/* Sidebar */}
      <div className="bg-blue-900 text-white p-6 flex flex-col w-full md:w-1/3">
        {/* Avatar và Thông tin cá nhân */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={data.image || "https://via.placeholder.com/150"}
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4 border-4 border-white"
          />
          <h2 className="text-xl font-bold">{data.name || "Họ và Tên"}</h2>
          <p>{data.jobTitle || "Chức danh công việc"}</p>
        </div>

        {/* Contact */}
        {data.personalInformation && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 border-b-2 border-white">
              Liên hệ
            </h3>
            {data.personalInformation.phone && (
              <p>{data.personalInformation.phone}</p>
            )}
            {data.personalInformation.email && (
              <p>{data.personalInformation.email}</p>
            )}
            {data.personalInformation.address && (
              <p>{data.personalInformation.address}</p>
            )}
            {data.personalInformation.website && (
              <p>{data.personalInformation.website}</p>
            )}
          </div>
        )}

        {/* Education */}
        {data.education && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 border-b-2 border-white">
              Học vấn
            </h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <p className="font-bold">{edu.degree}</p>
                <p>{edu.school}</p>
                <p>{edu.year}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 border-b-2 border-white">
              Kỹ năng
            </h3>
            <ul className="list-disc ml-4">
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {data.languages && (
          <div>
            <h3 className="font-bold text-lg mb-3 border-b-2 border-white">
              Ngôn ngữ
            </h3>
            <ul className="list-disc ml-4">
              {data.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Nội dung chính */}
      <div className="bg-white p-6 flex-grow">
        {/* Tên và chức danh */}
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          {data.name || "Họ và Tên"}
        </h1>
        <h2 className="text-xl text-gray-600 mb-6">
          {data.jobTitle || "Chức danh công việc"}
        </h2>

        {/* Profile */}
        {data.profile && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 border-b-2 border-blue-900">
              Thông tin cá nhân
            </h3>
            <p>{data.profile}</p>
          </div>
        )}

        {/* Work Experience */}
        {data.workExperience && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 border-b-2 border-blue-900">
              Kinh nghiệm làm việc
            </h3>
            {data.workExperience.map((exp, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{exp.company}</p>
                <p className="italic text-gray-600">
                  {exp.position} ({exp.start} - {exp.end})
                </p>
                <ul className="list-disc ml-4">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* References */}
        {data.references && (
          <div>
            <h3 className="font-bold text-lg mb-3 border-b-2 border-blue-900">
              Người tham khảo
            </h3>
            {data.references.map((ref, index) => (
              <div key={index} className="mb-3">
                <p className="font-bold">{ref.name}</p>
                <p>{ref.position}</p>
                <p>{ref.phone}</p>
                <p>{ref.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default General;
