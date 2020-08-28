import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiSwitchModule } from 'ngx-ui-switch';

import { CampoComponent } from './campo.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { CheckBoxGroupComponent } from './check-box-group/check-box-group.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';
import { SwitchComponent } from './switch/switch.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
	  CampoComponent,
  	ComboboxComponent, CheckBoxGroupComponent, CheckBoxComponent, 
  	RadioButtonComponent, RadioButtonGroupComponent, SwitchComponent, 
    LabelComponent
	],
  imports: [
    CommonModule,
    UiSwitchModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
	  CampoComponent,
  	ComboboxComponent, CheckBoxGroupComponent, CheckBoxComponent, 
  	RadioButtonComponent, RadioButtonGroupComponent, SwitchComponent, 
    LabelComponent
  ], 
  entryComponents: [
    CampoComponent,
    ComboboxComponent, CheckBoxGroupComponent, CheckBoxComponent, 
    RadioButtonComponent, RadioButtonGroupComponent, SwitchComponent, 
    LabelComponent
  ]
})
export class CampoModule { }
