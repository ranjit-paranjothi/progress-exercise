import {observable, action} from "mobx";

class BarStore{
	@observable progressBarItems = [];

	@action
	valuChange(barIndex, value) {
		this.progressBarItems[barIndex].value = value;
	}
}

var barStore = window.store = new BarStore;

export default barStore;