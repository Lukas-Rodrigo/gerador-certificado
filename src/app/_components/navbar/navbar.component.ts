import { Component, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {




}
