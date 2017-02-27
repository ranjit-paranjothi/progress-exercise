import React from "react";
import ReactDOM from "react-dom";
import Bars from "./Bars";
import Controls from "./Controls";
import ProgressStore from "./ProgressStore";
import $ from "../lib/jquery";

var progressBarItems = [];
var progressStoreArr = [];
var valueControlBtns = [];
var maxLimit = 0;

var endPointPromise = new Promise(function(resolve, reject){

	$.ajax({url:"http://pb-api.herokuapp.com/bars",
		success:function(res){
			resolve(res);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			reject();
		}
	});
});

endPointPromise.then(function(res){
	progressBarItems = res.bars;
	valueControlBtns = res.buttons;
	maxLimit = res.limit;

	for(let i=0; i<progressBarItems.length;i++){
		let curStore = new ProgressStore;
		curStore.value = progressBarItems[i];
		curStore.minLimit = 0;
		curStore.maxLimit = maxLimit;
		progressStoreArr.push(curStore);
	}

	ReactDOM.render(
		<div className="barLayout">
			<h2>Progress Bars Demo</h2>
			<Bars progressStoreArr = {progressStoreArr}/>
			<Controls progressStoreArr = {progressStoreArr} valueBtns = {valueControlBtns} />
		</div>,
		document.getElementById("main"));
}).catch(function(){
	ReactDOM.render(
		<div className="barLayout">
			<h2>Progress Bars Demo</h2>
			<p>Problem loading Data from: "http://pb-api.herokuapp.com/bars" </p>
		</div>,
		document.getElementById("main"));
});



