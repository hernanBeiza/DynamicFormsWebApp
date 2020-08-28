import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { PestanaComponent } from './pestana/pestana.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CampoModule } from './campo/campo.module';

@NgModule({
  declarations: [
  	BarraLateralComponent, 
  	PestanaComponent, FormularioComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgbTabsetModule,
    CampoModule
  ],
  exports: [
  	BarraLateralComponent
  ],
  entryComponents: [
    FormularioComponent
  ]
})
export class BarraLateralModule { }
