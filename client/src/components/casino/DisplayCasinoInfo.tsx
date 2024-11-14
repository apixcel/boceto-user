import { useGetOwnerCasinoInfoQuery } from "@/redux/feature/casino/casino.api";
import { IChildProps } from "@/view/CasinoView";
import { formatDate } from "date-fns";
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import CasinoStatusBadge from "./CasinoStatusBadge";

const DisplayCasinoInfo: React.FC<IChildProps> = ({ setViewMode }) => {
  const { data, isFetching } = useGetOwnerCasinoInfoQuery(undefined);
  if (isFetching) {
    return "loading...";
  }
  console.log(data?.data);

  if (!data?.data) {
    return (
      <button
        onClick={() => setViewMode("create")}
        className="bg-main text-white px-[20px] py-[5px]"
      >
        crear un casino
      </button>
    );
  }

  return (
    <>
      <SectionHeading title="Tu casino" />
      <div className="bg-white w-[50%] p-[15px] mt-[20px]">
        <h4 className="text-[28px] font-[700]">{data?.data?.name}</h4>
        <p className="text-[14px] text-[#383838]">
          {formatDate(
            new Date(data?.data?.createdAt || "1/1/2000"),
            "MMM dd, yyyy"
          )}
        </p>

        <div className="flex flex-col gap-[8px] mt-[15px]">
          <p className="tex-[18px]">
            <span className="font-[600]">Due Date:</span>
            {formatDate(
              new Date(data?.data?.dueDate || "1/1/2000"),
              "MMM dd, yyyy"
            )}
          </p>
          <p className="tex-[18px]">
            <span className="font-[600]">Status: </span>
            <CasinoStatusBadge status={data?.data?.status || "pending"} />
          </p>
        </div>
      </div>
    </>
  );
};

export default DisplayCasinoInfo;
