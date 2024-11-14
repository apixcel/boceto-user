import { useState } from "react";
import CheckBox from "../ui/CheckBox";
import ColorPicker from "../ui/ColorPicker";
import ImageUploader from "../ui/ImageUploader";

const Background = () => {
  const [, setFiles] = useState<File[]>([]);
  return (
    <div className="w-full justify-start items-start flex-col flex gap-[16px] pt-[26px] pb-[57px] border-b-[1px] border-[#BBBBBB]">
      <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
        Background
      </h3>{" "}
      <div className="flex gap-[15px] flex-wrap">
        <CheckBox
          items={["Imagen", "Color sólido"]}
          limit={1}
          className="w-[250px]"
        />
        <div>
          <p className="text-secondaryTxt text-[15.25px] font-[600]">
            Imagen actual
          </p>
          <ImageUploader
            id="backgroundSelector"
            limit={1}
            onUploadChange={(itemFiles) => setFiles(itemFiles)}
          />
        </div>
        <ColorPicker title="Change background color" />
      </div>
    </div>
  );
};

export default Background;
