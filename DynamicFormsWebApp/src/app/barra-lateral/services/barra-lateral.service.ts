import { Injectable } from '@angular/core';

import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { Configuracion, Producto, Pestana, Formulario, Campo, TipoCampo } from './../models';
import { TipoCampoEnum } from './../enums';

@Injectable({
  providedIn: 'root'
})
export class BarraLateralService {

  private url = environment.API+"tramite/";
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private httpClient:HttpClient) { }


  public obtenerSegunPantallayUsuario(pantalla:string,idUsuario:number): Observable<Configuracion> {
    const url = "assets/data/data.json";
    return this.httpClient.get<Configuracion>(url,this.httpOptions)
    .pipe(
      tap(data => console.log(data)),
      map((item:any)=>{
        let producto = new Producto(item);
        let configuracion = new Configuracion(item.configuracion);
          configuracion.pestanas = configuracion.pestanas.map(pest=>{
            let pestana = new Pestana(pest);
            if(pest.formularios){
              pestana.formularios = pest.formularios.map(formu=>{
                let formulario = new Formulario(formu);
                formulario.campos = formu.campos.map(camp=>{
                  let campo = new Campo(camp);
                  campo.tipoCampo = new TipoCampo(camp.tipoCampo);
                  if(camp.opciones){
                    campo.opciones = camp.opciones.map(opcion=>new Campo(opcion));
                  }
                  return campo;
                });
                return formulario;
              });
            }
            return pestana;
          });          
        return configuracion;
    }));
  }

  /*
  public guardarConfiguracion(configuracion:Configuracion): Observable<Configuracion> {
    const url = "assets/data/data.json";
    console.info(url);
    return this.httpClient.post<Configuracion>(this.url+'guardar',configuracion,this.obtenerHttpOptions())
    .pipe(map(item=>new Configuracion(item)));
  }
  */

  guardarConfiguracion(configuracion:Configuracion): Observable<Configuracion> {
    return this.httpClient.post<Configuracion>(this.url+'guardar',configuracion,this.httpOptions)
    .pipe(map(item=> new Configuracion(item)));
  }

  //httpOptions por defeinición es any, no es mi culpa, es de AngularTeam xD
  private obtenerHttpOptions():any {
    const headers = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    const httpOptions = {headers: headers};
    return httpOptions;
  }

}