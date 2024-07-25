import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OmdbService } from '../../services/ombd.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-service-para',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ApiService],
  templateUrl: './service-para.component.html',
  styleUrl: './service-para.component.css'
})
export class ServiceParaComponent {
  
  title: string = '';
  year: string = '';
  plot: string = 'short';
  movie: any;
  error: string = '';

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
    this.omdbService.currentData.subscribe(data => {
      this.title = data;
      this.fetchMovieDetails(data);
    });
  }

  fetchMovieDetails(title: string) {
    if (title) {
      this.omdbService.getMovie(title, this.year, this.plot).subscribe(
        data => {
          if (data.Response === 'True') {
            this.movie = data;
            this.error = '';
          } else {
            this.movie = null;
            this.error = data.Error;
          }
        },
        error => {
          this.movie = null;
          this.error = 'Error fetching movie data';
        }
      );
    }
  }

  changeData(data: string = 'flash') {
    this.omdbService.searchMovie(data, this.year, this.plot);
  }

  searchMovie() {
    this.omdbService.searchMovie(this.title, this.year, this.plot);
  }

}
