export type Category = "Gaming" | "Gmae Development";

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  tags: string[];
  link: string;
}
