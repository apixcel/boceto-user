import {
  useCreateFronteViewMutation,
  useUpdateFrontViewByMutation,
} from "@/redux/feature/frontView/frontView.api";
import { useAppSelector } from "@/redux/hooks";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";

const SaveDesign = ({ isNewDesign }: { isNewDesign: boolean }) => {
  console.log({ isNewDesign });

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

  const [createDesign, { isLoading: isCreating }] =
    useCreateFronteViewMutation();
  const [updateDesign, { isLoading: isUpdating }] =
    useUpdateFrontViewByMutation();

  const handleSave = async () => {
    if (isCreating || isUpdating) return;

    const payload = {
      background,
      logo,
      primaryBannerImg,
      secondaryBannerImg,
      topButton,
      whatsappStatus,
    };
    try {
      const res = isNewDesign
        ? await createDesign(payload)
        : await updateDesign(payload);

      const error = res.error as any;

      if (error) {
        toast.error(error?.data?.message || "Something went wrong!", {
          description: "Please try again",
        });
        return;
      }

      toast.success(
        isNewDesign
          ? "Design created successfully"
          : "Design updated successfully!"
      );
    } catch (error) {
      toast.error("Something went wrong!", {
        description: "Please try again",
      });
    }
  };

  return (
    <button
      disabled={isError}
      onClick={handleSave}
      className="mx-auto center gap-[5px] w-[125px] h-[40px] rounded-[10px] bg-primary text-[16px] text-white font-[600] tracking-[-0.114px] disabled:opacity-[0.5] disabled:cursor-not-allowed"
    >
      SAVE{" "}
      {isCreating || isUpdating ? <CgSpinner className="animate-spin" /> : ""}
    </button>
  );
};

export default SaveDesign;
