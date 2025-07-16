import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "./_components/navbar/navbar.component";
import {BaseUiComponent} from './_components/base-ui/base-ui.component';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {CertificadoService} from './_services/certificado.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado-angular';

  constructor(
    private certificadoService: CertificadoService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const certificados = localStorage.getItem('certificado');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }

}
