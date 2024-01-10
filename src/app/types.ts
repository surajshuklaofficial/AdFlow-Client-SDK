export interface Website {
  id: any,
  websiteName: string;
  user: string | null;
  date: Date;
}

export interface Ad {
  directingUrl: string;
  adUrl: string;
  id?: Number;
  advertiser?: string | null;
  description: string;
  title: string;
  organisationName: string
}

export interface userInfo {
  firstName?: string;
  lastName?: string;
  email: string;
  role: Role;
}

export type Role = "advertiser" | "publisher" | ""

export interface UserAuthInfo {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: Role;
}