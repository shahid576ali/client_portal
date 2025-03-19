// import React from "react";
// import { ClipboardList, BookOpen, CalendarCheck, FileText } from "lucide-react";

// const Dashboard = () => {
//   const cardData = [
//     {
//       title: "Tasks Data",
//       icon: <ClipboardList className="w-8 h-8 text-[#274C77]" />,
//       data: [
//         { label: "Ongoing", value: 2 },
//         { label: "Completed", value: 1 },
//         { label: "Total", value: 3 },
//       ],
//     },
//     {
//       title: "Journal",
//       icon: <BookOpen className="w-8 h-8 text-[#274C77]" />,
//       data: [
//         { label: "Approved", value: 5 },
//         { label: "Disapproved", value: 1 },
//         { label: "Total", value: 6 },
//       ],
//     },
//     {
//       title: "Weekly review",
//       icon: <FileText className="w-8 h-8 text-[#274C77]" />,
//       data: [
//         { label: "Approved", value: 5 },
//         { label: "Disapproved", value: 1 },
//         { label: "Total", value: 6 },
//       ],
//     },
//     {
//       title: "Leaves",
//       icon: <CalendarCheck className="w-8 h-8 text-[#274C77]" />,
//       data: [
//         { label: "Approved", value: 5 },
//         { label: "Disapproved", value: 2 },
//         { label: "Total", value: 7 },
//       ],
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="bg-[#A3CEF1] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out w-64 border border-[#8B8C89] flex flex-col gap-3"
//           >
//             {/* Icon and Title */}
//             <div className="flex items-center gap-3">
//               {card.icon}
//               <h2 className="text-lg font-semibold text-[#274C77]">
//                 {card.title} :-
//               </h2>
//             </div>

//             {/* Data Section */}
//             <div className="space-y-2 bg-white p-4 rounded-xl shadow-md">
//               {card.data.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-between text-sm font-medium text-[#6096BA]"
//                 >
//                   <span>{item.label} :</span>
//                   <span>{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { ClipboardList, BookOpen, CalendarCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const cardData = [
    {
      title: "Tasks Data",
      icon: <ClipboardList className="w-10 h-10 text-[#274C77]" />,
      data: [
        { label: "Ongoing", value: 2 },
        { label: "Completed", value: 1 },
        { label: "Total", value: 3 },
      ],
    },
    {
      title: "Journal",
      icon: <BookOpen className="w-10 h-10 text-[#274C77]" />,
      data: [
        { label: "Approved", value: 5 },
        { label: "Disapproved", value: 1 },
        { label: "Total", value: 6 },
      ],
    },
    {
      title: "Weekly Review",
      icon: <FileText className="w-10 h-10 text-[#274C77]" />,
      data: [
        { label: "Approved", value: 5 },
        { label: "Disapproved", value: 1 },
        { label: "Total", value: 6 },
      ],
    },
    {
      title: "Leaves",
      icon: <CalendarCheck className="w-10 h-10 text-[#274C77]" />,
      data: [
        { label: "Approved", value: 5 },
        { label: "Disapproved", value: 2 },
        { label: "Total", value: 7 },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-2xl p-6 rounded-3xl w-72 border border-[#8B8C89] flex flex-col gap-4 backdrop-blur-lg transition-all duration-300"
          >
            {/* Icon & Title Section */}
            <div className="flex items-center gap-4">
              {card.icon}
              <h2 className="text-lg font-bold text-[#274C77]">{card.title}</h2>
            </div>

            {/* Data Section */}
            <div className="space-y-2 bg-[#E7ECEF] p-4 rounded-xl shadow-inner border border-gray-300">
              {card.data.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between text-sm font-medium text-[#274C77]"
                >
                  <span>{item.label} :</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
