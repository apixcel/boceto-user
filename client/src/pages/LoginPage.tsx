import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useLoginUserMutation } from '@/redux/feature/auth/auth.api';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/feature/auth/auth.slice';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
const [loginUser] = useLoginUserMutation();
const navigate = useNavigate();
const dispatch = useAppDispatch()

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const toastId = toast.loading("Please wait...");
      try {
        const res = await loginUser(values);
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
        console.log("heee", res.data.data);
        dispatch(setUser(res.data.data))
        navigate("/");
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
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              {...formik.getFieldProps('email')} // No need to explicitly add `name`
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              {...formik.getFieldProps('password')} // No need to explicitly add `name`
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
