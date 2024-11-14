import React, { useState } from "react";
import LinkIcon from "../icons/LinkIcon";
import ColorPicker from "../ui/ColorPicker";

const RetiarButtonCustomized = () => {
  const [btnItem, setText] = useState({
    text: "¿Querés retirar?",
    href: "",
    color: "#1DAC00",
  });
  const [editValue, setEditValue] = useState<"text" | "href" | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editValue) return;
    const form = e.target as HTMLFormElement;
    const value = form[editValue].value;
    const newItem = { ...btnItem, [editValue]: value };
    setText(newItem);
    setEditValue("");
  };

  const handleSave = () => {
    console.log("Saved Button State:", btnItem);
  };

  return (
    <div className="pt-[16px] pb-[34px]">
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
          Botón
        </h3>

        <div className="flex items-center gap-[23px] flex-wrap">
          <div
            className={`min-w-[362px] py-[9px] rounded-[10px] center px-[15px]`}
            style={{ backgroundColor: btnItem.color }}
          >
            <p className="text-white text-[38px]">{btnItem.text}</p>
          </div>

          <div className="w-[274px] flex flex-col gap-[7px]">
            <button
              className="w-full btnPrimary"
              onClick={() => setEditValue("text")}
            >
              Editar Texto
            </button>
            <button
              className="w-full btnPrimary"
              onClick={() => setEditValue("href")}
            >
              <LinkIcon /> Editar link
            </button>
          </div>

          <ColorPicker
            onChange={(color) => setText({ ...btnItem, color })}
            title="Editar color botón"
          />
        </div>
      </div>

      {editValue ? (
        <div className="w-full h-full fixed top-0 left-0 center z-[999]">
          <div
            className="w-full h-full left-0 top-0 absolute z-[99] backdrop-blur-[5px]"
            onClick={() => setEditValue("")}
          ></div>

          <div className="z-[100] relative">
            <form
              className="w-[450px] bg-white rounded-[10px] p-[20px]"
              onSubmit={handleSubmit}
            >
              <h3 className="text-[24px] text-primatyTxt font-[700] tracking-[-0.114px]">
                {editValue === "href"
                  ? "Link do botão Editar"
                  : "Editar texto do botão"}
              </h3>
              <input
                type="text"
                className="w-full h-[40px] rounded-[8px] border-[1px] border-[#BBBBBB] px-[10px] focus:outline-none mt-[20px]"
                placeholder="agregar valor"
                name={editValue}
                defaultValue={btnItem[editValue]}
              />
              <button
                className="w-full py-[10px] bg-primary text-white rounded-[9px] mt-[10px]"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Save Button */}
      {!editValue && (
        <button
          className="buttonStyle"
          onClick={handleSave}
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default RetiarButtonCustomized;
