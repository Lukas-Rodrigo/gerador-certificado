import {Component, OnInit} from '@angular/core';
import {ItemCertificadoComponent} from '../../_components/item-certificado/item-certificado.component';
import {CertificadoService} from '../../_services/certificado.service';
import {Certificado} from '../../interfaces/certificado';
import {SecondaryButtonComponent} from '../../_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-certificados',
  imports: [
    ItemCertificadoComponent,
    SecondaryButtonComponent
  ],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {

  constructor(private certificadoService: CertificadoService) {
  }
  certificados: Certificado[] = [];


  ngOnInit() {
    this.certificados = this.certificadoService.certificados.reverse();
  }

}
