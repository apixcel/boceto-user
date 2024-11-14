import { useCreateCasinoMutation } from "@/redux/feature/casino/casino.api";
import { IChildProps } from "@/view/CasinoView";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { ImSpinner11 } from "react-icons/im";
import { toast } from "sonner";
import * as Yup from "yup";
// Define the validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "* Casino name must be at least 3 characters")
    .max(30, "* Casino name must be 30 characters or less")
    .required("* Casino name is required"),
});

const CreateCasino: React.FC<IChildProps> = ({ setViewMode }) => {
  const [createCasino, { isLoading }] = useCreateCasinoMutation();
  const handleSubmit = async (values: { name: string }) => {
    try {
      const res = await createCasino({ name: values.name, status: "active" });
      const error = res.error as any;
      if (error) {
        return toast.error(
          error.data?.message ||
            "Something went wrong while making this request"
        );
      }

      toast.success("Casino created successfully");
      setViewMode("read");
    } catch {
      toast.error("Something went wrong while making this request", {
        description: "Please try again",
      });
    }
  };
  return (
    <>
      <div className="w-full h-full center">
        <div className="bg-white rounded-[15px] w-[550px] p-[15px]">
          <h4 className="text-[25px] font-[700]">Create your Casino</h4>
          <Formik
            initialValues={{ name: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="w-full mt-[15px]">
                <div className="w-full">
                  <label htmlFor="name" className="text-[17px] font-[600]">
                    Name
                  </label>
                  <Field
                    name="name"
                    palceHolder="Casino Name"
                    type="text"
                    className="w-full border-input border-[1px] outline-none
                 py-[5px] px-[5px]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 mt-[5px]"
                  />
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full text-center bg-main text-white py-[10px] rounded-[8px] mt-[15px] center gap-[5px] disabled:opacity-[0.6] disabled:cursor-not-allowed"
                >
                  Submit
                  {isLoading ? (
                    <ImSpinner11 className="animate-spin duration-[200]" />
                  ) : (
                    ""
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateCasino;
