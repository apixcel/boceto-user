import { useAppSelector } from "@/redux/hooks";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { errorClass, okClass } from "../DesignFormError";

const PrimaryBanner = () => {
  const { primaryBannerImg } = useAppSelector((state) => state.frontView);
  const isError = primaryBannerImg.length === 0;
  return (
    <p className={isError ? errorClass : okClass}>
      {isError ? <RxCross2 /> : <MdDone />} Select a logo
    </p>
  );
};

export default PrimaryBanner;
