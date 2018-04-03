import { Injectable,Output, EventEmitter} from '@angular/core';

@Injectable()
export class LoadingService {
	@Output() userChangeEvent: EventEmitter<boolean> = new EventEmitter();
	
    showLoader(){
        this.userChangeEvent.emit(true);
    }
    hideLoader() {
        this.userChangeEvent.emit(false);
    }

    constructor() {
    }

}
