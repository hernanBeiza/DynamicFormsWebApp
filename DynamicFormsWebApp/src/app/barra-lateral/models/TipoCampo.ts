export class TipoCampo {

	public id:number;
	public glosa:string;

	public constructor(init?: Partial<TipoCampo>) {
		Object.assign(this, init);
	}

}
