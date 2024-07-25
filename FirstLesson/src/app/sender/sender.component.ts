import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from '../../Service/data-service.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {

  // constructor()
  // {
  //   this.reciever = "";
  // }
  // @Input() reciever:string;


  // @Output() sendToOutput = new EventEmitter<string>();

  // sendData()
  // {
  //   this.sendToOutput.emit("Symbol from sender sada");
  // }

  data:string = "";

	constructor(private dataService:DataServiceService) 
	{
		this.data = "constructor";
	}

	ngOnInit()
	{
		this.dataService.currentData.subscribe(data => this.data = data);
	}

	changeData(data:string = "Data from children")
	{
		this.dataService.changeData(data);
	}

}
