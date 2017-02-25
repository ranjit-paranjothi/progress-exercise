import React from "react";
import $ from "../lib/jquery";

var Progress = React.createClass({
	proptypes:{
		value:React.PropTypes.number,
		w:React.PropTypes.number,
		h:React.PropTypes.number
	},
	render:function(){
		
		var percentage = {
			position: "absolute",
			zIndex: "100",
			textAlign: "center",
			verticalAlign:"middle",
			marginTop:"-"+(this.props.h)+"px",
			lineHeight:this.props.h+"px"
		};

		var barHeight = {
			height:this.props.h+"px"
		};

		var barWidth = {
			width: this.props.w+"px"
		};

		return (
			<div style={barWidth}>
				<div className="Outer-bar" style={barHeight}>
					<div className="Inner-bar" style={$.extend({}, barHeight, barWidth)}></div>
					<div style={$.extend({}, percentage, barHeight, barWidth)}>{this.props.value}</div>
				</div>
			</div>
		);
	}
});

export default Progress;