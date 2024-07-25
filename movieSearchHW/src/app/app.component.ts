import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbService } from '../services/ombd.service';
import { ServiceParaComponent } from "./movie-search/service-para.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceParaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movieSearchHW';
  data:string = "";

	constructor(private ombdService:OmdbService) 
	{
		this.data = "constructor";
	}

	ngOnInit()
	{
		this.ombdService.currentData.subscribe(data => this.data = data);
	}
  changeData(data:string = "marvel")
	{
		this.ombdService.searchMovie(data);
		
	}
}
