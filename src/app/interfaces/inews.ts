export interface INews {
  response: string;
  message: string;
  data: IData;
  error: boolean;
}

 export interface IData {
  current_page: number;
  data: INewsOne[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

 export interface ILink {
  url?: string;
  label: string;
  active: boolean;
}

 export interface INewsOne {
  id: number;
  epigraph?: string;
  title: string;
  slug?: string;
  image?: string;
  content: string;
  featured: number;
  visible: number;
  created_at?: string;
  updated_at?: string;
  category_news_id?: number;
  category_course_id?: number;
  articles: IArticle[];
  category_news?: ICategorynew[];
  category_course?: ICategorycourse[];
  comments: Comment[];
}

 export interface IComment {
  id: number;
  comment: string;
  news_id: number;
  created_at?: string;
  updated_at?: string;
}

 export interface ICategorynew {
  id: number;
  name: string;
  slug: string;
  created_at?: string;
  updated_at?: string;
}
 export interface ICategorycourse {
    id: number;
    name: string;
    slug: string;
    created_at?: string;
    updated_at?: string;
  }

export interface IArticle {
  id: number;
  subtitle: string;
  entrance: string;
  body_news: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
  news_id: number;
  article_image_id?: any;
}
