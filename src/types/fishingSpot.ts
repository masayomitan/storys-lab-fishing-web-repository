export interface FishingSpot {
  id: number
  name: string
  text: string
  tags: Array<{
    id: number
    name: string
  }>
}
