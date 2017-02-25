import React from "react";
import Progress from "./Progress";

var Bars  = React.createClass({
	propTypes:{
		progressItems: React.PropTypes.array
	},
	render: function(){
		var barsArr = [];
		for(let i=0; i<this.props.progressItems.length;i++){
			barsArr.push(<Progress value={this.props.progressItems[i].value+"%"} w="250" h= "40" key={i}/>);
		}
		return (
			<div>{barsArr}</div>
		);
	}
});

export default Bars;