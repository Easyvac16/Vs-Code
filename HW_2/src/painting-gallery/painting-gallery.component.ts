import { Component } from '@angular/core';
import { Painting } from '../app/painting.model';
import { PaintingService } from '../app/painting.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painting-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painting-gallery.component.html',
  styleUrl: './painting-gallery.component.scss'
})
export class PaintingGalleryComponent {
  paintings: Painting[] = [];
  selectedPainting: Painting | null = null;

  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.paintings = this.paintingService.getPaintings();
  }

  selectPainting(painting: Painting): void {
    this.selectedPainting = painting;
  }

  closeDetail(): void {
    this.selectedPainting = null;
  }

  selectRelatedPainting(painting: Painting): void {
    this.selectedPainting = painting;
  }
}
