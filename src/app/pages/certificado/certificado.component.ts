import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SecondaryButtonComponent} from '../../_components/secondary-button/secondary-button.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CertificadoService} from '../../_services/certificado.service';
import {Certificado} from '../../interfaces/certificado';
import {formatLocalDate} from '../../utils/formatdate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [
    SecondaryButtonComponent,
    RouterLink
  ],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) {
  }
  id: string | null = "";
  certificado!: Certificado | undefined;
  @ViewChild('certificadoRef') certificadoContent!: ElementRef;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id)
    })
  }

  downloadCertificado() {
    html2canvas(this.certificadoContent.nativeElement, {scale: 2}).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `certificado_${this.certificado?.nome}.png`.replaceAll(" ", "_")
      link.click()
    })
  }

  protected readonly formatLocalDate = formatLocalDate;
}
