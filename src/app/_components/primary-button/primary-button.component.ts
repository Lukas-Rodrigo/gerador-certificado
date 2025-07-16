import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [
    NgStyle
  ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {

  @Input() titleButton: string = ""
  @Input() disabled: boolean = false;


}
