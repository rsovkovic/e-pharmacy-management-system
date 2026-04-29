
'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import toast from 'react-hot-toast';
import { login } from '@/app/api/clientApi';
import { LoginRequest } from '@/types/types';
import { loginSchema } from '@/validations/validationSchemas';
import axios from 'axios';
import { Input } from '@/Ui/Input';

const initialFormValues: LoginRequest = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: LoginRequest,
    formikHelpers: FormikHelpers<LoginRequest>
  ) => {
    try {
      const res = await login(values);
      if (res) {
        // Якщо у тебе є Zustand, розкоментуй setUser тут:
          // setUser(res.user); 
        toast.success(`Welcome, ${res.user.name}!`);
        router.push('/'); 
        formikHelpers.resetForm();
      } 
    } catch (err) {

    if (axios.isAxiosError<{ error: string }>(err)) {
   
    const msg = err.response?.data?.error || err.message || 'Login failed';
    toast.error(msg);
  }else {
    // Це на випадок звичайної помилки в коді (наприклад, помилка в пропсах)
    toast.error('An unexpected error occurred');
    console.error(err);
  }
    }
  };

  return (
    <div className="w-full max-w-md">
      <Formik
        initialValues={initialFormValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-col gap-3">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <Field
                name="email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                component={Input}
              />
            </div>

            {/* Password - ЗАМІСТЬ Phone */}
            <div className="flex flex-col gap-1 relative">
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="current-password"
               component={Input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-muted hover:text-gray-300"
              >
                {/* Можна додати іконку ока тут */}
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <button
              type="submit"
              className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all active:scale-95 shadow-lg shadow-green-900/20"
            >
              Log in
            </button>
            <Link
              href="/register"
              className="text-sm text-muted underline hover:text-gray-300 transition-colors"
            >
              Don’t have an account?
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};