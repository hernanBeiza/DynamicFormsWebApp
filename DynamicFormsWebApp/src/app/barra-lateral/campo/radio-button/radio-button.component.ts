import { Component, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../../models';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

	@Input() radioButtonGroup:Campo;
	@Input() radioButton:Campo;

	@Input() formGroup:FormGroup;

  constructor() { }

  ngOnInit() { 

  }

  public obtenerControl(control:string):AbstractControl {
    let formControl = this.formGroup.get(control);
    return formControl;
  }

}
