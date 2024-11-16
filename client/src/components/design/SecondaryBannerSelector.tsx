import { setFrontViewValue } from "@/redux/feature/frontView/frontView.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import ImageUploader from "../ui/ImageUploader";

const SecondaryBannerSelector = () => {
  const imageLimit = 99;
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useAppDispatch();
  const { secondaryBannerImg } = useAppSelector((state) => state.frontView);

  return (
    <div className="pt-[26px] pb-[57px] border-b-[1px] border-[#BBBBBB]">
      <div className="w-full justify-start items-center flex gap-[130px]">
        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
            Banner Secundario
          </h3>
          <div>
            <p className="text-secondaryTxt text-[15.25px] font-[600]">
              Imagen actual
            </p>
            <ImageUploader
              id="bannerSecondary"
              limit={imageLimit}
              onSaveChange={(urls) =>
                dispatch(
                  setFrontViewValue({
                    secondaryBannerImg: [...urls, ...secondaryBannerImg],
                  })
                )
              }
              onUploadChange={(itemFiles) => setFiles(itemFiles)}
            />
          </div>
        </div>
        <div className="flex items-start justify-start gap-[10px]">
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
      {secondaryBannerImg?.length ? (
        <div>
          <h4 className="text-[18px] font-[600]">Saved images</h4>
          <div className="flex items-start justify-start gap-[10px]f flex-wrap">
            {secondaryBannerImg?.map((url, i) => (
              <div
                key={i + "url"}
                className="w-[100px] p-[6px] bg-white rounded-[6px] border-[1px] border-input"
              >
                <img src={url} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SecondaryBannerSelector;
