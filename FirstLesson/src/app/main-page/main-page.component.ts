import { Component } from '@angular/core';

@Component({
	selector: 'app-main-page',
	standalone: true,
	imports: [],
	templateUrl: './main-page.component.html',
	styleUrl: './main-page.component.css'
})
export class MainPageComponent {

	PIB:string = "Grigoriev Dmytro Igorovich";
	Phone:number = 380688301023;
	Email:string = "gdima9051";
	City:string = "Khmelnitskiy";
	

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
