import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { ResumeComponent } from "./resume/resume.component";
import { LinksComponent } from "./links/links.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MainPageComponent, ResumeComponent, LinksComponent]
})
export class AppComponent {
  title = 'FirstLesson';
}
