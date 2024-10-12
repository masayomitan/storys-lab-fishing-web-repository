export interface FishingSpot {
  id: number
  name: string
  image_url: string;
  text: string
  tags: Array<{
    id: number
    name: string
  }>
}
