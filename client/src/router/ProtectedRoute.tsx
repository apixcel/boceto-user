import { useGetAuthorQuery } from "@/redux/feature/auth/auth.api";
import { setUser } from "@/redux/feature/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { Loader } from "lucide-react";
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data, isLoading, isError } = useGetAuthorQuery(undefined);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loader className="!h-[100vh]" />;
  }

  if (isError || !data) {
    return <Navigate to="/login" replace />;
  }

  dispatch(setUser(data.data));

  if (data.data.role === "user") {
    return <>{children}</>;
  }
//   if (data.data.role === "USER") {
//     return <Navigate to="/unauthorized" replace />;
//   }

  return null;
};

export default ProtectedRoute;
