import { useState } from "react";

interface IProps {
  className?: string;
  onChange?: (value: boolean) => void;
  defaultValue?: boolean;
}

const Toggle: React.FC<IProps> = ({ className, onChange, defaultValue }) => {
  const [active, setActive] = useState(Boolean(defaultValue));

  return (
    <div
      onClick={() => {
        setActive(!active);
        onChange && onChange(!active);
      }}
      className={`w-[69px] h-[31.5px] rounded-full flex items-center relative p-[3.45px] cursor-pointer ${
        active ? "bg-[#76EE59]" : "bg-slate-200"
      } ${className || ""} `}
      style={{
        boxShadow: "0px 2.07px 2.76px 1.035px rgba(0, 0, 0, 0.10) inset",
      }}
    >
      <span
        className={`w-[24px] h-[24px] rounded-full bg-white absolute duration-[0.3s] ${
          active ? "left-[calc(100%-24px-3.45px)]" : "left-[3.45px]"
        }`}
        style={{
          boxShadow: "0px 2.07px 2.76px 1.035px rgba(0, 0, 0, 0.10) inset",
        }}
      />
    </div>
  );
};

export default Toggle;
