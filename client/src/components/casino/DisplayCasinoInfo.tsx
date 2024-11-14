import { useGetOwnerCasinoInfoQuery } from "@/redux/feature/casino/casino.api";

const DisplayCasinoInfo = () => {
  const { data } = useGetOwnerCasinoInfoQuery(undefined);

  return <></>;
};

export default DisplayCasinoInfo;
