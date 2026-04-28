import axios, { AxiosError } from 'axios';
export type ApiError = AxiosError<{ error: string }>;

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL + '/api';

export const api = axios.create({
  baseURL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login'; // Або редирект через useRouter
    }
    return Promise.reject(error);
  }
);



// export const login = async (data: LoginData) => {
//   const res = await api.post('/user/login', data);
//   return res.data;
// };


// export const register = async (payload: RegisterRequest): Promise<User> => {
//   const res = await nextServer.post<User>("/auth/register", payload);
//   return res.data;
// };

// export const login = async (payload: RegisterRequest) => {
//   const res = await nextServer.post<User>(`/auth/login`, payload);
//   return res.data;
// };