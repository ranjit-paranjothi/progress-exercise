import React from "react";

export default class Controls extends React.Component{
	constructor(props){
		super(props);
		this._clickHandler = this._clickHandler.bind(this);
	}
	_clickHandler (evt){
		var index = 0;
		var value = 6;
		this.props.progressStoreArr[index].valueChange(value);
		//this.props.store.valuChange(index, value);
	}
	render(){
		return (
			<button onClick={this._clickHandler}>Submit</button>

			);
	}
}