import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_REACT_APP_SERVER_API});

// Adding bearer token into request header in each request for authentication
API.interceptors.request.use((req) => {
  if (localStorage.getItem("jwt_token")) {
    const jwt_token: String = JSON.parse(
      localStorage.getItem("jwt_token") || "{}"
    );
    req.headers.Authorization = `Bearer ${jwt_token}`;
  }
  return req;
});

// *************************************** Ad api endpoints ***************************************
export interface Ad {
  directingUrl: string;
  adUrl: string;
  id?: Number;
  advertiser?: string | null;
  description: string;
  title: string;
  organisationName: string
}

export interface AdvertiserInfo {
  firstName?: string;
  lastName?: string;
  email: string;
  role: "advertiser"
}

export const uploadAd = (adData: Ad) => API.post("/ads", adData);
export const updateAd = (adData: Ad) => API.patch("/ads/"+adData.id, adData);
export const fetchAdsByAdvertiser = (id: string | null) => API.get("/ads?advertiser="+id);
export const fetchAd = (id: string) => API.get("/ads/"+id);
export const fetchAdvertiserInfo = (jwt_token: string | null) => API.get("/users/"+jwt_token);
export const deleteAd = (id: string | undefined) => API.delete(`/ads/${id}`);


// *************************************** Auth api endpoints ***************************************
export type Role = "advertiser" | "publisher" | "visitor";

export interface UserAuthInfo {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: Role;
}

// export const signin = (userAuthInfo: UserAuthInfo) => API.post("/users/signin", userAuthInfo);
export const signin = (userAuthInfo: UserAuthInfo) => API.get(`users?email=${userAuthInfo.email}&password=${userAuthInfo.password}`); // temporary signin
export const signup = (userAuthInfo: UserAuthInfo) => API.post("/users", userAuthInfo);
