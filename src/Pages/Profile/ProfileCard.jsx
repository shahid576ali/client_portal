import "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  IdCard,
  Landmark,
  Map,
  Globe,
  UserCheck,
  Building,
  Users,
} from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="w-full lg:w-[350px] h-auto mx-auto flex flex-col items-center bg-white shadow-lg rounded-xl p-4 sm:p-7 mt-4 sm:mt-0">
      
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6 w-full">
        <img
          src="https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png"
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-gray-300"
        />
        <div className="text-center sm:text-left w-full">
          <h2 className="text-xl sm:text-2xl font-bold">Nicholas Swatz</h2>
          <p className="text-gray-500 text-base sm:text-lg">#ERD246534</p>
        </div>
      </div>

      
      <div className="w-full mt-6 border-t pt-4 sm:pt-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">About</h3>
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Phone size={16} stroke="black" /> (629) 555-0123
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Mail size={16} stroke="black" /> nicholasswatz@gmail.com
          </p>
        </div>
      </div>

      
      <div className="w-full mt-6 border-t pt-4 sm:pt-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">Address</h3>
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <MapPin size={16} stroke="black" /> 390 Market Street, A200
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Landmark size={16} stroke="black" /> San Francisco, CA
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Map size={16} stroke="black" /> 94102
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Globe size={16} stroke="black" /> USA
          </p>
        </div>
      </div>

   
      <div className="w-full mt-6 border-t pt-4 sm:pt-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">Employee Details</h3>
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Calendar size={16} stroke="black" /> <strong>DOB:</strong> Sep 26, 1988
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <IdCard size={16} stroke="black" /> <strong>ID:</strong> GER10654
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Briefcase size={16} stroke="black" /> <strong>Title:</strong> Project Manager
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Calendar size={16} stroke="black" /> <strong>Hire Date:</strong> Jan 05, 2023
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Building size={16} stroke="black" /> <strong>Department:</strong> Development
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Users size={16} stroke="black" /> <strong>Team:</strong> Echo
          </p>
        </div>
      </div>

   
      <div className="w-full mt-6 border-t pt-4 sm:pt-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">Additional Information</h3>
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <UserCheck size={16} stroke="black" /> <strong>Status:</strong> Active Employee
          </p>
          <p className="text-gray-600 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Globe size={16} stroke="black" /> <strong>Location:</strong> Remote
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
