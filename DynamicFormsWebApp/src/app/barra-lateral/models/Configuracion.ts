import { Pestana } from './Pestana';

export class Configuracion {

	public id:number;
	public nombre:string;
	public pestanas:Array<Pestana>;

	public constructor(init?: Partial<Configuracion>) {
		Object.assign(this, init);
	}

}