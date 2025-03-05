// <div
//   key={index}
//   className="p-5 rounded-xl shadow-lg text-white flex flex-col items-center"
//   style={{ backgroundColor: "#274C77" }} // Dark Blue from the palette
// >

// import { BarChart, NotebookText, CalendarCheck } from "lucide-react";

// const stats = [
//   {
//     value: "24",
//     label: "Weekly Report",
//     icon: <BarChart className="w-8 h-8" />,
//     color: "#6096BA", // Muted Blue
//   },
//   {
//     value: "7",
//     label: "Daily Journal",
//     icon: <NotebookText className="w-8 h-8" />,
//     color: "#A3CEF1", // Light Blue
//   },
//   {
//     value: "12",
//     label: "Leaves",
//     icon: <CalendarCheck className="w-8 h-8" />,
//     color: "#8B8C89", // Gray
//   },
// ];

// const StatCards = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className="p-5 rounded-xl shadow-lg text-white flex flex-col items-center"
//           style={{ backgroundColor: stat.color }}
//         >
//           <div className="mb-2">{stat.icon}</div>
//           <div className="text-lg font-medium">{stat.label}</div>
//           <div className="text-3xl font-bold">{stat.value}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatCards;

// import { BarChart, NotebookText, CalendarCheck } from "lucide-react";

// const stats = [
//   {
//     value: "24",
//     label: "Weekly Report",
//     icon: <BarChart className="w-8 h-8" />,
//     color: "#D6EAF8", // Light Sky Blue
//   },
//   {
//     value: "7",
//     label: "Daily Journal",
//     icon: <NotebookText className="w-8 h-8" />,
//     color: "#FAD7A0", // Light Orange
//   },
//   {
//     value: "12",
//     label: "Leaves",
//     icon: <CalendarCheck className="w-8 h-8" />,
//     color: "#D5F5E3", // Light Green
//   },
// ];

// const StatCards = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className="p-5 rounded-xl shadow-lg text-gray-800 flex flex-col items-center"
//           style={{ backgroundColor: stat.color }}
//         >
//           <div className="mb-2">{stat.icon}</div>
//           <div className="text-lg font-medium">{stat.label}</div>
//           <div className="text-3xl font-bold">{stat.value}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatCards;

import { BarChart, NotebookText, CalendarCheck } from "lucide-react";

const stats = [
  {
    value: "24",
    label: "Weekly Report",
    icon: <BarChart className="w-8 h-8 text-[#274C77]" />,
    gradient: "bg-gradient-to-r from-[#D5F5E3] to-[#A3CEF1]",
    shadow: "shadow-md shadow-blue-200",
  },
  {
    value: "7",
    label: "Daily Journal",
    icon: <NotebookText className="w-8 h-8 text-[#274C77]" />,
    gradient: "bg-gradient-to-r from-[#A3CEF1] to-[#D5F5E3]",
    shadow: "shadow-md shadow-blue-300",
  },
  {
    value: "12",
    label: "Leaves",
    icon: <CalendarCheck className="w-8 h-8 text-[#274C77]" />,
    gradient: "bg-gradient-to-r from-[#D5F5E3] to-[#A3CEF1]",
    shadow: "shadow-md shadow-gray-400",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl text-gray-900 flex flex-col items-center ${stat.gradient} ${stat.shadow} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          style={{
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="mb-3">{stat.icon}</div>
          <div className="text-lg font-semibold">{stat.label}</div>
          <div className="text-4xl font-bold">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
