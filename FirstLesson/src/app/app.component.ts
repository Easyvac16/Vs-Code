import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { ResumeComponent } from "./resume/resume.component";
import { LinksComponent } from "./links/links.component";
import { TestComponent } from "./test/test.component";
import { CommonModule } from '@angular/common';
import { ServiceParaComponent } from './movie-search/service-para.component';
import { SenderComponent } from "./sender/sender.component";
import { Sender1Component } from "./sender1/sender1.component";
import { DataServiceService } from '../Service/data-service.service';
import { OmdbService } from '../Service/ombd.service';
import { TransportComponent } from "./transport/transport.component";


@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [RouterOutlet, MainPageComponent, ResumeComponent, LinksComponent, TestComponent, CommonModule, ServiceParaComponent, SenderComponent, Sender1Component, TransportComponent]
})
export class AppComponent {
	// title = 'FirstLesson';
	// Photo:string = "MyPhoto.jpg";

	// widht:number = 300;

	// sender1Data:string = "";

	// sender2Data:string = "";

	// symbols: string = "some symbols";

	// dataRec:string = "";

	// recieveDataFromSender1(data: string) 
	// {
	// 	console.log(data);

	// 	this.sender1Data = data;
	// }
	// recieveDataFromSender2(data: string) 
	// {
	// 	console.log(data);

	// 	this.sender2Data = data;
	// }

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
