import { DishImage } from '../types/dishImage'

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  kind: string;
  DishImages: DishImage[];

  image_url: string;
}

export default Dish;
