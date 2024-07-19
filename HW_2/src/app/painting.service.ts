import { Injectable } from '@angular/core';
import { Painting } from './painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  private paintings: Painting[];

  constructor() {
    this.paintings = this.createPaintings();
    this.linkRelatedPaintings();
  }

  private createPaintings(): Painting[] {
    return [
  {
      title: 'Starry Night',
      year: 1889,
      artist: 'Vincent van Gogh',
      dimensions: '73.7 cm × 92.1 cm',
      location: 'Museum of Modern Art, New York City',
      imageUrl: 'assets/starry_night.jpg',
      thumbnailUrl: 'assets/starry_night.jpg'
    },
    {
      title: 'Café Terrace at Night',
      year: 1888,
      artist: 'Vincent van Gogh',
      dimensions: '80.7 cm × 65.3 cm',
      location: 'Kröller-Müller Museum, Otterlo, Netherlands',
      imageUrl: 'assets/cafe_terrace.jpg',
      thumbnailUrl: 'assets/cafe_terrace.jpg'
    },
    {
      title: 'Irises',
      year: 1889,
      artist: 'Vincent van Gogh',
      dimensions: '71 cm × 93 cm',
      location: 'J. Paul Getty Museum, Los Angeles',
      imageUrl: 'assets/Irises.jpg',
      thumbnailUrl: 'assets/Irises.jpg'
    },
    {
      title: 'The Potato Eaters',
      year: 1885,
      artist: 'Vincent van Gogh',
      dimensions: '82 cm × 114 cm',
      location: 'Van Gogh Museum, Amsterdam',
      imageUrl: 'assets/potato_eaters.jpg',
      thumbnailUrl: 'assets/potato_eaters.jpg'
    },
    {
      title: 'Mona Lisa',
      year: 1503,
      artist: 'Leonardo da Vinci',
      dimensions: '77 cm × 53 cm',
      location: 'Louvre, Paris',
      imageUrl: 'assets/OIP.jpg',
      thumbnailUrl: 'assets/OIP.jpg'
    },
    {
      title: 'The Last Supper',
      year: 1498,
      artist: 'Leonardo da Vinci',
      dimensions: '460 cm × 880 cm',
      location: 'Santa Maria delle Grazie, Milan',
      imageUrl: 'assets/last_supper.jpg',
      thumbnailUrl: 'assets/last_supper.jpg'
    },
    {
      title: 'Lady with an Ermine',
      year: 1489,
      artist: 'Leonardo da Vinci',
      dimensions: '54 cm × 39 cm',
      location: 'Czartoryski Museum, Kraków',
      imageUrl: 'assets/lady_with_ermine.jpg',
      thumbnailUrl: 'assets/lady_with_ermine.jpg'
    },
    {
      title: 'Vitruvian Man',
      year: 1490,
      artist: 'Leonardo da Vinci',
      dimensions: '34.6 cm × 25.5 cm',
      location: 'Gallerie dell\'Accademia, Venice',
      imageUrl: 'assets/vitruvian_man.jpg',
      thumbnailUrl: 'assets/vitruvian_man .jpg'
    }
  ];

  }
  private linkRelatedPaintings(): void {
    const vanGoghPaintings = this.paintings.filter(p => p.artist === 'Vincent van Gogh');
    const daVinciPaintings = this.paintings.filter(p => p.artist === 'Leonardo da Vinci');

    this.paintings.forEach(painting => {
      if (painting.artist === 'Vincent van Gogh') {
        painting.relatedPaintings = vanGoghPaintings.filter(p => p !== painting);
      } else if (painting.artist === 'Leonardo da Vinci') {
        painting.relatedPaintings = daVinciPaintings.filter(p => p !== painting);
      }
    });
  }

  getPaintings(): Painting[] {
    return this.paintings;
  }
}
