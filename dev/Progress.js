import React from "react";
import {observer} from "mobx-react";

@observer
export default class Progress extends React.Component{
	
	constructor(props){
		super(props);
	}

	getProgressState(){
		var pWidth = (this.props.store.value>=100)?this.props.w:(this.props.store.value*(this.props.w/100));
		var color = (this.props.store.value>=100)?this.props.beyondLimitColor:this.props.limitColor;
		return {w:pWidth, color:color};
	}

	render(){
		console.log("MEEEEEE: ",this.props.store.value);

		var progressState = this.getProgressState();
		var progressColor = {
			backgroundColor: progressState.color
		};
		var overlapStyle = {			
			marginTop:"-"+(this.props.h)+"px",
			lineHeight:this.props.h+"px",
			textAlign: "center",
			position: "absolute",
			zIndex: "100",
		};

		var barHeight = {
			height:this.props.h+"px"
		};

		var barWidth = {
			width: this.props.w+"px"
		};
		var calculatedWidth = {
			width: progressState.w+"px"
		};

		return (
			<div style={barWidth}>
				<div className="Outer-bar" style={barHeight}>
					<div className="Inner-bar" style={Object.assign({}, barHeight, calculatedWidth, progressColor)}></div>
					<div className="percentage" style={Object.assign({}, overlapStyle, barHeight, barWidth)}>{this.props.store.value+"%"}</div>
				</div>
			</div>
		);
	}
}

/*Progress.proptypes = {
	value:React.PropTypes.number,
	w:React.PropTypes.number,
	h:React.PropTypes.number
};*/