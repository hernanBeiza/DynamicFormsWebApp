import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BarraLateralService } from './../services';
import { Pestana } from './../models';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {

	//@Input() tabs:Array<string> = new Array<string>();

  public pestanas:Array<Pestana> = new Array<Pestana>();

  constructor(private router:Router, private barraLateralService:BarraLateralService) { }

  ngOnInit() { 

  	this.iniciarConfiguracion();

  }

  private iniciarConfiguracion():void {
  	let actualURL = this.router.url.split("/");
  	let pantalla = "tramitar";//actualURL[0];

  	this.obtenerConfiguracion(pantalla,1);
  }

  private obtenerConfiguracion(pantalla:string,idUsuario:number):void {
  	this.barraLateralService.obtenerSegunPantallayUsuario(pantalla,idUsuario).subscribe(data=>{
  		console.log(data);
      if(data){
        this.pestanas = data.pestanas;
      }
  	});

  }

}