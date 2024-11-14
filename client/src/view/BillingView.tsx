import CompletoPopup from "@/components/popups/CompletoPopup";
import Pagination from "@/components/ui/Pagination";
import SectionHeading from "@/components/ui/SectionHeading";
import React, { useState } from "react";

type Payment = {
  month: string;
  dueDate: string;
  amount: string;
  observations: string;
  status: "PENDIEJTE" | "COMPLETO" | "RECHAZADO";
  id: string;
};

const payments: Payment[] = [
  {
    month: "Septiembre",
    dueDate: "3 de Octubre",
    amount: "$500",
    observations: "XXXXXXXXXXXXXXXX",
    status: "COMPLETO",
    id: "12345",
  },
  {
    month: "Agosto",
    dueDate: "3 Septiembre",
    amount: "$500",
    observations: "XXXXXXXXXXXXXXXX",
    status: "PENDIEJTE",
    id: "67890",
  },
  {
    month: "Julio",
    dueDate: "3 Agosto",
    amount: "$500",
    observations: "XXXXXXXXXXXXXXXX",
    status: "RECHAZADO",
    id: "11223",
  },
];

const BillingView: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handlePayClick = (payment: Payment) => {
    setSelectedPayment(payment);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPayment(null);
    setCopySuccess(null);
  };

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(null), 2000);
      },
      () => {
        setCopySuccess("Failed to copy");
      }
    );
  };

  // Function to get color based on status
  const getColorForStatus = (
    status: "PENDIEJTE" | "COMPLETO" | "RECHAZADO"
  ) => {
    switch (status) {
      case "PENDIEJTE":
        return "bg-yellow-400/20 text-yellow-600";
      case "COMPLETO":
        return "bg-vividBlue/20 text-vividBlue";
      case "RECHAZADO":
        return "bg-vividRed/20 text-vividRed";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="overflow-x-auto bg-white border border-gray-200 p-6 rounded-[16px]">
      <SectionHeading title="Bilings" />
      <table className="min-w-full mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">
              Mes
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">
              Fecha límite de pago
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">
              MONTO (USDT)
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">
              Observaciones
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="text-primaryTxt">
              <td className="px-6 py-4 border-b border-gray-300">
                {payment.month}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {payment.dueDate}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {payment.amount}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {payment.observations}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                <div className="flex items-center">
                  <button
                    onClick={() => handlePayClick(payment)}
                    className={`px-4 py-1 rounded ${getColorForStatus(
                      payment.status
                    )} text-white font-bold mr-2`}
                  >
                    {payment.status}
                  </button>
                  <button className="bg-blue-500/80 text-white px-3 py-1 rounded">
                    i
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalDocs={40}
        onChange={(page) => page}
        className="mt-[20px]"
      />

      {showPopup && selectedPayment && (
        <CompletoPopup
          payment={selectedPayment}
          closePopup={closePopup}
          copySuccess={copySuccess}
          handleCopyClick={handleCopyClick}
          // color={getColorForStatus(selectedPayment.status)}
        />
      )}
    </div>
  );
};

export default BillingView;
