import { Component, Input,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title!:string;
  @Input() highlight?:boolean;
  @Output() onClick = new EventEmitter<string>();

  handleClick(){
    this.onClick.emit();
  }
}
