import DashboardLayout from "@/layouts/DashboardLayout";
import BankAccount from "@/pages/BankAccount";
import Billing from "@/pages/Billing";
import Casino from "@/pages/Casino";
import Design from "@/pages/Design";
import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/Register";
import Retiros from "@/pages/Retiros";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <Casino />,
      },
      {
        index: true,
        path: "design",
        element: <Design />,
      },
      {
        index: true,
        path: "bank-account",
        element: <BankAccount />,
      },
      {
        index: true,
        path: "retiros",
        element: <Retiros />,
      },
      {
        index: true,
        path: "billing",
        element: <Billing />,
      },
    ],
  },
  {
    index: true,
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    index: true,
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
