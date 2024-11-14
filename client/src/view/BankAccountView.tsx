/* eslint-disable @typescript-eslint/no-unused-vars */
import PrimaryInput from "@/components/ui/PrimaryInput";
import SectionHeading from "@/components/ui/SectionHeading";
import TextEditor from "@/components/ui/TextEditor";
import {
  useBankInfoCreateMutation,
  useBankUpdateMutation,
  useGetBankInfoQuery,
} from "@/redux/feature/bank/bank.api";
import Loader from "@/utils/Loader";
import { Form, Formik, Field } from "formik";
import { EditIcon, NotebookIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface BankAccountData {
  instruction1?: string;
  instruction2?: string;
  nombre: string;
  banco: string;
  cbu: string;
  alias: string;
}

const BankAccountView = () => {
  const [formData, setFormData] = useState<BankAccountData>({
    nombre: "",
    banco: "",
    cbu: "",
    alias: "",
    instruction1: "",
    instruction2: "",
  });

  const { data: bankdata, isSuccess, isLoading } = useGetBankInfoQuery(undefined);
  const [bankInfoCreate] = useBankInfoCreateMutation();
  const [bankUpdate] = useBankUpdateMutation();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSubmit = async (values: BankAccountData) => {
    const toastId = toast.loading("Please wait...");
    setIsEditing(false);

    try {
      if (!bankdata?.data || bankdata?.data.length === 0) {
        const payload = {
          instruction1: values?.instruction1 || "",
          instruction2: values?.instruction2 || "",
          nombre: values?.nombre || "",
          bank: values?.banco || "",
          cbu: values?.cbu || "",
          alias: values?.alias || "",
        };

        const res = await bankInfoCreate({ bankInfo: payload });

        if (!res.error) {
          toast.success("Bank account created successfully!", {
            id: toastId,
          });
        } else {
          toast.error("Something went wrong!", {
            id: toastId,
          });
        }
      } else {
        const dataInside = bankdata?.data[0];
        const res = await bankUpdate({
          bankAccountId: dataInside?._id,
          bankInfo: {
            instruction1: values?.instruction1 || dataInside?.instruction1 || "",
            instruction2: values?.instruction2 || dataInside?.instruction2 || "",
            accountHolderName: values?.nombre || dataInside?.nombre || "",
            bank: values?.banco || dataInside?.bank || "",
            cbu: values?.cbu || dataInside?.cbu || "",
            alias: values?.alias || dataInside?.alias || "",
          },
        });

        if (!res.error) {
          toast.success("Bank account updated successfully!", {
            id: toastId,
          });
        } else {
          toast.error("Something went wrong!", {
            id: toastId,
          });
        }
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    }

    setFormData(values);
  };

  useEffect(() => {
    if (isSuccess && bankdata?.data?.length > 0) {
      const data = bankdata?.data[0];
      setFormData({
        instruction1: data?.instruction1 || "",
        instruction2: data?.instruction2 || "",
        nombre: data?.accountHolderName || "",
        banco: data?.bank || "",
        cbu: data?.cbu || "",
        alias: data?.alias || "",
      });
    }
  }, [bankdata, isSuccess]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={`p-6 ${
        isEditing ? "" : "max-w-[800px] shadow-sm bg-white rounded-[16px]"
      }`}
    >
      <SectionHeading
        title={isEditing ? "Campos a editar" : "Bank Account Information"}
      />
      <div className="mt-[24px]">
        {isEditing ? (
          <Formik initialValues={formData} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
              <Form className="flex flex-col gap-[15px]">
                <Field
                  name="instruction1"
                  render={({ field }: any) => (
                    <TextEditor
                      defaultValue={formData.instruction1 || ""}
                      onChange={(value) =>
                        setFieldValue("instruction1", value)
                      }
                      height={200}
                    />
                  )}
                />
                <PrimaryInput
                  name="nombre"
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  title="Nombre del titular de una cuenta:"
                />
                <PrimaryInput
                  name="banco"
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  title="Banco:"
                />
                <PrimaryInput
                  name="cbu"
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  title="CBU:"
                />
                <PrimaryInput
                  name="alias"
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  title="Alias:"
                />
                <Field
                  name="instruction2"
                  render={({ field }: any) => (
                    <TextEditor
                      defaultValue={field.value}
                      onChange={(value) =>
                        setFieldValue("instruction2", value)
                      }
                      height={90}
                    />
                  )}
                />
                <button
                  type="submit"
                  className="mt-4 mx-auto flex bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 text-[24px]"
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="flex flex-col gap-[5px] text-[16px]">
            <p>
              <strong>Nombre del titular:</strong> {formData.nombre}
            </p>
            <p>
              <strong>Banco:</strong> {formData.banco}
            </p>
            <p>
              <strong>CBU:</strong> {formData.cbu}
            </p>
            <p>
              <strong>Alias:</strong> {formData.alias}
            </p>
            {formData.instruction1 && (
              <div>
                <strong>Instruction 1:</strong>{" "}
                <div className="flex items-center gap-2">
                  <NotebookIcon size={16} />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formData.instruction1 || "",
                    }}
                  />
                </div>
              </div>
            )}

            {formData.instruction2 && (
              <div>
                <strong>Instruction 2:</strong>{" "}
                <div className="flex items-center gap-2">
                  <NotebookIcon size={16} />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formData.instruction2 || "",
                    }}
                  />
                </div>
              </div>
            )}

            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition duration-300 flex items-center gap-2 w-fit"
            >
              <EditIcon /> Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankAccountView;
