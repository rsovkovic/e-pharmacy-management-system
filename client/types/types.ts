

export interface CustomerType {
  name: string;
  email: string;
  photo: string;
  spent: string;
  phone: string;
  address: string;
  register_date: string;
}

export interface IncomeExpenseType {
  amount: string;
  name: string;
  type: string;
}

export interface OrderType {
  photo: string;
  name: string;
  address: string;
  products: string;
  price: string;
  status: string;
  order_date: string;
}

export interface ProductType {
  id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
  shopId: string;
}

export interface ReviewsType {
  name: string;
  testimonial: string;
}
export interface ShopType {
  shopName: string;
  ownerName: string;
  email: string;
  street: string;
  zip: string;
  name?: string;
  address?: string;
  city: string;
  phone: string;
  rating: number;
  hasDelivery: boolean;
  logoUrl?: string;
  owner: string;
}

export interface SupplierType {
  name: string;
  address: string;
  supplier: string;
  date: string;
  amount: string;
  status: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  token?: string;
}

export interface LoginRequest {
  email: string;
  password: string; 
}

export interface RegisterRequest  {
  name: string;
  email: string;
  password: string; 
  phone: string;

}

export interface AuthResponse {
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export interface RegisterResponse {
  user: {
    name: string;
    email: string;
    role: string;
  };
}