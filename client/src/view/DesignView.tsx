import Background from "@/components/design/Background";
import ButtonPrimaryCustomize from "@/components/design/ButtonPrimaryCustomize";
import DesignFormError from "@/components/design/DesignFormError";
import LogoSelector from "@/components/design/LogoSelector";
import PrimaryBannerSelector from "@/components/design/PrimaryBannerSelector";
import SaveDesign from "@/components/design/SaveDesign";
import SecondaryBannerSelector from "@/components/design/SecondaryBannerSelector";
import ToggleWhatsapp from "@/components/design/ToggleWhatsapp";
import SectionHeading from "@/components/ui/SectionHeading";

const DesignView = () => {
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
      <SaveDesign />
    </>
  );
};

export default DesignView;
