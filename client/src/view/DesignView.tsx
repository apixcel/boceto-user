import Background from "@/components/design/Background";
import ButtonPrimaryCustomize from "@/components/design/ButtonPrimaryCustomize";
import DesignFormError from "@/components/design/DesignFormError";
import LogoSelector from "@/components/design/LogoSelector";
import PrimaryBannerSelector from "@/components/design/PrimaryBannerSelector";
import SecondaryBannerSelector from "@/components/design/SecondaryBannerSelector";
import ToggleWhatsapp from "@/components/design/ToggleWhatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import { IFrontView } from "@/types/frontview";
import { useState } from "react";

const DesignView = () => {
  const [formData, setFormData] = useState<IFrontView | null>(null);
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
      <button className="mx-auto center w-[125px] h-[40px] rounded-[10px] bg-primary text-[16px] text-white font-[600] tracking-[-0.114px]">
        SAVE
      </button>
    </>
  );
};

export default DesignView;
