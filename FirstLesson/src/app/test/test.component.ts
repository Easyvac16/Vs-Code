import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-test',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './test.component.html',
	styleUrl: './test.component.css'
})
export class TestComponent {


	RandomNumber: number = Math.floor(Math.random() * 5) + 1;

	SomeText: Array<string> = ["aa", "bb", "cc", "dd"];

	isVisibility: boolean = true;

	IsActive: boolean = true;

	IsDisable: boolean = false;

	Today: Date = new Date();

	UpperText: string = "aSdAsFaAA";

	LowerText: string = "aSdAsFaAA";

	Price: number = 123;

	ClassObject = {
		'active': this.IsActive,
		'disable': this.IsDisable
	};

	ClassArray = ['active', 'disable'];

	color:string = "blue";

	fontSize:number = 24;
}
