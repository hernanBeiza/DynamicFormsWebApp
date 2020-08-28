import { Component, ComponentFactory, ComponentFactoryResolver, 
	ChangeDetectorRef,
	ComponentRef,
	ViewContainerRef, ViewChild, ViewChildren, QueryList, Input, Output, 
	OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../../models';

import { RadioButtonComponent } from './../radio-button/radio-button.component';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
})
export class RadioButtonGroupComponent implements OnInit, AfterViewInit, OnDestroy {

	@Input() public radioButtonGroup:Campo;

  @Input() public formGroup:FormGroup;

  //Nombre con # en el html
  @ViewChild('radioButtonNidoView', {static: false, read:ViewContainerRef}) private radioButtonNidoView:ViewContainerRef;

  constructor(private formBuilder:FormBuilder, private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  	let encontrado = this.radioButtonGroup.opciones.find(opcion=>opcion.seleccionado==true);
  	if(encontrado){
	  	this.formGroup.controls[this.radioButtonGroup.idHTML].setValue(encontrado.valor);
  	}
  }

	ngAfterViewInit() {

		this.radioButtonGroup.opciones.forEach(opcion=>{
	    var radioButtonComponentFactory:ComponentFactory<RadioButtonComponent> = this.componentFactoryResolver.resolveComponentFactory(RadioButtonComponent);
	    let radioButtonComponent = this.radioButtonNidoView.createComponent(radioButtonComponentFactory);

	    radioButtonComponent.instance.radioButton = opcion;
	    radioButtonComponent.instance.radioButtonGroup = this.radioButtonGroup;
	    radioButtonComponent.instance.formGroup = this.formGroup;

      radioButtonComponent.changeDetectorRef.detectChanges();
		});

	}

  ngOnDestroy() {

  }

}
