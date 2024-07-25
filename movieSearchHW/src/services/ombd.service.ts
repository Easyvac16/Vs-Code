import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class OmdbService {
	title: string = "";
	movie: any;
	error: string = "";
	constructor(private apiService: ApiService) { }

	getMovie(title: string, year?: string, plot: string = 'short'): Observable<any> {
		let endPoint = `?t=${title}&plot=${plot}`;
		if (year) {
		  endPoint += `&y=${year}`;
		}
		return this.apiService.get<any>(endPoint);
	  }

	private data = new BehaviorSubject<string>("marvel");

	currentData = this.data.asObservable();

	changeData(data: string) {
		this.data.next(data);
	}

	searchMovie(title: string, year?: string, plot: string = 'short'): void {
		if (title) {
		  this.getMovie(title, year, plot).subscribe(
			data => {
			  if (data.Response === 'True') {
				this.changeData(title);  
			  } else {
				this.changeData('');  
			  }
			},
			error => {
			  this.changeData('');  
			}
		  );
		}
	  }
}
