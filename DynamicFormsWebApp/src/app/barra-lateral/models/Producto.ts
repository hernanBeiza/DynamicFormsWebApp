import { Configuracion } from './Configuracion';

export class Producto {

	public id:number;
	public nombre:string;

	public configuracion:Configuracion;

	public constructor(init?: Partial<Producto>) {
		Object.assign(this, init);
	}

}