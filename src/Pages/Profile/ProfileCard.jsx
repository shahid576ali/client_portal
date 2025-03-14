import "react";
import { Phone, Mail, MapPin, Calendar, Briefcase, IdCard, Landmark, Map } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="max-w-[95%] h-auto ml-2 flex lg:flex-col flex-row items-start pt-2 bg-white shadow-lg rounded-xl py-2 px-4">
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
      <div className="lg:mt-6 lg:border-t">
        <h3 className="font-semibold">About</h3>
        <p className="text-gray-600 flex items-center gap-2">
          <Phone size={16} stroke="black" /> <strong>Phone:</strong> (629) 555-0123
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Mail size={16} stroke="black" /> <strong>Email:</strong> nicholasswatz@gmail.com
        </p>
      </div>
      <div className="lg:mt-6 lg:border-t ">
        <h3 className="font-semibold">Address</h3>
        <p className="text-gray-600 flex items-center gap-2">
          <MapPin size={16} stroke="black" /> <strong>Address:</strong> 390 Market Street, Suite 200
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Landmark size={16} stroke="black" /> <strong>City/State:</strong> San Francisco, CA
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Map size={16} stroke="black" /> <strong>Postcode:</strong> 94102
        </p>
      </div>
      <div className="lg:mt-6 lg:border-t pt-6">
        <h3 className="font-semibold">Employee details</h3>
        <p className="text-gray-600 flex items-center gap-2">
          <Calendar size={16} stroke="black" /> <strong>Date of Birth:</strong> Sep 26, 1988
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <IdCard size={16} stroke="black" /> <strong>National ID:</strong> GER10654
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Briefcase size={16} stroke="black" /> <strong>Title:</strong> Project Manager
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Calendar size={16} stroke="black" /> <strong>Hire Date:</strong> Jan 05, 2023
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;