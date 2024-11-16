import { useAppSelector } from "@/redux/hooks";
import DisplayValidation from ".";
const Logo = () => {
  const { logo } = useAppSelector((state) => state.frontView);

  const isError = !logo;

  return <DisplayValidation isError={isError} message="Select a logo" />;
};

export default Logo;
