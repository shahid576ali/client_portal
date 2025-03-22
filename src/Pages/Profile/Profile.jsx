
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