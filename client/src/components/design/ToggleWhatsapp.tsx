import { setFrontViewValue } from "@/redux/feature/frontView/frontView.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Toggle from "../ui/Toggle";

const ToggleWhatsapp = () => {
  const dispatch = useAppDispatch();
  const { whatsappStatus } = useAppSelector((state) => state.frontView);
  return (
    <div className="flex items-center gap-[50px] pt-[16px] pb-[110px]">
      <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
        Whatsapp
      </h3>
      <Toggle
        defaultValue={whatsappStatus}
        onChange={(value) =>
          dispatch(setFrontViewValue({ whatsappStatus: value }))
        }
      />
    </div>
  );
};

export default ToggleWhatsapp;
