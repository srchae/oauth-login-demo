import axios from "axios";

import { interceptor } from "./interceptor";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const apiClient = axios.create({
  baseURL: BASE_URL,
});

interceptor(apiClient);

interface PostRegister {
  email: string | null;
  name: string | null;
  emailConsent?: boolean;
  smsConsent?: boolean;
}

const postAuthCheckSocial = async (email: string) => {
  const response = await apiClient.post(`${BASE_URL}/auth/check-social`, {
    email,
  });
  return response.data;
};

const postRegister = async (data: PostRegister) => {
  const response = await apiClient.post(`${BASE_URL}/users/register`, data);
  return response.data;
};

export const api = {
  postAuthCheckSocial,
  postRegister,
};
