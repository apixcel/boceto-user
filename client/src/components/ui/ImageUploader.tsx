import { useUploadMutilpleMutation } from "@/redux/feature/upload/upload.api";
import { trimText } from "@/utils/trimText";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import CrossIcon from "../icons/CrossIcon";
import UploadIcon from "../icons/UploadIcon";

interface IProps {
  id: string;
  className?: string;
  limit: number;
  onUploadChange?: (files: File[]) => void;
  onSaveChange?: (ulrs: string[]) => void;
}

const ImageUploader: React.FC<IProps> = ({
  id,
  className,
  onUploadChange,
  onSaveChange,
  limit,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [uploadMultiImage, { isLoading }] = useUploadMutilpleMutation();
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
    setError("You have pending images to save");
  };

  const handleRemoveFile = (index: number) => {
    const newFile = [...files].filter((_, i) => i !== index);
    setFiles(newFile);
    setError(newFile.length === 0 ? null : "You have pending images to save");
    onUploadChange && onUploadChange(newFile);
  };

  const handleSaveImages = async () => {
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("images", file);
      });
      const res = await uploadMultiImage(formData);
      const error = res.error as any;
      if (error) {
        setError(
          error.data?.message ||
            "Something went wrong while making this request"
        );
      }

      const data = res.data;
      console.log(data);
      setFiles([]);
      setError(null);
      setSuccess("Images uploaded successfully");

      const urls = data?.data || [];
      onSaveChange && onSaveChange(urls);
    } catch (error) {
      setError("Something went wrong while making this request");
    }
  };

  return (
    <>
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
              {trimText(name, 25)}
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
      <div className="mt-[15px]">
        {error && onSaveChange && (
          <p className="text-[#FF0000] text-[14px]">{error}</p>
        )}
        {success && onSaveChange && (
          <p className="text-[#1bbb53] text-[14px] font-[600]">{success}</p>
        )}
      </div>
      {files.length && onSaveChange ? (
        <button
          onClick={handleSaveImages}
          className="buttonStyle disabled:opacity-[0.6]"
          disabled={isLoading}
        >
          salvar el imagen
          {isLoading ? <CgSpinner className="animate-spin" /> : ""}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageUploader;
