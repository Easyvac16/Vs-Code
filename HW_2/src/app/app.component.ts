import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaintingService } from './painting.service';
import { PaintingGalleryComponent } from "../painting-gallery/painting-gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaintingGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HW_2';

  

}
