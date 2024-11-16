import Background from "./formError/Background";
import ButtonPrimary from "./formError/ButtonPrimary";
import Logo from "./formError/Logo";
import PrimaryBanner from "./formError/PrimaryBanner";
import SecondaryBanner from "./formError/SecondaryBanner";

export const okClass =
  "flex items-center gap-[5px] text-green-500 text-[18px] font-[700]";
export const errorClass =
  "flex items-center gap-[5px] text-red-500 text-[18px] font-[700]";
const DesignFormError = () => {
  return (
    <>
      <p className="text-[25px] font-[600]">Form validations</p>
      <Logo />
      <PrimaryBanner />
      <SecondaryBanner />
      <ButtonPrimary />
      <Background />
    </>
  );
};

export default DesignFormError;
