import "react";

const ActivityList = () => {
  const activities = [
    {
      name: "John Miller",
      action: "last login",
      date: "Jul 13, 2024",
      time: "05:36 PM",
      avatar: "https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png",
    },
    {
      name: "Merva Sahin",
      action: "date created",
      date: "Sep 08, 2024",
      time: "03:12 PM",
      avatar: "https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png",
    },
    {
      name: "Tammy Collier",
      action: "updated",
      date: "Aug 15, 2023",
      time: "05:36 PM",
      avatar: "https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 border-b pb-3 last:border-b-0"
          >
            <img
              src={activity.avatar}
              alt={activity.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm">
                <span className="font-semibold">{activity.name}</span> {activity.action} on <span className="text-gray-500">{activity.date}</span>
              </p>
              <p className="text-gray-500 text-xs">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-red-500 text-sm font-medium mt-4 cursor-pointer">View all</p>
    </div>
  );
};

export default ActivityList;