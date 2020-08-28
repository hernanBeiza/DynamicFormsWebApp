import { Component, ComponentFactory, ComponentFactoryResolver, 
  ChangeDetectorRef,
  ComponentRef,
  ViewContainerRef, ViewChild, ViewChildren, QueryList, Input, Output, 
  OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { FormularioComponent } from './../formulario/formulario.component';
import { Pestana, Formulario } from './../models';

@Component({
  selector: 'app-pestana',
  templateUrl: './pestana.component.html',
  styleUrls: ['./pestana.component.scss']
})
export class PestanaComponent implements OnInit, AfterViewInit, OnDestroy {

  public pestanaFormGroup:FormGroup;

	@Input() pestana:Pestana;
  //Nombre con # en el html
  @ViewChild('nido', {static: false, read:ViewContainerRef}) private nidoView:ViewContainerRef;

  @ViewChildren(FormularioComponent) formularios:QueryList<FormularioComponent>;

  constructor (private componentFactoryResolver: ComponentFactoryResolver, private formBuilder:FormBuilder) {
    this.pestanaFormGroup = this.formBuilder.group({});
    //console.log(this.dynamicForm);
    /*
    this.dynamicForm = this.formBuilder.group({
    'rut': [this.usuarioModel.rut, Validators.compose([Validators.required,Validators.maxLength(12)])],
    'contrasena': [this.usuarioModel.password, Validators.compose([Validators.required, Validators.minLength(7)])],
    });
    */
    //this.dynamicForm.valueChanges.subscribe(data => Validaciones.onValueChanged(data, this.dynamicForm, this.formErrors, this.formularioModel.validaciones));
  }
 
  ngOnInit() {
    console.log("PestanaComponent",this.pestana.titulo);
  	//console.log(this.pestana);
  }

  ngAfterViewInit() {
    if(this.pestana.formularios){
      if(this.pestana.formularios.length>0){
        //console.log(this.formularios);      
         this.iniciar();
      }      
    }
  }

  private iniciar():void {
    this.pestana.formularios.forEach(formu=>{
      var formularioComponentFactory:ComponentFactory<FormularioComponent> = this.componentFactoryResolver.resolveComponentFactory(FormularioComponent);
      let formularioComponent = this.nidoView.createComponent(formularioComponentFactory);
      formularioComponent.instance.formulario = formu;
      formularioComponent.changeDetectorRef.detectChanges();
      this.pestanaFormGroup.addControl(formu.idHTML, formularioComponent.instance.formGroup);
      //var inputComponent = this.parent.createComponent(inputComponentFactory)
      //inputComponent.instance.campo = campo;
      //Agregar componente al formgroup
      //var nombre = "campo"+campo.idcampo.toString();
      //console.log(nombre);
      //TODO
      //this.dynamicForm.addControl(campo.nombre, new FormControl('', campo.validators));
      //Pasar un nombre dinámico al campo del formulario para el atributo FormControlName
      //campoComponent.instance.nombre = nombre;
      //Pasar instancia del formulario o formgroup al componente hijo
      //inputComponent.instance.dynamicFormGroup = this.dynamicForm;
      //https://stackoverflow.com/questions/56536396/reactive-forms-nested-component-not-working
    });
  }

  public onSubmit(values:any):void {
    console.log("onSubmit();");
    console.log("valid",this.pestanaFormGroup.valid);
    console.log(values);
  }

  public onReset():void {
    console.log("onReset();");
    this.pestanaFormGroup.reset();
    console.log(this.formularios.length);
    this.formularios.toArray().forEach(form=>{
      console.log(form.campos);
      form.formGroup.reset();
    });
  }

  ngOnDestroy() {

  }

}
