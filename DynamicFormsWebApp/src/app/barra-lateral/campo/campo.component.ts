import { Component, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, ViewChild, ViewChildren, Input, Output, 
	OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../models';
import { TipoCampoEnum } from './../enums';

import { LabelComponent } from './label/label.component';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';
import { CheckBoxGroupComponent } from './check-box-group/check-box-group.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { SwitchComponent } from './switch/switch.component';

@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.scss']
})
export class CampoComponent implements OnInit, AfterViewInit, OnDestroy {

	public TipoCampoEnum = TipoCampoEnum;
	
	@Input() formGroup:FormGroup;
	@Input() campo:Campo;

  //Nombre con # en el html
  @ViewChild('nido', {static: false, read:ViewContainerRef}) private nidoView:ViewContainerRef;

  constructor(private formBuilder:FormBuilder, private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.iniciarComponentes();
  }

  private iniciarComponentes():void {
  	
		  switch (this.campo.tipoCampo.id) {
	      case TipoCampoEnum.Label:
	        var labelComponentFactory:ComponentFactory<LabelComponent> = this.componentFactoryResolver.resolveComponentFactory(LabelComponent);
	        let labelComponent = this.nidoView.createComponent(labelComponentFactory);
	        labelComponent.instance.label = this.campo;

	        labelComponent.changeDetectorRef.detectChanges();
	        break;
	      
	      case TipoCampoEnum.RadioButtonGroup:
	        this.formGroup.addControl(this.campo.idHTML, new FormControl('', null));

	        var radioButtonGroupComponentFactory:ComponentFactory<RadioButtonGroupComponent> = this.componentFactoryResolver.resolveComponentFactory(RadioButtonGroupComponent);
	        let radioButtonGroupComponent = this.nidoView.createComponent(radioButtonGroupComponentFactory);

	        radioButtonGroupComponent.instance.radioButtonGroup = this.campo;
	        radioButtonGroupComponent.instance.formGroup = this.formGroup;

	        radioButtonGroupComponent.changeDetectorRef.detectChanges();
		      break;

	      case TipoCampoEnum.CheckboxGroup:
	        //this.formGroup.addControl(campo.idHTML, new FormControl('', null));
		      //Se define dentro del grupo, ya que se agregan las opciones como FormArray
		      
	        var checkBoxGroupComponentFactory:ComponentFactory<CheckBoxGroupComponent> = this.componentFactoryResolver.resolveComponentFactory(CheckBoxGroupComponent);
	        let checkBoxGroupComponent = this.nidoView.createComponent(checkBoxGroupComponentFactory);

	        checkBoxGroupComponent.instance.checkBoxGroup = this.campo;
	        checkBoxGroupComponent.instance.formGroup = this.formGroup;
	        
	        checkBoxGroupComponent.changeDetectorRef.detectChanges();
		      break;
      
	      case TipoCampoEnum.Combobox:
	        this.formGroup.addControl(this.campo.idHTML, new FormControl('', null));

	        var comboboxComponentFactory:ComponentFactory<ComboboxComponent> = this.componentFactoryResolver.resolveComponentFactory(ComboboxComponent);
	        let comboboxComponent = this.nidoView.createComponent(comboboxComponentFactory);

	        comboboxComponent.instance.combobox = this.campo;
	        comboboxComponent.instance.formGroup = this.formGroup;
	        
	        comboboxComponent.changeDetectorRef.detectChanges();
		      break;

	      case TipoCampoEnum.Switch:
	        this.formGroup.addControl(this.campo.idHTML, new FormControl('', null));

	        var switchComponentFactory:ComponentFactory<SwitchComponent> = this.componentFactoryResolver.resolveComponentFactory(SwitchComponent);
	        let switchomponent = this.nidoView.createComponent(switchComponentFactory);

	        switchomponent.instance.switch = this.campo;
	        switchomponent.instance.formGroup = this.formGroup;
	        
	        switchomponent.changeDetectorRef.detectChanges();
		      break;      
	    }

	    console.log(this.formGroup);

	}

	ngOnDestroy() {

	}


}
