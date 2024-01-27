export interface INews {
  response: string;
  message: string;
  data: Data;
  error: boolean;
}

 export interface Data {
  current_page: number;
  data: News[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

 export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

 export interface News {
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
  articles: Article[];
  category_news?: Categorynew[];
  category_course?: Categorycourse[];
  comments: Comment[];
}

 export interface Comment {
  id: number;
  comment: string;
  news_id: number;
  created_at?: string;
  updated_at?: string;
}

 export interface Categorynew {
  id: number;
  name: string;
  slug: string;
  created_at?: string;
  updated_at?: string;
}
 export interface Categorycourse {
    id: number;
    name: string;
    slug: string;
    created_at?: string;
    updated_at?: string;
  }

export interface Article {
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
