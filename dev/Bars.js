import React from "react";
import Progress from "./Progress";

export default class Bars extends React.Component{
	
	render(){
		var barsArr = [];
		var limitColor = "#75A5E9";
		var beyondLimitColor = "#DD5044";

		for(let i=0; i<this.props.progressStoreArr.length;i++){
			var curStore = this.props.progressStoreArr[i];
			barsArr.push(<Progress store={curStore} w="400" h= "40" limitColor={limitColor} beyondLimitColor={beyondLimitColor} key={i}/>);
		}
		return (
			<div className="col-sm-12 bars">{barsArr}</div>
		);
	}
}
