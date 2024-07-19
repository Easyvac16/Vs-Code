export interface Painting {
    title: string;
    year: number;
    artist: string;
    dimensions: string;
    location: string;
    imageUrl: string;
    thumbnailUrl: string; 
    relatedPaintings?: Painting[];
  }
  