import {Component, ViewChild, viewChild} from '@angular/core';
import {SecondaryButtonComponent} from '../../_components/secondary-button/secondary-button.component';
import {PrimaryButtonComponent} from '../../_components/primary-button/primary-button.component';
import {FormsModule, NgForm, NgModel} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Certificado} from '../../interfaces/certificado';
import {CertificadoService} from '../../_services/certificado.service';
import {v4 as uuidv4} from 'uuid'
import {Router} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  @ViewChild('form') form!: NgForm;

  constructor(private certificadoService:CertificadoService, private router:Router) {
  }

  atividade: string = "";
  certificado: Certificado = {
    id: '',
    nome: "",
    atividades: [],
    createdAt: new Date(),
  }

  validFields(control: NgModel) {
    return control.touched && control.invalid;
  }

  validForm() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  addAtividade() {
    if(this.atividade.length < 3) {
      return;
    }
    this.certificado.atividades.push(this.atividade);
    this.atividade = ""
  }

  removeAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }
  submit() {
    if(!this.validForm()) {
      return;
    }
    this.certificado.id = uuidv4()
    this.certificadoService.addNewCertificado(this.certificado);
    this.router.navigate(['/certificado', this.certificado.id]);
    this.certificado = this.estadoInicial();
    this.form.resetForm();

  }

  estadoInicial(): Certificado {
    return {
      id: '',
      nome: "",
      atividades: [],
      createdAt: new Date(),
    }
  }

}
