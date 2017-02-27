import React from "react";
import {observer} from "mobx-react";

@observer
export default class Progress extends React.Component{
	
	constructor(props){
		super(props);
	}

	getProgressState(){
		var color = (this.props.store.value>100)?this.props.beyondLimitColor:this.props.limitColor;
		return {color:color};
	}

	render(){

		var progressState = this.getProgressState();
		var progressColor = {
			backgroundColor: progressState.color
		};
		var overlapStyle = {			
			marginTop:"-"+(this.props.h)+"px",
			lineHeight:this.props.h+"px",
			textAlign: "center",
			zIndex: "100",
		};

		var barHeight = {
			height:this.props.h+"px"
		};

		var fixedWidth = {
			width: "100%"
		};

		var calculatedWidth = {
			width: this.props.store.value+"%"
		};

		return (
			<div className = "progressBar" style={fixedWidth}>
				<div className="Outer-bar" style={fixedWidth}>
					<div className="Inner-bar" style={Object.assign({}, barHeight, calculatedWidth, progressColor)}></div>
					<div className="percentage" style={Object.assign({}, overlapStyle, barHeight, fixedWidth)}>{this.props.store.value+"%"}</div>
				</div>
			</div>
		);
	}
}
