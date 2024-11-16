import { useAppSelector } from "@/redux/hooks";
import DisplayValidation from ".";

const ButtonPrimary = () => {
  const { topButton } = useAppSelector((state) => state.frontView);
  const isLinkError = !topButton.link;
  const isTextError = !topButton.text;

  return (
    <>
      <DisplayValidation
        isError={isLinkError}
        message="Select a link for the primary button"
      />
      <DisplayValidation
        isError={isTextError}
        message="Select a text for the primary button"
      />
    </>
  );
};

export default ButtonPrimary;
