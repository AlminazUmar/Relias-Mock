import { Component } from '@angular/core';
import { StaticDataService } from '../../core/service/static-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { StaticFunction } from '../../core/service/static-function.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FormsModule,ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems: any[] = [];

  constructor(private staticDataService: StaticDataService,private staticFunctionService: StaticFunction){}

  ngOnInit():void {
    this.menuItems = this.staticDataService.getNavBarItems();
  }
  handleClick(path: string): void {
    this.staticFunctionService.handleClick(path);
  }

}
