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

export const shopSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Shop name is too short')
    .required('Shop name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  phone: Yup.string()
    .matches(/^[0-9+]+$/, "Only numbers and '+'")
    .required('Phone is required'),
  rating: Yup.number()
    .min(0)
    .max(5, 'Rating cannot be more than 5')
    .required('Rating is required'),
});

export const productSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  category: Yup.string().required('Category is required'),
  price: Yup.number().positive('Price must be positive').required(),
  stock: Yup.number().integer().min(0).required(),
  suppliers: Yup.string().required(),
  photo: Yup.string().url('Must be a valid photo URL').nullable(),
});
