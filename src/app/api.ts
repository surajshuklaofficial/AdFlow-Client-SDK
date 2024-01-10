import axios from "axios";
import { Ad, UserAuthInfo, Website } from "./types";

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

// *************************************** Publisher api endpoints ***************************************
export const addWebsite = (websiteData : Website) => API.post("/websites", websiteData);
export const getWebsiteByUser = (user: string | null) => API.get("/websites?user="+user);

// *************************************** Ad api endpoints ***************************************

export const uploadAd = (adData: Ad) => API.post("/ads", adData);
export const updateAd = (adData: Ad) => API.patch("/ads/"+adData.id, adData);
export const fetchAdsByAdvertiser = (id: string | null) => API.get("/ads?advertiser="+id);
export const fetchAd = (id: string) => API.get("/ads/"+id);
export const deleteAd = (id: string | undefined) => API.delete(`/ads/${id}`);


// *************************************** Auth api endpoints ***************************************
export const fetchUserInfo = (jwt_token: string | null) => API.get("/users/"+jwt_token);

// *************************************** Auth api endpoints ***************************************

// export const signin = (userAuthInfo: UserAuthInfo) => API.post("/users/signin", userAuthInfo);
export const signin = (userAuthInfo: UserAuthInfo) => API.get(`users?email=${userAuthInfo.email}&password=${userAuthInfo.password}`); // temporary signin
export const signup = (userAuthInfo: UserAuthInfo) => API.post("/users", userAuthInfo);
