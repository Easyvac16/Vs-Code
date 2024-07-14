import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-main-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './main-page.component.html',
	styleUrl: './main-page.component.css'
})
export class MainPageComponent {

	PIB:string = "grigoriev dmytro igorovich";
	Phone:number = 380688301023;
	Email:string = "gdima9051@gmail.com";
	City:string = "Khmelnitskiy";

	Sallary:number = 10000;

	BirthDate:Date = new Date(2006,1,3);
	

	// Photo:Array<string> = ["image.png","image1.png","image2.png"];

	// PhotoUrl: string = "";
	// currentIndex: number = 0;
  
	// ngOnInit() {
	//   this.PhotoUrl = this.Photo[this.currentIndex];
	// }
  
	// handleClickRight(): string {
	//   this.currentIndex = (this.currentIndex + 1) % this.Photo.length;
	//   this.PhotoUrl = this.Photo[this.currentIndex];
	//   return this.PhotoUrl;
	// }
  
	// handleClickLeft(): string {
	//   this.currentIndex = (this.currentIndex - 1 + this.Photo.length) % this.Photo.length;
	//   this.PhotoUrl = this.Photo[this.currentIndex];
	//   return this.PhotoUrl;
	// }

}
