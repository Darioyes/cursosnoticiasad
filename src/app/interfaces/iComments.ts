export interface IComments{
  response: string;
  message: string;
  data: IDataComment;
  error: boolean;
}

export interface IDataComment {
  current_page: number;
  data: IComment[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

interface ILink {
  url: null | string;
  label: string;
  active: boolean;
}

export interface IComment {
  id: number;
  name: string;
  email: string;
  message: string;
  file: null | string;
  created_at: string;
  updated_at: string;
}
