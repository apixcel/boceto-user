import BankIcon from "@/components/icons/BankIcon";
import BillingIcon from "@/components/icons/BillingIcon";
import DesignPenIcon from "@/components/icons/DesignPenIcon";
import { RiLoopRightFill } from "react-icons/ri";

export const sidebarLinks = [
  {
    href: "/",
    lable: "Casino",
    Icon: DesignPenIcon,
  },
  {
    href: "/design",
    lable: "Diseño",
    Icon: DesignPenIcon,
  },
  {
    href: "/bank-account",
    lable: "Bank Account",
    Icon: BankIcon,
  },
  {
    href: "/retiros",
    lable: "Retiros",
    Icon: RiLoopRightFill,
  },
  {
    href: "/billing",
    lable: "Billing",
    Icon: BillingIcon,
  },
];
