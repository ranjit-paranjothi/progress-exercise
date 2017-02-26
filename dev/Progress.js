import React from "react";

export default class Progress extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {value:0, progressColor:""};
		//this.store = new ProgressStore();
	}

	componentDidMount(){
		console.log("Progress:: componentDidMount");
		//this.store.value = this.props.value;		
	}

	render(){
		console.log("MEEEEEE: ",this.props.value);
		var progressColor = {
			backgroundColor: this.state.progressColor
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

		return (
			<div style={barWidth}>
				<div className="Outer-bar" style={barHeight}>
					<div className="Inner-bar" style={Object.assign({}, barHeight, barWidth, progressColor)}></div>
					<div className="percentage" style={Object.assign({}, overlapStyle, barHeight, barWidth)}>{this.props.value+"%"}</div>
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