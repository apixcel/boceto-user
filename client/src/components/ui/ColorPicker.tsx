import React from "react";
import { SwatchesPicker } from "react-color";

interface IProps {
  title: string;
  className?: string;
  onChange?: (color: string) => void;
}

const ColorPicker: React.FC<IProps> = ({ title, className, onChange }) => {
  return (
    <div
      className={`bg-white p-[10px] rounded-[10px] center flex-col gap-[15px] ${
        className || ""
      }`}
    >
      <SwatchesPicker
        height={100}
        className="bg-transparent shadow-none"
        onChange={(e) => {
          onChange && onChange(e.hex);
        }}
      />
      <p>{title}</p>
    </div>
  );
};

export default ColorPicker;
