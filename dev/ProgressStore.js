import {observable, action} from "mobx";

class ProgressStore{
	@observable value = 0;
	@observable barColor = "";
	@observable minLimit = 0;
	@observable maxLimit = 0;

	@action
	valueChange(value) {
		var tmpTotal = this.value+value;
		if(tmpTotal<this.minLimit){
			this.value = this.minLimit;
		}else if(tmpTotal>this.maxLimit){
			this.value = this.maxLimit;
		}else{
			this.value += value;
		}
	}
}

export default ProgressStore;