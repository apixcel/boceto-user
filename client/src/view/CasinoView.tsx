import DisplayCasinoInfo from "@/components/casino/DisplayCasinoInfo";
import { useState } from "react";

const CasinoView = () => {
  const [viewMode, setViewMode] = useState<"read" | "edit" | "create">("read");

  return (
    <>
      {viewMode === "read" ? (
        <DisplayCasinoInfo />
      ) : viewMode === "create" ? (
        <>Create Casino</>
      ) : (
        <>Edit casino</>
      )}
    </>
  );
};

export default CasinoView;
