import { setFrontViewValue } from "@/redux/feature/frontView/frontView.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import CheckBox from "../ui/CheckBox";
import ColorPicker from "../ui/ColorPicker";
import ImageUploader from "../ui/ImageUploader";

const Background = () => {
  const [, setFiles] = useState<File[]>([]);
  const { color, type, image } = useAppSelector(
    (state) => state.frontView.background
  );
  const dispatch = useAppDispatch();

  return (
    <div className="pt-[26px] pb-[57px] border-b-[1px] border-[#BBBBBB]">
      <div className="w-full justify-start items-start flex-col flex gap-[16px]">
        <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
          Background
        </h3>{" "}
        <div className="flex gap-[15px] flex-wrap">
          <CheckBox
            defaultValue={[type == "image" ? "Imagen" : "Color sốlido"]}
            onChange={(item) => {
              dispatch(
                setFrontViewValue({
                  background: {
                    color,
                    type: item[0] == "Imagen" ? "image" : "color",
                    image,
                  },
                })
              );
            }}
            items={["Imagen", "Color sólido"]}
            limit={1}
            className="w-[250px]"
          />
          {type == "image" && (
            <div>
              <p className="text-secondaryTxt text-[15.25px] font-[600]">
                Imagen actual
              </p>

              <ImageUploader
                id="background"
                onSaveChange={(urls) => {
                  dispatch(
                    setFrontViewValue({
                      background: {
                        color,
                        type: "image",
                        image: urls[0] || "",
                      },
                    })
                  );
                }}
                limit={1}
                onUploadChange={(itemFiles) => setFiles(itemFiles)}
              />
            </div>
          )}
          {type == "color" ? (
            <div className="flex items-center justify-start gap-[15px]">
              <span
                className="w-[150px] h-[150px] flex"
                style={{ background: color }}
              ></span>
              <ColorPicker
                title="Change background color"
                onChange={(color) =>
                  dispatch(
                    setFrontViewValue({
                      background: { color, type: "color", image },
                    })
                  )
                }
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {image && type == "image" ? (
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-[18px] font-[600]">Saved images</h4>
          <img src={image} className="w-[100px] border-[1px] border-input" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Background;
