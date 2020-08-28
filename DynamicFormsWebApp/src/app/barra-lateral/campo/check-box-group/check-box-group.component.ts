import { Component, ComponentFactory, ComponentFactoryResolver, 
	ChangeDetectorRef,
	ComponentRef,
	ViewContainerRef, ViewChild, ViewChildren, QueryList, Input, Output, 
	OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';

import { Campo } from './../../models';

import { CheckBoxComponent } from './../check-box/check-box.component';

@Component({
  selector: 'app-check-box-group',
  templateUrl: './check-box-group.component.html',
  styleUrls: ['./check-box-group.component.scss']
})
export class CheckBoxGroupComponent implements OnInit {

	@Input() public checkBoxGroup:Campo;

  @Input() public formGroup:FormGroup;

  //Nombre con # en el html
 	@ViewChild('checkBoxNidoView', {static: false, read:ViewContainerRef}) private checkBoxNidoView:ViewContainerRef;

  constructor(private formBuilder:FormBuilder, private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {

    let checkboxes = new FormArray([],null);
    this.checkBoxGroup.opciones.forEach(opcion => {
      const control = new FormControl(opcion.seleccionado);
      checkboxes.push(control);
    })

    this.formGroup.addControl(this.checkBoxGroup.idHTML, checkboxes);
    /*
  	this.checkBoxGroup.opciones.forEach(opcion=>{
	    this.formGroup.addControl(opcion.idHTML, new FormControl('', null));
  	});
  	*/
  }

  ngAfterViewInit() {
    let indice = 0;
    this.checkBoxGroup.opciones.forEach(opcion=>{
      var checkBoxComponentFactory:ComponentFactory<CheckBoxComponent> = this.componentFactoryResolver.resolveComponentFactory(CheckBoxComponent);
      let checkBoxComponent = this.checkBoxNidoView.createComponent(checkBoxComponentFactory);

      checkBoxComponent.instance.checkBox = opcion;
      checkBoxComponent.instance.indice = indice;
      checkBoxComponent.instance.checkBoxGroup = this.checkBoxGroup;
      checkBoxComponent.instance.formGroup = this.formGroup;

      checkBoxComponent.changeDetectorRef.detectChanges();
      indice++;
    });

  }
  public obtenerControles():Array<AbstractControl> {
    let checkGroupArray:FormArray = this.formGroup.controls[this.checkBoxGroup.idHTML] as FormArray;
    return checkGroupArray.controls;
  }

  ngOnDestroy() {

  }

}
