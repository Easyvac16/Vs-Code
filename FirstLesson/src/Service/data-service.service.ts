import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataServiceService {

	constructor() { }

	private data = new BehaviorSubject<string>("Default data");

	currentData = this.data.asObservable();

	changeData(data:string)
	{
		this.data.next(data);
	}
}
