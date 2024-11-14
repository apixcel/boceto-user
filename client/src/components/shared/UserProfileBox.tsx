import CircleDownIcon from "../icons/CircleDownIcon";
import NotificationBellIcon from "../icons/NotificationBellIcon";

const UserProfileBox = () => {
  return (
    <div className="h-full w-fit bg-primary flex items-center justify-center gap-[25px] lg:gap-[45px] p-[10px] sm:py-[18px] sm:px-[33px]">
      <NotificationBellIcon />
      <div className="flex gap-[10px] lg:gap-[22px] ">
        <div className="bg-white w-[48px] h-[48px] rounded-full center p-[2px]">
          <img
            src="/images/user.png"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="center gap-[8px]">
          <div className="flex flex-col gap-[5px]">
            <p className="text-white text-[14px] font-[700]">Usuario</p>
            <p className="text-white text-[12px] font-[700]">Admin</p>
          </div>
          <CircleDownIcon />
        </div>
      </div>
    </div>
  );
};

export default UserProfileBox;
