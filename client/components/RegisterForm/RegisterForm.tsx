
// 'use client';
 
// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { registerSchema } from '@/validations/validationSchemas';
// import { register } from '@/app/api/clientApi';
// import { Formik, Form, ErrorMessage, FormikHelpers, Field } from 'formik';
// import { RegisterRequest } from '@/types/types';
// import toast from 'react-hot-toast';
// import axios from 'axios';

//  const initialFormValues: RegisterRequest = {
//    name: '',
//    email: '',
//    phone: '',
//    password: '',
// };
 
// export const RegisterForm = () => {
//   // Використовуй свій zustand store (якщо він є)
// //   const setUser = useAuthStore((state) => state.setUser);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
 

//   const handleSubmit = async (
//     values: RegisterRequest,
//     { resetForm }: FormikHelpers<RegisterRequest>
//   ) => {
//     try {
//       const res = await register(values); // Повертає { user: {...} }
//       if (res) {
//         // Оскільки токена немає, ми просто зберігаємо дані юзера (якщо треба)
//         // і відправляємо на логін
//         toast.success('Registration successful!');
//         router.push('/login');
//         resetForm();
//       }
//     } catch (err) {

//     if (axios.isAxiosError<{ error: string }>(err)) {
//       const msg = err.response?.data?.error || 'Registration failed';
//       toast.error(msg);
//     } else {
//       // На випадок помилок не пов'язаних з мережею
//       toast.error('An unexpected error occurred');
//       console.error(err);
//     }

//     }
//   };

//   return (
//     <div className="w-full max-w-md">
//       <Formik
//         initialValues={initialFormValues}
//         validationSchema={registerSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => ( // Дістаємо errors звідси
//           <Form className="flex flex-col gap-5">
//             <div className="flex flex-col gap-3">
              
//               {/* Name */}
//               <div className="flex flex-col gap-1">
//                 <Field
//                   name="name"
//                   placeholder="User Name"
//                   className={`bg-[#0f0f0f] border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-800'} p-3 rounded-lg text-white outline-none focus:border-green-500`}
//                 />
//                 <ErrorMessage name="name" component="span" className="text-xs text-red-500" />
//               </div>

//               {/* Email */}
//               <div className="flex flex-col gap-1">
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="Email address"
//                   className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-lg text-white outline-none focus:border-green-500"
//                 />
//                 <ErrorMessage name="email" component="span" className="text-xs text-red-500" />
//               </div>

//               {/* Password */}
//               <div className="relative flex flex-col gap-1">
//                 <Field
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Password"
//                   className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-lg text-white outline-none focus:border-green-500 w-full"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3 text-gray-500 hover:text-white"
//                 >
//                   {showPassword ? 'Hide' : 'Show'}
//                 </button>
//                 <ErrorMessage name="password" component="span" className="text-xs text-red-500" />
//               </div>

//               {/* Phone */}
//               <div className="flex flex-col gap-1">
//                 <Field
//                   name="phone"
//                   placeholder="Phone number"
//                   className="bg-[#0f0f0f] border border-gray-800 p-3 rounded-lg text-white outline-none focus:border-green-500"
//                 />
//                 <ErrorMessage name="phone" component="span" className="text-xs text-red-500" />
//               </div>
//             </div>

//             <div className="mt-4 flex items-center gap-5">
//               <button
//                 type="submit"
//                 className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all"
//               >
//                 Registration
//               </button>
//               <Link
//                 href="/login"
//                 className="text-sm text-gray-400 underline hover:text-white transition-colors"
//               >
//                 Already have an account?
//               </Link>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };





'use client';
 
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerSchema } from '@/validations/validationSchemas';
import { register } from '@/app/api/clientApi';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { RegisterRequest } from '@/types/types';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Input } from '@/Ui/Input';

 const initialFormValues: RegisterRequest = {
   name: '',
   email: '',
   phone: '',
   password: '',
};
 
export const RegisterForm = () => {
  // Використовуй свій zustand store (якщо він є)
//   const setUser = useAuthStore((state) => state.setUser); 
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
 

  const handleSubmit = async (
    values: RegisterRequest,
    { resetForm }: FormikHelpers<RegisterRequest>
  ) => {
    try {
      const res = await register(values); // Повертає { user: {...} }
      if (res) {
        // Оскільки токена немає, ми просто зберігаємо дані юзера (якщо треба)
        // і відправляємо на логін
        toast.success('Registration successful!');
        router.push('/login');
        resetForm();
      }
    } catch (err) {

    if (axios.isAxiosError<{ error: string }>(err)) {
      const msg = err.response?.data?.error || 'Registration failed';
      toast.error(msg);
    } else {
      // На випадок помилок не пов'язаних з мережею
      toast.error('An unexpected error occurred');
      console.error(err);
    }

    }
  };

  return (
    <div className="w-full max-w-md">
      <Formik
        initialValues={initialFormValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
          <Form className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              
              {/* Name */}
              <div className="flex flex-col gap-1">
                <Field
                  name="name"
                  placeholder="User Name"
                  autoComplete="name"
                  component={Input}
                />
              </div>

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

              {/* Password */}
              <div className="relative flex flex-col gap-1">
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  autoComplete="new-password"
                  component={Input}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted hover:text-gray-300"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <Field
                  name="phone"
                  placeholder="Phone number"
                  autoComplete="tel"
                  component={Input}
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-5">
              <button 
                type="submit" 
                className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all"
              >
                Registration
              </button>
              <Link
                href="/login"
                className="text-sm text-muted underline hover:text-gray-300 transition-colors"
              >
                Already have an account?
              </Link>
            </div>
          </Form>
      </Formik>
    </div>
  );
};