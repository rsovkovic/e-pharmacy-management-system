
'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Formik, Form,  FormikHelpers, Field } from 'formik';
import toast from 'react-hot-toast';
import { login } from '@/app/api/clientApi';
import { LoginRequest } from '@/types/types';
import { loginSchema } from '@/validations/validationSchemas';
import axios from 'axios';
import { Input } from '@/Ui/Input';
import { Button } from '@/Ui/Button';

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
    const ErrorMessage = err.response?.data?.error || err.message || 'Login failed';
    toast.error(ErrorMessage);
  }else {
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
         {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-3">
            {/* Email */}
              <Field
                name="email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                component={Input}
              />
            {/* Password - ЗАМІСТЬ Phone */}
           
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="current-password"
               component={Input}
              >
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs  text-muted hover:text-gray-300  transition-colors font-normal"
              >
                {/* Можна додати іконку ока тут */}
                {showPassword ? 'Hide' : 'Show'}
              </button>
           </Field>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <Button type="submit" isLoading={isSubmitting}>
              Log in
           </Button>
            <Link
              href="/register"
              className="text-sm text-muted underline hover:text-gray-300 transition-colors"
            >
              Don’t have an account?
            </Link>
          </div>
          </Form>
            )}
      </Formik>
    </div>
  );
};