import React from "react";
import Progress from "./Progress";
//import {observer} from "mobx-react";
//import ProgressStore from "./ProgressStore";

//@observer
export default class Bars extends React.Component{
	
	render(){
		//var storeArr = [];
		var barsArr = [];
		var limitColor = "orange";
		var beyondLimitColor = "red";
		//console.log("YYYYYYY: ",this.props.progressStoreArr[0]);
		for(let i=0; i<this.props.progressStoreArr.length;i++){
			var curStore = this.props.progressStoreArr[i];
			console.log("VALLLLLL : ",curStore.value);
			//storeArr.push(curStore);
			barsArr.push(<Progress store={curStore} w="250" h= "40" limitColor={limitColor} beyondLimitColor={beyondLimitColor} key={i}/>);
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