import "react";

const Task = () => {
  const profile = [
    {
      id: '16442',
      name: 'Uzma Hassan',
      email: 'uzmahassan202@gmail.com',
      phone: '8491962122',
      registeredUsers: 'Registered Users',
      progressive: 'Progressive',
      signedUp: 'Signed Up',
      notes: 'NA',
      tasks: 'NA',
    },
    {
      id: '16441',
      name: 'Sharath Gajula',
      email: '23955a0523@iare.ac.in',
      phone: '7816032830',
      registeredUsers: 'Registered Users',
      progressive: 'Progressive',
      signedUp: 'Signed Up',
      notes: 'NA',
      tasks: 'NA',
    },
    {
      id: '16440',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '9876543210',
      registeredUsers: 'Registered Users',
      progressive: 'Progressive',
      signedUp: 'Signed Up',
      notes: 'NA',
      tasks: 'NA',
    },
    {
      id: '16439',
      name: 'Bob Williams',
      email: 'bob.williams@example.com',
      phone: '1234567890',
      registeredUsers: 'Registered Users',
      progressive: 'Progressive',
      signedUp: 'Signed Up',
      notes: 'NA',
      tasks: 'NA',
    },
  ];

  const activities = [
    {
      name: 'John Miller',
      action: 'last login on',
      date: 'Jul 13, 2024',
      time: '05:36 PM',
      imageUrl: 'https://via.placeholder.com/40/007bff/FFFFFF?text=JM',
    },
    {
      name: 'Merva Sahin',
      action: 'date created on',
      date: 'Sep 08, 2024',
      time: '03:12 PM',
      imageUrl: 'https://via.placeholder.com/40/ffc107/FFFFFF?text=MS',
    },
    {
      name: 'Tammy Collier',
      action: 'updated on',
      date: 'Aug 15, 2023',
      time: '05:36 PM',
      imageUrl: 'https://via.placeholder.com/40/28a745/FFFFFF?text=TC',
    },
  ];

  return (
    <div className="flex flex-col shadow-lg items-center p-2 max-w-full rounded-[8px]">
      <div className="flex justify-between w-full items-center mb-4">
        <h2 className="text-lg font-bold">User Table</h2>
        <button className="bg-[#274C77] hover:bg-[#253446] cursor-pointer text-white px-4 py-2 rounded-lg">Add Task</button>
      </div>
      <table className="border-collapse max-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            {['ID', 'Name', 'Email', 'Phone', 'RegisteredUsers', 'Progressive', 'SignedUp', 'Notes', 'Tasks'].map((header) => (
              <th key={header} className="border border-gray-300 text-[14px] p-2 text-center w-auto">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {profile.map((user) => (
            <tr key={user.id} className="text-[12px] text-gray-600 even:bg-[#E7ECEF]">
              <td className="border border-gray-300 p-2">{user.id}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.phone}</td>
              <td className="border border-gray-300 p-2">{user.registeredUsers}</td>
              <td className="border border-gray-300 p-2">{user.progressive}</td>
              <td className="border border-gray-300 p-2">{user.signedUp}</td>
              <td className="border border-gray-300 p-2">{user.notes}</td>
              <td className="border border-gray-300 p-2">{user.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Activity Section */}
      <div className="bg-white rounded-xl mt-2 p-5 w-full">
        <h2 className="text-lg font-semibold mb-4">Activity</h2>
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center mb-3">
            <img
              src={activity.imageUrl}
              alt={`${activity.name} profile`}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="font-bold text-gray-700">{activity.name} {activity.action} {activity.date}</div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          </div>
        ))}
        <div className="text-left mt-4 text-blue-500 cursor-pointer">View all</div>
      </div>
    </div>
  );
};

export default Task;