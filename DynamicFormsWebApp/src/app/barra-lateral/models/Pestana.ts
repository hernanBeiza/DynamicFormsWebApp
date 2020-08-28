import { Formulario } from './Formulario';

export class Pestana {

	public id:number;
	public titulo:string;

	public formularios:Array<Formulario>;

	public constructor(init?: Partial<Pestana>) {
		Object.assign(this, init);
	}

}
