import React from "react";
import Progress from "./Progress";
import {observer} from "mobx-react";
//import ProgressStore from "./ProgressStore";

@observer
export default class Bars extends React.Component{
	
	render(){
		//var storeArr = [];
		var barsArr = [];
		var limitColor = "orange";
		var beyondLimitColor = "red";
		console.log("YYYYYYY: ",this.props.store);
		for(let i=0; i<this.props.store.progressBarItems.length;i++){
			/*var curStore = new ProgressStore;
			curStore.value = this.props.store.progressBarItems[i].value;*/
			console.log("VALLLLLL : ",this.props.store.progressBarItems[i].value);
			//storeArr.push(curStore);
			barsArr.push(<Progress value={this.props.store.progressBarItems[i].value} w="250" h= "40" limitColor={limitColor} beyondLimitColor={beyondLimitColor} key={i}/>);
		}
		//window.storeArr = storeArr;
		return (
			<div>{barsArr}</div>
		);
	}
}

/*Bars.propTypes = {
	store: React.PropTypes.array
};*/