import DisplayValidation from "@/components/design/formError";
import RetiarButtonCustomized from "@/components/Retiros/RetiarButtonCustomized";
import RetiarTextEditor from "@/components/Retiros/RetiarTextEditor";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  useCreateWithdrawElementMutation,
  useGetWithdrawElementByOwnerQuery,
} from "@/redux/feature/withdrawEelement/withdrawEelement.api";
import { IWithdrawElement } from "@/types/withdrawEelement";
import Loader from "@/utils/Loader";
import { SaveIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";

type TRetirosPayload = Pick<IWithdrawElement, "button" | "facts">;

const RetirosView = () => {
  const { data, isLoading } = useGetWithdrawElementByOwnerQuery(undefined);

  const [createRetiros, { isLoading: isCreating }] =
    useCreateWithdrawElementMutation();

  const [payload, setPayload] = useState<TRetirosPayload>({
    button: {
      color: "#1DAC00",
      text: "CASINO",
      link: "",
    },
    facts: "",
  });
  const isError =
    payload.button.text === "" ||
    payload.button.link === "" ||
    payload.button.color === "" ||
    payload.facts === "";

  useEffect(() => {
    if (data?.data) {
      setPayload(data?.data);
    }
  }, [data?.data]);

  const handleSubmit = async () => {
    try {
      const res = await createRetiros(payload);
      const error = res.error as any;
      if (error) {
        return toast.error(
          error.data?.message ||
            "Something went wrong while making this request"
        );
      }
      toast.success("Retiros updated successfully");
    } catch {
      toast.error("Something went wrong while making this request", {
        description: "Please try again",
      });
    }
  };

  if (isLoading) {
    return <Loader className="!h-[100vh]" />;
  }

  return (
    <>
      <SectionHeading title="Retiros" />
      <RetiarButtonCustomized
        defaultValue={data?.data?.button}
        onChange={(btnData) => {
          setPayload((prev) => ({ ...prev, button: btnData }));
        }}
      />
      <RetiarTextEditor
        defaultValue={data?.data?.facts}
        onChange={(text) => setPayload((prev) => ({ ...prev, facts: text }))}
      />

      <div className="flex flex-col gap-[10px] mt-[20px]">
        <DisplayValidation
          isError={payload.button.text === ""}
          message="Set a text for the button"
        />
        <DisplayValidation
          isError={payload.button.color === ""}
          message="Select a color for the button"
        />
        <DisplayValidation
          isError={payload.button.link === ""}
          message="Select a link for the button"
        />
        <DisplayValidation
          isError={payload.facts === ""}
          message="Set a text for the facts"
        />
      </div>

      <button
        disabled={isError}
        onClick={handleSubmit}
        className="buttonStyle disabled:opacity-[0.5] disabled:cursor-not-allowed"
      >
        {isCreating ? <CgSpinner className="animate-spin" /> : <SaveIcon />}
        Save Changes
      </button>
    </>
  );
};

export default RetirosView;
