export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialMedia {
  platform: string;
  link: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}
