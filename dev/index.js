import React from "react";
import ReactDOM from "react-dom";
import Bars from "./Bars";
// import barStore from "./BarStore";
import Controls from "./Controls";
import ProgressStore from "./ProgressStore";
import $ from "../lib/jquery";

var progressBarItems = [];
var progressStoreArr = [];

var endPointPromise = new Promise(function(resolve, reject){
	$.ajax({url:"http://pb-api.herokuapp.com/bars"}).done(function(res){
		resolve(res);
	});
});

endPointPromise.then(function(res){
	progressBarItems = res.bars;

	for(let i=0; i<progressBarItems.length;i++){
		let curStore = new ProgressStore;
		curStore.value = progressBarItems[i];
		progressStoreArr.push(curStore);
	}

	ReactDOM.render(
		<div>
			<Bars progressStoreArr = {progressStoreArr}/>
			<Controls progressStoreArr = {progressStoreArr}/>
		</div>,
		document.getElementById("container"));
});



