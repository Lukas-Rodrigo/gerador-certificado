import {Component, Input, OnInit} from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';
import {Router} from '@angular/router';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Certificado} from '../../interfaces/certificado';
import {formatLocalDate} from '../../utils/formatdate';

@Component({
  selector: 'app-item-certificado',
  imports: [
    SecondaryButtonComponent
  ],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  constructor(private router: Router) {}
  @Input()
  certificado!: Certificado;

  redirecionarCertificado() {
    this.router.navigate(['/certificado', this.certificado.id]);
  }
  protected readonly format = format;
  protected readonly ptBR = ptBR;
  protected readonly formatLocalDate = formatLocalDate;
}
