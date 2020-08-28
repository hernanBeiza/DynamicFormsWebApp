import { Component, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../../models';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

	@Input() public combobox:Campo;

  @Input() public formGroup:FormGroup;

  constructor() { }

  ngOnInit() {   	
    this.formGroup.addControl(this.combobox.idHTML, null);
    let encontrado = this.combobox.opciones.find(opcion=>opcion.seleccionado==true);
    if(encontrado){
      this.formGroup.controls[this.combobox.idHTML].setValue(encontrado.valor);    
    }
  }

}
