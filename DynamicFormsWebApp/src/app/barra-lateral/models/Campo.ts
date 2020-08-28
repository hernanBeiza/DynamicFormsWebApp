import { TipoCampo } from './TipoCampo';

export class Campo {

	public id:number;

	public tipoCampo:TipoCampo;
	public seleccionado:boolean = false;

	public idHTML:string;
	public glosa:string;
	public valor:string;
	
	public opciones:Array<Campo>;

	public constructor(init?: Partial<Campo>) {
		Object.assign(this, init);
		this.configurarValores();
	}

	private configurarValores():void {
		this.idHTML = this.id+this.glosa.replace(/ /g, '');
	}

}
