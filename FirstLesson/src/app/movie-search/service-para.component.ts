import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Service/api.service';
import { take } from 'rxjs';
import { OmdbService } from '../../Service/ombd.service';
import { DataServiceService } from '../../Service/data-service.service';

@Component({
  selector: 'app-service-para',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService, ApiService],
  templateUrl: './service-para.component.html',
  styleUrl: './service-para.component.css'
})
export class ServiceParaComponent {

  // title: string = '';
  // movie: any;
  // error: string = '';
  // private dataService = new DataServiceService;

  // constructor(private omdbService: OmdbService ) {}

  // ngOnInit()
  // {
  // 	this.dataService.currentData.subscribe(data => this.title = data);
  // }


  // changeData(data:string = "flash")
  // {
  // 	this.dataService.changeData(data);
  //   this.omdbService.searchMovie(data);
  // }

  // searchMovie()
  // {
  //   this.omdbService.searchMovie(this.title);
  // }

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
