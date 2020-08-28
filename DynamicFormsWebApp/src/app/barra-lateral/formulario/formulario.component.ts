import { Component, ComponentFactory, ComponentFactoryResolver, 
	ChangeDetectorRef,
	ComponentRef,
	ViewContainerRef, ViewChild, ViewChildren, QueryList, Input, Output, 
	OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Formulario, Campo } from './../models';

import { TipoCampoEnum } from './../enums';

import { CampoComponent } from './../campo/campo.component';
import { LabelComponent } from './../campo/label/label.component';
import { RadioButtonGroupComponent } from './../campo/radio-button-group/radio-button-group.component';
import { CheckBoxGroupComponent } from './../campo/check-box-group/check-box-group.component';
import { ComboboxComponent } from './../campo/combobox/combobox.component';
import { SwitchComponent } from './../campo/switch/switch.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, AfterViewInit, OnDestroy {

	@Input() formulario:Formulario;

  //Nombre con # en el html
  @ViewChild('nido', {static: false, read:ViewContainerRef}) private nidoView:ViewContainerRef;

  @ViewChildren(CampoComponent) campos:QueryList<CampoComponent>;

  public formGroup:FormGroup;

  private labelsComponents:Array<ComponentRef<CampoComponent>> = null;

  constructor(private formBuilder:FormBuilder, private changeDetectorRef:ChangeDetectorRef, private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() { 
    console.log("FormularioComponent",this.formulario.titulo);
    this.formGroup = this.formBuilder.group({});
  }

  ngAfterViewInit() {
  	if(this.campos.length>0){

  	}
  	//Como se necesita la referncia a la vista nido, se debe implementar aquí
    //this.iniciarComponentes();
    this.iniciarComponentesConCampo();
  }


  private iniciarComponentesConCampo() {

  	this.formulario.campos.forEach(campo=>{

	    var campoComponentFactory:ComponentFactory<CampoComponent> = this.componentFactoryResolver.resolveComponentFactory(CampoComponent);
	    let campoComponent = this.nidoView.createComponent(campoComponentFactory);
	    campoComponent.instance.campo = campo;
	    campoComponent.instance.formGroup = this.formGroup;

	    campoComponent.changeDetectorRef.detectChanges();

  	});

  }

  //TODO
  //Eliminar de aquí
  private iniciarComponentes():void {
  	this.formulario.campos.forEach(campo=>{
		  
		  switch (campo.tipoCampo.id) {
	      case TipoCampoEnum.Label:
	        var labelComponentFactory:ComponentFactory<LabelComponent> = this.componentFactoryResolver.resolveComponentFactory(LabelComponent);
	        let labelComponent = this.nidoView.createComponent(labelComponentFactory);
	        labelComponent.instance.label = campo;

	        labelComponent.changeDetectorRef.detectChanges();
	        break;
	      
	      case TipoCampoEnum.RadioButtonGroup:
	        this.formGroup.addControl(campo.idHTML, new FormControl('', null));

	        var radioButtonGroupComponentFactory:ComponentFactory<RadioButtonGroupComponent> = this.componentFactoryResolver.resolveComponentFactory(RadioButtonGroupComponent);
	        let radioButtonGroupComponent = this.nidoView.createComponent(radioButtonGroupComponentFactory);

	        radioButtonGroupComponent.instance.radioButtonGroup = campo;
	        radioButtonGroupComponent.instance.formGroup = this.formGroup;

	        radioButtonGroupComponent.changeDetectorRef.detectChanges();
		      break;

	      case TipoCampoEnum.CheckboxGroup:
	        //this.formGroup.addControl(campo.idHTML, new FormControl('', null));

	        var checkBoxGroupComponentFactory:ComponentFactory<CheckBoxGroupComponent> = this.componentFactoryResolver.resolveComponentFactory(CheckBoxGroupComponent);
	        let checkBoxGroupComponent = this.nidoView.createComponent(checkBoxGroupComponentFactory);

	        checkBoxGroupComponent.instance.checkBoxGroup = campo;
	        checkBoxGroupComponent.instance.formGroup = this.formGroup;
	        
	        checkBoxGroupComponent.changeDetectorRef.detectChanges();
		      break;
      
	      case TipoCampoEnum.Combobox:
	        this.formGroup.addControl(campo.idHTML, new FormControl('', null));

	        var comboboxComponentFactory:ComponentFactory<ComboboxComponent> = this.componentFactoryResolver.resolveComponentFactory(ComboboxComponent);
	        let comboboxComponent = this.nidoView.createComponent(comboboxComponentFactory);

	        comboboxComponent.instance.combobox = campo;
	        comboboxComponent.instance.formGroup = this.formGroup;
	        
	        comboboxComponent.changeDetectorRef.detectChanges();
		      break;

	      case TipoCampoEnum.Switch:
	        this.formGroup.addControl(campo.idHTML, new FormControl('', null));

	        var switchComponentFactory:ComponentFactory<SwitchComponent> = this.componentFactoryResolver.resolveComponentFactory(SwitchComponent);
	        let switchomponent = this.nidoView.createComponent(switchComponentFactory);

	        switchomponent.instance.switch = campo;
	        switchomponent.instance.formGroup = this.formGroup;
	        
	        switchomponent.changeDetectorRef.detectChanges();
		      break;      
	    }

	  });

  }

  public resetear():void {
  	this.campos.forEach(campo=>{
  		console.log(campo.campo);
  	})
  }

  ngOnDestroy() {

  }

}