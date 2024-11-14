import { CopyIcon } from "lucide-react";
import { CiShare2 } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import React from "react";

// Define the Payment type
type Payment = {
  month: string;
  dueDate: string;
  amount: string;
  observations: string;
  status: "PENDIEJTE" | "COMPLETO" | "RECHAZADO";
  id: string;
};

// Define the props for the CompletoPopup component
interface CompletoPopupProps {
  payment: Payment;
  closePopup: () => void;
  copySuccess: string | null;
  handleCopyClick: (text: string) => void;
}

const CompletoPopup: React.FC<CompletoPopupProps> = ({
  payment,
  closePopup,
  copySuccess,
  handleCopyClick,
}) => {
  const pendienteColor = payment.status === "PENDIEJTE";
  const completoColor = payment.status === "COMPLETO";
  const rechazadoColor = payment.status === "RECHAZADO";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`${completoColor && "completo"} ${rechazadoColor && "rechazado"} ${pendienteColor && "pendiejte"} text-white px-6 py-6 rounded-lg shadow-md w-[425px] relative`}>
        <div className="flex justify-between pb-[20px] border-b">
          <button onClick={closePopup} className="text-white">
            <IoArrowBack size={24} />
          </button>
          <div className="flex justify-center items-center gap-[5px]">
            <img src="/images/image-t.png" alt="" />
            <h2 className="text-[32px] font-bold text-center">{payment.amount} USDT</h2>
          </div>
          <button className="text-white">
            <CiShare2 size={24} />
          </button>
        </div>

        <div className="flex justify-center py-[40px] border-b">
          <div className="w-[150px] h-[150px] bg-white flex justify-center items-center">
            {/* QR Code Placeholder */}
            <div className="w-[100px] h-[100px] bg-gray-400"></div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[14px] pb-[14px] border-b">
          <p className="font-semibold text-sm truncate">
            {payment.observations}
          </p>
          <button
            onClick={() => handleCopyClick(payment.observations)}
            className="bg-white text-[#1DA48C] px-4 py-1 rounded-lg flex items-center gap-2"
          >
            <CopyIcon size={16} /> Copiar
          </button>
        </div>

        {copySuccess && (
          <div className="text-green-500 text-center mb-4">{copySuccess}</div>
        )}

        <p className="text-[14px] font-nunito text-center tracking-[0.3px] font-semibold text-white pt-[14px]">
          Al transferir el monto, adjuntar el comprobante de pago debajo y enviar
        </p>

        <div className="flex justify-between gap-[40px] pt-[14px]">
          <button className="bg-white text-[#1DA48C] px-4 py-2 rounded-lg w-full mr-2 items-center flex justify-center gap-2">
            <MdOutlineFileUpload />
            Subir Archivo
          </button>
          <button className="bg-[#1DA48C] text-white px-4 py-2 rounded-lg w-full btnEffect">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletoPopup;
