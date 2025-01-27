import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { StaticFunction } from '../../core/service/static-function.service';
import { StaticDataService } from '../../core/service/static-data.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeContent:any[]=[];
  constructor (private staticFunction:StaticFunction,private staticData:StaticDataService){}

  ngOnInit(){
    this.homeContent = this.staticData.getHomeContent();
  }
  handleClick(path:string){
    this.staticFunction.handleClick(path);
  }
}
