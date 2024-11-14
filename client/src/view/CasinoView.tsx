import CreateCasino from "@/components/casino/CreateCasino";
import DisplayCasinoInfo from "@/components/casino/DisplayCasinoInfo";
import { useState } from "react";
export interface IChildProps {
  viewMode: "read" | "edit" | "create";
  setViewMode: React.Dispatch<React.SetStateAction<"read" | "edit" | "create">>;
}
const CasinoView = () => {
  const [viewMode, setViewMode] = useState<"read" | "edit" | "create">("read");

  return (
    <>
      {viewMode === "read" ? (
        <DisplayCasinoInfo setViewMode={setViewMode} viewMode={viewMode} />
      ) : viewMode === "create" ? (
        <CreateCasino setViewMode={setViewMode} viewMode={viewMode} />
      ) : (
        <>Edit casino</>
      )}
    </>
  );
};

export default CasinoView;
