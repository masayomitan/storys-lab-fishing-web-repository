import { Dish } from '../types/dish'

export interface Fish {
  id: number
  name: string
  family_name: string
  scientific_name: string
  fish_category: number
  description: string
  length: number
  weight: number
  habitat: string
  depth_range_min: string
  depth_range_max: string
  water_temperature_range_min: string
  water_temperature_range_max: string
  conservation_status: string
  FishCategory: FishCategory
  FishingMethods: FishingMethod[]
  Dishes: Dish[]
  Images: any[]

  image_url: string
}

export interface FishCategory {
  id: number
  name: string
  description: string
}

export interface Image {
  id: string
  fish_id: string
  image_url: string
  sort: number
  is_main: boolean
}

export interface FishingMethod {
  id: string
  name: string
  description: string
  difficulty_level: string
  is_traditional: boolean
}

export interface FishingSpot {
  id: number
  name: string
  image_url: string
  text: string
  tags: Array<{
    id: number
    name: string
  }>
}


