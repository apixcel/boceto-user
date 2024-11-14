import { useState } from "react";
import ImageUploader from "../ui/ImageUploader";

const PrimaryBannerSelector = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="w-full justify-start items-center flex gap-[130px] pt-[26px] pb-[57px] border-b-[1px] border-[#BBBBBB] flex-wrap">
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
          Botón Superior
        </h3>
        <div>
          <p className="text-secondaryTxt text-[15.25px] font-[600]">
            Imagen actual
          </p>
          <ImageUploader
            id="bannerPrimary"
            limit={2}
            onUploadChange={(itemFiles) => setFiles(itemFiles)}
          />
        </div>
      </div>
      <div className="flex items-start justify-start gap-[10px] flex-wrap">
        <p>Vista previa</p>

        <div className="center gap-[70px] overflow-auto max-w-[930px]">
          {files.map((file, i) => (
            <div
              key={i + "file"}
              className="w-full max-w-[475px] h-[165px] p-[6px] bg-white rounded-[6px]"
            >
              <img
                src={URL.createObjectURL(file)}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimaryBannerSelector;
