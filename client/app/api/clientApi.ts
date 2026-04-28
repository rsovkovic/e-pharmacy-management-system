import { AuthResponse, LoginRequest, RegisterRequest, RegisterResponse, ShopType } from "@/types/types";
import { api } from "./api";

export const getShops = async (): Promise<ShopType[]> => {
  const {data} = await api.get<ShopType[]>('/shop');
  return data;
};


export const register = async (userData: RegisterRequest) => {
  const {data} = await api.post<RegisterResponse>('/user/register', userData);
  return data;
};

export const login = async (userData: LoginRequest) => {
    const { data } = await api.post<AuthResponse>('/user/login', userData);
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post('/user/logout');
};

// export const register = async (
//   userData: RegisterData,
// ): Promise<AuthResponse> => {
//   const { data } = await api.post<AuthResponse>('/users/signup', userData);
//   return data;
// };

// export const login = async (userData: LoginData): Promise<AuthResponse> => {
//   const { data } = await api.post<AuthResponse>('/users/signin', userData);
//   return data;
// };