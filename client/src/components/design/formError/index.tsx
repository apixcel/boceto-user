import React from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { errorClass, okClass } from "../DesignFormError";
interface IProps {
  isError: boolean;
  message: string;
}

const DisplayValidation: React.FC<IProps> = ({ isError, message }) => {
  return (
    <p className={isError ? errorClass : okClass}>
      {isError ? <RxCross2 /> : <MdDone />} {message}
    </p>
  );
};

export default DisplayValidation;
