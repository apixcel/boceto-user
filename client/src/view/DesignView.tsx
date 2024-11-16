import Background from "@/components/design/Background";
import ButtonPrimaryCustomize from "@/components/design/ButtonPrimaryCustomize";
import DesignFormError from "@/components/design/DesignFormError";
import LogoSelector from "@/components/design/LogoSelector";
import PrimaryBannerSelector from "@/components/design/PrimaryBannerSelector";
import SaveDesign from "@/components/design/SaveDesign";
import SecondaryBannerSelector from "@/components/design/SecondaryBannerSelector";
import ToggleWhatsapp from "@/components/design/ToggleWhatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import { useGetFrontViewByOwnerQuery } from "@/redux/feature/frontView/frontView.api";
import { setFrontViewValue } from "@/redux/feature/frontView/frontView.slice";
import { useAppDispatch } from "@/redux/hooks";
import Loader from "@/utils/Loader";
import { useEffect } from "react";

const DesignView = () => {
  const { data, isLoading } = useGetFrontViewByOwnerQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFrontViewValue(data?.data || {}));
  }, [data, dispatch]);
  if (isLoading) {
    return <Loader className="!h-[100vh]" />;
  }
  return (
    <>
      <SectionHeading title="Diseño" />
      <LogoSelector />
      <PrimaryBannerSelector />
      <SecondaryBannerSelector />
      <ButtonPrimaryCustomize />
      <Background />
      <ToggleWhatsapp />

      <DesignFormError />
      <SaveDesign isNewDesign={!data?.data} />
    </>
  );
};

export default DesignView;
