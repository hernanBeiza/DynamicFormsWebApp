import { Campo } from './Campo';

export class Formulario {

	public id:number;	
	public titulo:string;

	public campos:Array<Campo>;

	public idHTML:string;

	public constructor(init?: Partial<Formulario>) {
		Object.assign(this, init);
		this.configurarValores();
	}

	private configurarValores():void {
		this.idHTML = "form"+this.id;
	}
	
}