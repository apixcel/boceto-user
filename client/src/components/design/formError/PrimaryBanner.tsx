import { useAppSelector } from "@/redux/hooks";
import DisplayValidation from ".";

const PrimaryBanner = () => {
  const { primaryBannerImg } = useAppSelector((state) => state.frontView);
  const isError = primaryBannerImg.length === 0;
  return (
    <DisplayValidation
      isError={isError}
      message="Select at least one primary banner"
    />
  );
};

export default PrimaryBanner;
