import { Component, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../../models';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

	@Input() public indice:number;
	@Input() public checkBoxGroup:Campo;
	@Input() public checkBox:Campo;

	@Input() public formGroup:FormGroup;

  constructor() { }

  ngOnInit() { }
  
  public obtenerControl():AbstractControl {
    let checkGroupArray:FormArray = this.formGroup.controls[this.checkBoxGroup.idHTML] as FormArray;
    return checkGroupArray.controls[this.indice];
  }

}
