import { sidebarLinks } from "@/mock/sidebar";
import { useLogoutUserMutation } from "@/redux/feature/auth/auth.api";
import { logout } from "@/redux/feature/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { CiPower } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Sidebar: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      const response = await logoutUser(undefined)
      
      if (response.data && response.data.success) {
        dispatch(logout());
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // event target
      const target = event.target as HTMLElement;
      // screent width
      const screen = window.screen.width;

      // ---**** return if the screen width is larger
      if (screen > 1024) {
        return;
      }

      // return if the user click on the sidebar or the navbar
      if (target.closest(".sidebar") || target.closest(".menuBTn")) {
        return;
      }

      setIsOpen(false);
    };

    // hide sidebar on clicking outside
    if (isOpen) {
      document.body.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`fixed lg:relative z-30 bg-white left-0 top-0 h-full shrink-0 py-[19px]  border-r-[1px] border-borderColor flex flex-col justify-between sidebar duration-[0.3s] overflow-hidden ${
        isOpen ? "w-[250px]" : "w-0"
      }`}
    >
      <div className="flex flex-col items-center gap-[29px]">
        <img src="/images/logo.png" className="w-[100px] mx-auto" />
        <div className="w-full">
          {sidebarLinks.map(({ Icon, href, lable }, i) => (
            <div
              className={`w-full barLinks center relative ${
                pathname === href ? "active" : ""
              }`}
              key={i + "sidlinks"}
            >
              <Link
                to={href}
                className="flex items-center justify-start gap-[19.5px] w-[80%] py-[16px] px-[20px] rounded-[10px]"
              >
                <Icon className="fill-current" /> {lable}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full pb-[11px] pt-[16px] border-t-[1px] border-[#E0E0E0] flex flex-col">
        <div className="pl-[42px]">
          <button className="flex items-center gap-[17px] py-[16px]">
            <FiSettings />
            Ajustes
          </button>
          <button onClick={handleLogout} className="flex items-center gap-[17px] py-[16px]">
            <CiPower />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
