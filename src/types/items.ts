export interface Item {
    id: number;
    name: string;
    image: string;
    location: string | null;
    lat: number | null;
    lng: number | null;
    price: number;
    size: string | null;
    bedroom: number | null;
    bathroom: number | null;
    garden: boolean | null;
    parking: boolean | null;
    description: string | null;
    createdAt: Date;
  }

  export interface ItemCardProps {
    name: string | null;
    description: string | null;
    image: string | undefined;
  }
