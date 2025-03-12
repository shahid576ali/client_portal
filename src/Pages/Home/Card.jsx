import { BarChart, NotebookText, CalendarCheck } from "lucide-react";

const stats = [
  {
    value: "24",
    label: "Weekly Report",
    icon: <BarChart className="w-8 h-8" />,
    color: "#6096BA", // Muted Blue
  },
  {
    value: "7",
    label: "Daily Journal",
    icon: <NotebookText className="w-8 h-8" />,
    color: "#6096BA", // A3CEF1
  },
  {
    value: "12",
    label: "Leaves",
    icon: <CalendarCheck className="w-8 h-8" />,
    color: "#6096BA", // 8B8C89
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-5 rounded-xl shadow-lg text-white flex flex-col items-center"
          style={{ backgroundColor: stat.color }}
        >
          <div className="mb-2">{stat.icon}</div>
          <div className="text-lg font-medium">{stat.label}</div>
          <div className="text-3xl font-bold">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
