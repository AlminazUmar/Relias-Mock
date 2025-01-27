import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { StaticFunction } from '../../core/service/static-function.service';

@Component({
  selector: 'app-get-started',
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {
  constructor (private staticFunction:StaticFunction){}
  
    handleClick(path:string){
      this.staticFunction.handleClick(path);
    }
}
