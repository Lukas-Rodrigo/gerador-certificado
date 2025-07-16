import { Routes } from '@angular/router';
import {CertificadosComponent} from './pages/certificados/certificados.component';
import {CertificadoFormComponent} from './pages/certificado-form/certificado-form.component';
import {CertificadoComponent} from './pages/certificado/certificado.component';

export const routes: Routes = [
  {
    path: "",
    component: CertificadosComponent,
    data: {title: 'Certificados Gerados'},
  },
  {
    path: "certificado/novo",
    component: CertificadoFormComponent,
    data: {title: 'Gerar certificado'},
  },
  {
    path: "certificado/:id",
    component: CertificadoComponent,
    data: {title: 'Certificado'},
  }
];
