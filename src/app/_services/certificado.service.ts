import { Injectable } from '@angular/core';
import {Certificado} from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  certificados: Certificado[] = [];

  constructor() { }

  addNewCertificado(newCertificado: Certificado) {
    if (newCertificado == null) {
      return;
    }
    this.certificados.push({...newCertificado});
    localStorage.setItem('certificado', JSON.stringify(this.certificados));
  }

}
