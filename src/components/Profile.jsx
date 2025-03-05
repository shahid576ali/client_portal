import "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm ml-0 bg-white shadow-lg rounded-xl p-6 h-screen">
      
      <div className="flex items-center space-x-4">
        <img
          src="https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">Nicholas Swatz</h2>
          <p className="text-gray-500">#ERD246534</p>
        </div>
      </div>
      <div className="mt-6 border-t pt-6">
        <h3 className="font-semibold">About</h3>
        <p className="text-gray-600"><strong>📞 Phone:</strong> (629) 555-0123</p>
        <p className="text-gray-600"><strong>📧 Email:</strong> nicholasswatz@gmail.com</p>
      </div>
      <div className="mt-6 border-t pt-6">
        <h3 className="font-semibold">Address</h3>
        <p className="text-gray-600"><strong>🏠 Address:</strong> 390 Market Street, Suite 200</p>
        <p className="text-gray-600"><strong>🏙 City/State:</strong> San Francisco, CA</p>
        <p className="text-gray-600"><strong>📍 Postcode:</strong> 94102</p>
      </div>
      <div className="mt-6 border-t pt-6">
        <h3 className="font-semibold">Employee details</h3>
        <p className="text-gray-600"><strong>📅 Date of Birth:</strong> Sep 26, 1988</p>
        <p className="text-gray-600"><strong>🆔 National ID:</strong> GER10654</p>
        <p className="text-gray-600"><strong>💼 Title:</strong> Project Manager</p>
        <p className="text-gray-600"><strong>📅 Hire Date:</strong> Jan 05, 2023</p>
      </div>
    </div>
  );
};

export default ProfileCard;
