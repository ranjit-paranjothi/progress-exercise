import React from "react";
import $ from "../lib/jquery";

export default class Controls extends React.Component{
	constructor(props){
		super(props);
		this._clickHandler = this._clickHandler.bind(this);
		this._onProgressSelect = this._onProgressSelect.bind(this);
		this.index = 0;
	}
	_clickHandler (evt){
		var value = $(evt.target).data("value");
		this.props.progressStoreArr[this.index].valueChange(value);
	}

	_onProgressSelect(evt){
		this.index = $(evt.target).find("option:selected").data("value");
	}

	render(){
		var comboBoxOptions = [];
		var buttons = [];
		for(let i = 0;i<this.props.progressStoreArr.length;i++){
			let counter =i+1;
			comboBoxOptions.push(<option key={i} data-value = {i} value={"# Progress "+counter}>{"# Progress "+counter}</option>);
		}
		for(let i=0;i<this.props.valueBtns.length;i++){
			var value = this.props.valueBtns[i];
			buttons.push(<button className="btn btn-primary fcol-sm-2 btnValue" data-value={value} onClick={this._clickHandler} key={i}>{value}</button>);
		}
		return (
			<div className="col-sm-12 controls">
				<div className="row">
					<div className="col-sm-4">
						<select className= "form-control" onChange= {this._onProgressSelect}>
							{comboBoxOptions}
						</select>
					</div>
					<div className="orm-control  col-sm-8">
						{buttons}
					</div>	
				</div>			
			</div>

		);
	}
}