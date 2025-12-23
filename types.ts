export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // Primary image (thumbnail)
  images?: string[]; // Optional array for carousel (e.g. Soda flavors)
  isNew?: boolean;
  isBestSeller?: boolean;
  details?: string; // e.g., "120g", "200g"
  subCategory?: 'alcoholic' | 'non-alcoholic'; // For drinks separation
  imageFit?: 'cover' | 'contain'; // Control image object-fit method
}

export interface MenuCategory {
  id: string;
  title: string;
  portugueseTitle?: string; // New subtitle field
  subtitle?: string; // Made optional
  items: MenuItem[];
  showPrice?: boolean;
}

export enum TagType {
  NEW = 'NEW',
  BEST_SELLER = 'BEST_SELLER'
}