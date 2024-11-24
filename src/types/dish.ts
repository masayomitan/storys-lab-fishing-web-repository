export interface Ingredient {
  name: string;
  amount: string;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  kind: string;
  DishImages: DishImage[];

  image_url: string;
}

export interface DishImage {
  id: number;
  dish_id: string;
  image_url: string;
  sort: number;
  is_main: boolean;
}  
