import SearchBar from "./SearchBar";
import UserProfileBox from "./UserProfileBox";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
const DashboardHeader: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[67px] w-full flex justify-between items-center pl-[48px] gap-[30px]">
      <img
        src="/images/menu.png"
        className="cursor-pointer menuBTn"
        onClick={handleToggle}
      />
      <SearchBar />
      <UserProfileBox />
    </div>
  );
};

export default DashboardHeader;
