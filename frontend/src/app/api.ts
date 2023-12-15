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

// export const fetchContentsByChannel = (channelID: string) => API.get(`/contents/${channelID}`);
// export const fetchContentByID = (contentID: string) => API.get(`/watch/${contentID}`);
// export const fetchChannelByContent = (channelID: string) => API.get(`/watch/${channelID}`);
// export const uploadContent = (
//   contentData: FormData,
//   channelID: string,
//   channelName: string,
//   channelLogo: string
// ) =>
//   API.post(`/channel/${channelID}/videos/upload?channelname=${channelName}&channellogo=${channelLogo}`, contentData);
// export const fetchContents = () => API.get('/contents');
// export const deleteContent = (channelID: string) => API.delete(`/content/delete/${channelID}`);

export interface Ad {
  directingUrl: string;
  adUrl: string;
  id?: Number;
  advertiser?: Number
}

export const uploadAd = (adData: Ad) => API.post("/ads", adData);
export const fetchAdsByAdvertiser = (id: Number | null) => API.get("/ads?advertiser="+id);

export interface UserAuthInfo {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: "advertiser" | "publisher" | "visitor";
}

// export const signin = (userAuthInfo: UserAuthInfo) => API.post("/users/signin", userAuthInfo);
export const signin = (userAuthInfo: UserAuthInfo) => API.get(`users?email=${userAuthInfo.email}&password=${userAuthInfo.password}`); // temporary signin
export const signup = (userAuthInfo: UserAuthInfo) => API.post("/users", userAuthInfo);
