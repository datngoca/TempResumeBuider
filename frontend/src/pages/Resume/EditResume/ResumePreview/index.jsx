// import React, { useContext } from "react";
// import "../../../../styles/client.module.scss";

// import { DataContext } from "../../../../context/DataContext";
// import { AiFillAppstore } from "react-icons/ai";
// import Skill_Base from "./Templates/Skill_Based";
// const ResumePreview = () => {
//   const { data } = useContext(DataContext);
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="w-[60%] h-[88vh] bg-white shadow-lg p-3">
//         <div>
//           <Skill_Base data={data} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumePreview;
import React, { useContext, useState } from "react";
import { DataContext } from "../../../../context/DataContext";
import General from "./Templates/General";
import { AiFillAppstore } from "react-icons/ai";

const ResumePreview = () => {
  const { data } = useContext(DataContext);
  const [pageIndex, setPageIndex] = useState(0);
  const templates = [<General data={data} />];
  const totalPages = templates.length;

  return <div className="h-full w-full">{templates[pageIndex]}</div>;
};

export default ResumePreview;
