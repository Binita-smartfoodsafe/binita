export class HttpRequestModal {
	constructor(
		public actionName: string,
		public method: string,
		public payload: any,
		public isSpinner: boolean
	) { }
}