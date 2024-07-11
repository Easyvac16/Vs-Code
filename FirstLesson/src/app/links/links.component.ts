import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {

	Index:number = 0;

	Links:Array<string> = ["https://github.com/Easyvac16","https://www.facebook.com/profile.php?id=61562042255336","https://www.instagram.com/dima9322/"];
	Names:Array<string> = ["GitHub","Facebook","Instagram"];

	

}
