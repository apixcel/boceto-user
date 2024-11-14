import { ErrorMessage, Field } from "formik";

interface IProps {
  className?: string;
  placeholder?: string;
  name: string;
  title: string;
}

const PrimaryInput: React.FC<IProps> = ({
  name,
  title,
  className,
  placeholder,
}) => {
  return (
    <div
      className={`bg-white shadow-md px-[25px] py-[14px] flex items-center justify-start gap-[5px] border-[1px] border-[#D9D9D9] rounded-[8px] ${
        className || ""
      }`}
    >
      <p className="font-[700] shrink-0">{title}</p>
      <Field name={name} placeholder={placeholder} className="w-full focus:outline-none" />
      <ErrorMessage name={name} />
    </div>
  );
};

export default PrimaryInput;
