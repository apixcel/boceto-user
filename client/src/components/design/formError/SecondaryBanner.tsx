import { useAppSelector } from "@/redux/hooks";
import DisplayValidation from ".";

const SecondaryBanner = () => {
  const { secondaryBannerImg } = useAppSelector((state) => state.frontView);
  const isError = secondaryBannerImg.length === 0;
  return (
    <DisplayValidation
      isError={isError}
      message="Select at least one secondary banner"
    />
  );
};

export default SecondaryBanner;
