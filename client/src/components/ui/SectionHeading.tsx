import React from "react";

interface IProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<IProps> = ({ title, className }) => {
  return (
    <div
      className={`pb-[27px] border-b-[1px] border-[#BBB] ${className || ""}`}
    >
      <h2 className="text-primatyTxt font-[700] tracking-[-0.114px] text-[32px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
