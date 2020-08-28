import { Component, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../../models';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

	@Input() public switch:Campo;

  @Input() public formGroup:FormGroup;

  constructor() { }

  ngOnInit() {   
    this.formGroup.addControl(this.switch.idHTML, null);
  	this.formGroup.controls[this.switch.idHTML].setValue(this.switch.seleccionado);
  }

  public onChange($event:any):void {
  	this.formGroup.controls[this.switch.idHTML].setValue($event);
  }

}
