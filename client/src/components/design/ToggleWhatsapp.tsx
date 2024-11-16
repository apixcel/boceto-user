import Toggle from "../ui/Toggle";

const ToggleWhatsapp = ({ whatsappStatus }: { whatsappStatus: boolean }) => {
  return (
    <div className="flex items-center gap-[50px] pt-[16px] pb-[110px]">
      <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
        Whatsapp
      </h3>
      <Toggle defaultValue={whatsappStatus} />
    </div>
  );
};

export default ToggleWhatsapp;
