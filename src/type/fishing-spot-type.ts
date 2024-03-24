export type FishingSpotBoxProps = {
  id: number;
  name: string;
  text: string;
  tags: Array<{
    id: number;
    name: string;
  }>;
};
  
export type FishingSpotBoxComponentProps = {
  fishingSpots: FishingSpotBoxProps[];
};
