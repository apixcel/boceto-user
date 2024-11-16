import { useAppSelector } from "@/redux/hooks";

const SaveDesign = () => {
  const {
    background,
    logo,
    primaryBannerImg,
    secondaryBannerImg,
    topButton,
    whatsappStatus,
  } = useAppSelector((state) => state.frontView);
  const isError =
    !logo ||
    !primaryBannerImg.length ||
    !secondaryBannerImg.length ||
    !topButton.text ||
    !topButton.link ||
    !topButton.color ||
    background.type === "image"
      ? !background.image
      : !background.color;
  return (
    <button
      disabled={isError}
      className="mx-auto center w-[125px] h-[40px] rounded-[10px] bg-primary text-[16px] text-white font-[600] tracking-[-0.114px] disabled:opacity-[0.5] disabled:cursor-not-allowed"
    >
      SAVE
    </button>
  );
};

export default SaveDesign;
