import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { StaticFunction } from '../../core/service/static-function.service';
import { StaticDataService } from '../../core/service/static-data.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ButtonComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeContent:any[]=[];
  homeContentSection3:any[]=[];
  section3Active:number=-1;
  section3ActiveImage:string='images/section3-1.webp';
  constructor (private staticFunction:StaticFunction,private staticData:StaticDataService){}

  ngOnInit(){
    this.homeContent = this.staticData.getHomeContent();
    this.homeContentSection3 = this.staticData.getHomeContentSection3();
  }
  handleClick(path:string){
    this.staticFunction.handleClick(path);
  }
  handleSection3Click(i:number){
    if(this.section3Active === i){
      this.section3Active = -1;
    }
    else{
      this.section3Active = i;
      this.section3ActiveImage = this.homeContentSection3[i]?.image || '';
    }
  }
}
