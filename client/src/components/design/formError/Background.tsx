import { useAppSelector } from "@/redux/hooks";
import DisplayValidation from ".";

const Background = () => {
  const { type, color, image } = useAppSelector(
    (state) => state.frontView.background
  );

  const isError = type === "image" ? !image : !color;

  return (
    <DisplayValidation
      isError={isError}
      message={
        type === "image"
          ? "Select a background image"
          : "Select a background color"
      }
    />
  );
};

export default Background;
