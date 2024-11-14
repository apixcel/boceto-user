import { useState } from "react";
import CheckedIcon from "../icons/CheckedIcon";
import CheckEmpltyIcon from "../icons/CheckEmpltyIcon";

interface IProps {
  items: string[];
  limit: number;
  onChange?: (item: string[]) => void;
  className?: string;
}

const CheckBox: React.FC<IProps> = ({ items, limit, onChange, className }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (item: string) => {
    if (checked.length >= limit) {
      const items = [...checked];
      items[items.length - 1] = item;
      setChecked(items);
      onChange && onChange(items);
      return;
    }

    if (checked.includes(item)) {
      const newChecked = checked.filter((i) => i !== item);
      setChecked(newChecked);
      onChange && onChange(newChecked);
    } else {
      setChecked([...checked, item]);
      onChange && onChange([...checked, item]);
    }
  };

  return (
    <div className={`flex flex-col gap-[20px] ${className || ""}`}>
      {items.map((item) => (
        <button
          className="flex items-center gap-[10px]"
          key={item + "check"}
          onClick={() => handleCheck(item)}
        >
          {checked.includes(item) ? <CheckedIcon /> : <CheckEmpltyIcon />}
          {item}
        </button>
      ))}
    </div>
  );
};

export default CheckBox;
