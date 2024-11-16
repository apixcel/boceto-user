import { setFrontViewValue } from "@/redux/feature/frontView/frontView.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import ImageUploader from "../ui/ImageUploader";

const LogoSelector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useAppDispatch();
  const { logo } = useAppSelector((state) => state.frontView);
  return (
    <div className="border-b-[1px] border-[#BBBBBB] pt-[26px] pb-[57px] ">
      <div className="w-full justify-start items-center flex gap-[130px] flex-wrap">
        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
            Logotipo
          </h3>
          <div>
            <p className="text-secondaryTxt text-[15.25px] font-[600]">
              Imagen actual
            </p>
            <ImageUploader
              onSaveChange={(urls) =>
                dispatch(setFrontViewValue({ logo: urls[0] || "" }))
              }
              id="logoSelector"
              limit={1}
              onUploadChange={(itemFiles) => {
                setFiles(itemFiles);
              }}
            />
          </div>
        </div>
        <div className="flex items-start justify-start gap-[10px]">
          <p>Vista previa</p>

          <div>
            {files[0] ? (
              <div className="center gap-[70px] flex-wrap">
                {/* favicon */}
                <div className="center flex-col gap-[10px]">
                  <div>
                    <div className="rounded-[8px] bg-white w-[87px] h-[79px] p-[6px]">
                      <img
                        src={URL.createObjectURL(files[0])}
                        className="w-full h-full object-cover rounded-[2px]"
                      />
                    </div>
                  </div>
                  <p>Favicon</p>
                </div>

                {/* logo */}
                <div className="center flex-col gap-[10px]">
                  <div>
                    <div className="rounded-[8px] bg-white w-[250px] h-[79px] p-[6px]">
                      <img
                        src={URL.createObjectURL(files[0])}
                        className="w-full h-full object-cover rounded-[2px]"
                      />
                    </div>
                  </div>
                  <p>Logotipo</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {logo ? (
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-[18px] font-[600]">Saved images</h4>
          <img src={logo} className="w-[100px] border-[1px] border-input" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LogoSelector;
