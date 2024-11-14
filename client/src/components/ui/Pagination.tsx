import { useState } from "react";

interface IProps {
  limit?: number;
  totalDocs: number;
  onChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<IProps> = ({
  limit = 10,
  totalDocs,
  onChange,
  className,
}) => {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(totalDocs / limit);

  return (
    <div
      className={`flex items-center justify-start gap-[8px] ${className || ""}`}
    >
      <p>Page:</p>
      {[...Array(pages)].map((_, i) => (
        <button
          type="button"
          key={i + 1}
          className={`w-[32px] h-[32px] rounded-[4px] text-center ${
            page === i + 1
              ? "bg-primary text-white"
              : "bg-[#E6E6E6] text-[#828282]"
          } font-[700] text-[14px] cursor-pointer`}
          onClick={() => {
            onChange(i + 1);
            setPage(i + 1);
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
