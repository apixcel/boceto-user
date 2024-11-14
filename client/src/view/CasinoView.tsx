import CreateCasino from "@/components/casino/CreateCasino";
import DisplayCasinoInfo from "@/components/casino/DisplayCasinoInfo";
import EditCasino from "@/components/casino/EditCasino";
import { ICasaino } from "@/types/casino";
import { useState } from "react";
export interface IChildProps {
  viewMode: "read" | "edit" | "create";
  setViewMode: React.Dispatch<React.SetStateAction<"read" | "edit" | "create">>;
}
const CasinoView = () => {
  const [viewMode, setViewMode] = useState<"read" | "edit" | "create">("read");
  const [selectedCasino, setSelectedCasino] = useState<ICasaino | null>(null);

  return (
    <>
      {viewMode === "read" ? (
        <DisplayCasinoInfo
          setViewMode={setViewMode}
          viewMode={viewMode}
          setSelectedCasino={setSelectedCasino}
        />
      ) : viewMode === "create" ? (
        <CreateCasino setViewMode={setViewMode} viewMode={viewMode} />
      ) : (
        <EditCasino
          setViewMode={setViewMode}
          viewMode={viewMode}
          selectedCasino={selectedCasino}
        />
      )}
    </>
  );
};

export default CasinoView;
