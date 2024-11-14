import { useGetOwnerCasinoInfoQuery } from "@/redux/feature/casino/casino.api";
import { ICasaino } from "@/types/casino";
import Loader from "@/utils/Loader";
import { IChildProps } from "@/view/CasinoView";
import { formatDate } from "date-fns";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import SectionHeading from "../ui/SectionHeading";
import CasinoStatusBadge from "./CasinoStatusBadge";

interface IProps extends IChildProps {
  setSelectedCasino: React.Dispatch<React.SetStateAction<ICasaino | null>>;
}

const DisplayCasinoInfo: React.FC<IProps> = ({
  setViewMode,
  setSelectedCasino,
}) => {
  const { data, isFetching } = useGetOwnerCasinoInfoQuery(undefined);

  if (isFetching) {
    return <Loader />;
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

  const handleEditCasino = () => {
    setViewMode("edit");
    setSelectedCasino(data?.data);
  };

  return (
    <>
      <SectionHeading title="Tu casino" />
      <div className="bg-white min-w-[50%] p-[15px] mt-[20px] rounded-[10px]">
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

        <div className="flex items-start gap-[20px] mt-[25px]">
          <button className="text-[22px] text-red-500">
            <FaRegTrashAlt />
          </button>
          <button
            className="text-[22px] text-main"
            onClick={() => handleEditCasino()}
          >
            <MdOutlineModeEditOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayCasinoInfo;
