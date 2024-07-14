import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { ResumeComponent } from "./resume/resume.component";
import { LinksComponent } from "./links/links.component";
import { TestComponent } from "./test/test.component";
import { CommonModule } from '@angular/common';
import { ServiceParaComponent } from './service-para/service-para.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MainPageComponent, ResumeComponent, LinksComponent, TestComponent, CommonModule, ServiceParaComponent]
})
export class AppComponent {
  title = 'FirstLesson';
  Photo:string = "MyPhoto.jpg";

  widht:number = 300;
}
