import ChatWindow from "@/components/design/ChatWindow";
import DashboardHeader from "@/components/shared/DashboardHeader";
import Sidebar from "@/components/shared/Sidebar";
import { useGetAuthorQuery } from "@/redux/feature/auth/auth.api";
import { setUser } from "@/redux/feature/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import Loader from "@/utils/Loader";
import React, { SetStateAction, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
export interface ISideBarState {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { data, isLoading, isError } = useGetAuthorQuery(undefined);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loader className="!h-[100vh]" />;
  }
  if (isError || !data) {
    return <Navigate to="/login" replace />;
  }
  dispatch(setUser(data.data));

  if (data.data.role !== "user") {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full h-full flex flex-col">
        <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full h-[calc(100%-67px)] overflow-auto smoothBar bg-secondary py-[27px] px-[45px]">
          <Outlet />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
