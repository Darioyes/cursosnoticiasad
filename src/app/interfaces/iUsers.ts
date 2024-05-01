export interface iUsers {
  response: string;
  message: string;
  data: Data[];
  error: boolean;
}

export interface Data {
  current_page: number;
  data: IUser[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  admin_news: string;
  send_mail: string;
  terms: string;
  email_verified_at?: string ;
  created_at?: string;
  updated_at?: string;
}
