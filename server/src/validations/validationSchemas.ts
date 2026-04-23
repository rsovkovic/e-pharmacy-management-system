import * as Yup from 'yup';

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(emailRegex, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
  phone: Yup.string()
    .matches(/^[0-9+]+$/, "Only numbers and '+'")
    // .min(10, 'Too short number')
    .required('Phone is required'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});
