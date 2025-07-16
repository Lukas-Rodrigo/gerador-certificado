import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  imports: [
    NgStyle
  ],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {

  @Input() titleButton: string = ""

  @Input() typeIcon: string = ""
  @Input() disabled: boolean = false;

}
