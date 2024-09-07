export type FishingSpot = {
  id: number;
  name: string;
  text: string;
  tags: Array<{
    id: number;
    name: string;
  }>;
};

type FishingSpotBoxProps = {
    id: number;
    name: string;
    text: string;
    tags: Array<{
      id: number;
      name: string;
    }>;
  };
  
  type FishingSpotBoxComponentProps = {
    fishingSpots: FishingSpotBoxProps[];
  };
  