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

// export const shopSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Shop name is too short')
//     .required('Shop name is required'),
//   address: Yup.string().required('Address is required'),
//   city: Yup.string().required('City is required'),
//   phone: Yup.string()
//     .matches(/^[0-9+]+$/, "Only numbers and '+'")
//     .required('Phone is required'),
//   rating: Yup.number()
//     .min(0)
//     .max(5, 'Rating cannot be more than 5')
//     .required('Rating is required'),
// });

export const shopSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Shop name is too short')
    .required('Shop name is required'),
  city: Yup.string().required('City is required'),
  phone: Yup.string()
    .matches(/^[0-9+\s()/-]+$/, 'Invalid phone format')
    .required('Phone is required'),
  ownerName: Yup.string().required('Owner name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  street: Yup.string().required('Street address is required'),
  zip: Yup.string().required('ZIP/Postal code is required'),
  hasDelivery: Yup.boolean().default(false),
  rating: Yup.number().min(0).max(5, 'Rating cannot be more than 5').default(0),
});

export const updateShopSchema = Yup.object().shape({
  shopName: Yup.string().min(3),
  ownerName: Yup.string(),
  email: Yup.string().email(),
  phone: Yup.string()
    .matches(/^[0-9+\s()/-]+$/, 'Invalid phone format')
    .notRequired(),
  street: Yup.string(),
  city: Yup.string(),
  zip: Yup.string(),
  hasDelivery: Yup.boolean(),
});

export const productSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  category: Yup.string().required('Category is required'),
  price: Yup.number().positive('Price must be positive').required(),
  stock: Yup.number().integer().min(0).required(),
  suppliers: Yup.string().required(),
  photo: Yup.string().url('Must be a valid photo URL').nullable(),
});

export const incomeExpenseSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name is too short'),
  amount: Yup.string().required('Amount is required'),
  type: Yup.string()
    .oneOf(['Income', 'Expense', 'Error'], 'Invalid type')
    .required('Type is required'),
});

export const supplierSchema = Yup.object({
  name: Yup.string().required('Supplier name is required'),
  address: Yup.string().required('Address is required'),
  supplier: Yup.string().required('Company name is required'),
  date: Yup.string().required('Date is required'),
  amount: Yup.string().required('Amount is required'),
  status: Yup.string()
    .oneOf(['Active', 'Deactive'], 'Invalid status')
    .required('Status is required'),
});

export const customerSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name is too short'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  image: Yup.string().url('Should be a valid URL'),
  spent: Yup.string().required('Spent amount is required'),
});
