import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/feature/auth/auth.api";

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationPage: React.FC = () => {
  const [register] = useRegisterMutation();
  // Yup Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik<RegistrationFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema, // Use the validation schema here
    onSubmit: async (values) => {
      console.log("Registration form data:", values);
      const toastId = toast.loading("Please wait...");
      try {
        const res = await register(values);
        const error = res.error;
        if (error) {
          toast.error("Login Failed", {
            id: toastId,
          });
          return;
        }

        toast.success("Login Success", {
          id: toastId,
        });
      } catch (error) {
        toast.error("Something went wrong!", {
          id: toastId,
        });
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border rounded-md"
              {...formik.getFieldProps("firstName")} // No need to explicitly add `name`
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 w-full border rounded-md"
              {...formik.getFieldProps("lastName")} // No need to explicitly add `name`
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              {...formik.getFieldProps("email")} // No need to explicitly add `name`
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              {...formik.getFieldProps("password")} // No need to explicitly add `name`
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
