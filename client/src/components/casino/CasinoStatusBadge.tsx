const CasinoStatusBadge = ({
  status,
}: {
  status: "pending" | "active" | "closed";
}) => {
  if (status === "pending") {
    return (
      <span className="text-yellow-100 bg-yellow-500 py-[3px] px-[9px] rounded-[66px] text-[14px]">
        Pendiente
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className="text-white bg-main py-[3px] px-[9px] rounded-[66px] text-[14px]">
        Activo
      </span>
    );
  }
  if (status === "closed") {
    return (
      <span className="text-red-100 bg-red-600 py-[3px] px-[9px] rounded-[66px] text-[14px]">
        Cerrado
      </span>
    );
  }
  return (
    <span className="text-yellow-100 bg-yellow-500 py-[3px] px-[9px] rounded-[66px] text-[14px]">
      Pendiente
    </span>
  );
};

export default CasinoStatusBadge;
