import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

    Skils:Array<string> = ["JS+HTML","C++","C#","Python","MS SQL","Arduino","WPF"];
    Years:number = 3;
    Sertificate:string = "None(";

    
}
