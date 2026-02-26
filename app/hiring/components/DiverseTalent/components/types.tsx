export type Category = "Game Developers" | "Designers" | "ASO Managers";

export interface Talent {
  id: string;
  title: string;
  verify: string;
  image: string;
  category: Category;
  tags: string[];
  expYears: string;
}
