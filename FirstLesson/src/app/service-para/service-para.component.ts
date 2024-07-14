import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Service/api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-service-para',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService, ApiService],
  templateUrl: './service-para.component.html',
  styleUrl: './service-para.component.css'
})
export class ServiceParaComponent {
  
  facts: any;

  
  constructor(public ApiService: ApiService) { 
    this.getFact()
  }


  getFact(): any {

    this.ApiService.get('fact').subscribe(
      (data) => {this.facts = data},
      (error) => {console.log(error);
      }
    );
  }



}
