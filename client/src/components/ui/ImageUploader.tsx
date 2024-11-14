import { useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import UploadIcon from "../icons/UploadIcon";

interface IProps {
  id: string;
  className?: string;
  limit: number;
  onUploadChange?: (files: File[]) => void;
}

const ImageUploader: React.FC<IProps> = ({
  id,
  className,
  onUploadChange,
  limit,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    const length = files.length;
    if (length >= limit) {
      const newFiles = [...files];
      newFiles[files.length - 1] = file;
      setFiles(newFiles);
      onUploadChange && onUploadChange(newFiles);
    } else {
      const newFiles = [...files, file];
      setFiles(newFiles);
      onUploadChange && onUploadChange(newFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFile = [...files].filter((_, i) => i !== index);
    setFiles(newFile);
    onUploadChange && onUploadChange(newFile);
  };

  return (
    <div
      className={`flex flex-col gap-[8px] w-[322px] mt-[10px] ${
        className || ""
      }`}
    >
      {files.map(({ name }, i) => (
        <div
          key={i + "file"}
          className="flex items-center justify-start gap-[8px]"
        >
          <p className="py-[9px] border-[1px] w-full border-[#979797] bg-[#cfcfcf66] rounded-[6px] center overflow-hidden">
            {name}
          </p>
          <button
            onClick={() => handleRemoveFile(i)}
            className="w-[40px] h-[40px] center bg-[#FF0000A8] rounded-[8px] shrink-0"
          >
            <CrossIcon />
          </button>
        </div>
      ))}
      <label
        htmlFor={id}
        className="btnPrimary w-full"
        style={{
          boxShadow: "0px 1px 13.8px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        <UploadIcon />
        <span className="text-[#404040] text-[15px]">Subir Archivo</span>
      </label>
      <input
        type="file"
        id={id}
        accept="image/*"
        className="hidden"
        onChange={handleUploadFile}
      />
    </div>
  );
};

export default ImageUploader;
