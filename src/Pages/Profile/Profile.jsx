// import React from "react"; // Import React 

// const ProfileCard = () => {
//   const profile = [
//     {
//       id: '16442',
//       name: 'Uzma Hassan',
//       email: 'uzmahassan202@gmail.com',
//       phone: '8491962122',
//       registeredUsers: 'Registered Users',
//       progressive: 'Progressive',
//       signedUp: 'Signed Up',
//       notes: 'NA',
//       tasks: 'NA',
//     },
//     {
//       id: '16441',
//       name: 'Sharath Gajula',
//       email: '23955a0523@iare.ac.in',
//       phone: '7816032830',
//       registeredUsers: 'Registered Users',
//       progressive: 'Progressive',
//       signedUp: 'Signed Up',
//       notes: 'NA',
//       tasks: 'NA',
//     },
//   ];

//   const activities = [
//     {
//       name: 'John Miller',
//       action: 'last login on',
//       date: 'Jul 13, 2024',
//       time: '05:36 PM',
//       imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid', // Replace with actual image URL
//     },
//     {
//       name: 'Merva Sahin',
//       action: 'date created on',
//       date: 'Sep 08, 2024',
//       time: '03:12 PM',
//       imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid', // Replace with actual image URL
//     },
//     {
//       name: 'Tammy Collier',
//       action: 'updated on',
//       date: 'Aug 15, 2023',
//       time: '05:36 PM',
//       imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid', // Replace with actual image URL
//     },
//   ]; 

//   return (
//     <div className="flex"> {/* Main container with flex */}

//       <div className="max-w-sm ml-0 bg-white shadow-lg rounded-xl p-6 h-screen"> 
//         {/* Profile Card Section */}
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png"
//             alt="Profile"
//             className="w-20 h-20 rounded-full object-cover"
//           />
//           <div>
//             <h2 className="text-xl font-bold">Nicholas Swatz</h2>
//             <p className="text-gray-500">#ERD246534</p>
//           </div>
//         </div>
//         <div className="mt-6 border-t pt-6">
//           <h3 className="font-semibold">About</h3>
//           <p className="text-gray-600"><strong>📞 Phone:</strong> (629) 555-0123</p>
//           <p className="text-gray-600"><strong>📧 Email:</strong> nicholasswatz@gmail.com</p>
//         </div>
//         <div className="mt-6 border-t pt-6">
//           <h3 className="font-semibold">Address</h3>
//           <p className="text-gray-600"><strong>🏠 Address:</strong> 390 Market Street, Suite 200</p>
//           <p className="text-gray-600"><strong>🏙 City/State:</strong> San Francisco, CA</p>
//           <p className="text-gray-600"><strong>📍 Postcode:</strong> 94102</p>
//         </div>
//         <div className="mt-6 border-t pt-6">
//           <h3 className="font-semibold">Employee details</h3>
//           <p className="text-gray-600"><strong>📅 Date of Birth:</strong> Sep 26, 1988</p>
//           <p className="text-gray-600"><strong>🆔 National ID:</strong> GER10654</p>
//           <p className="text-gray-600"><strong>💼 Title:</strong> Project Manager</p>
//           <p className="text-gray-600"><strong>📅 Hire Date:</strong> Jan 05, 2023</p>
//         </div>
//       </div> 

//       {/* User Table Section */}
//       <div className="flex flex-col m-5">
//         <h2 className="text-lg mb-4 font-bold">User Table</h2>
//         <table className="border-collapse w-[600px] bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100  text-gray-800">
//               {['ID', 'Name', 'Email', 'Phone', 'Registered Users', 'Progressive', 'Signed Up', 'Notes', 'Tasks'].map((header) => (
//                 <th key={header} className="border border-gray-300 p-2 text-left">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {profile.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50 text-gray-600">
//                 <td className="border border-gray-300 p-2">{user.id}</td>
//                 <td className="border border-gray-300 p-2">{user.name}</td>
//                 <td className="border border-gray-300 p-2">{user.email}</td>
//                 <td className="border border-gray-300 p-2">{user.phone}</td>
//                 <td className="border border-gray-300 p-2">{user.registeredUsers}</td>
//                 <td className="border border-gray-300 p-2">{user.progressive}</td>
//                 <td className="border border-gray-300 p-2">{user.signedUp}</td>
//                 <td className="border border-gray-300 p-2">{user.notes}</td>
//                 <td className="border border-gray-300 p-2">{user.tasks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//          {/* Activity Section */}
      

//         <div className=" bg-white shadow-lg rounded-xl mt-5 p-5">
//         <h2 className="text-lg font-semibold mb-4">Activity</h2>
//         {activities.map((activity, index) => (
//           <div key={index} className="flex items-center mb-3">
//             <img
//               src={activity.imageUrl}
//               alt={`${activity.name} profile`}
//               className="w-10 h-10 rounded-full mr-3"
//             />
//             <div>
//               <div className="font-bold text-gray-700">{activity.name} {activity.action} {activity.date}</div>
//               <div className="text-sm text-gray-500">{activity.time}</div>
//             </div>
//           </div>
//         ))}
//         <div className="text-left mt-4 text-blue-500 cursor-pointer">View all</div>
//       </div>
//       </div>

     

//     </div> // Closing tag for the main container
//   );
// };

// export default ProfileCard;



import "react";
import ProfileCard from "./ProfileCard";

import Task from "./Task";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start justify-around h-screen w-full gap-1 py-4 px-0">
      
      <ProfileCard />
      <Task/>
      
    </div>
  );
};

export default ProfilePage;