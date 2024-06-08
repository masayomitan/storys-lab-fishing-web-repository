import { Dish } from '../types/dish'
import { FishCategory } from '../types/fishCategory'
import { FishingMethod } from '../types/fishingMethod'
import { FishImage } from '../types/fishImage'

export interface Fish {
  id: string;
  name: string;
  family_name: string;
  scientific_name: string;
  fish_category: number;
  description: string;
  length: number;
  weight: number;
  habitat: string;
  depth_range: string;
  water_temperature_range: string;
  conservation_status: string;
  FishCategory: FishCategory;
  FishingMethods: FishingMethod[];
  Dishes: Dish[];
  FishImages: FishImage[];

  image_url: string;
}
