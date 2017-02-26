import React from "react";
import ReactDOM from "react-dom";
import Bars from "./Bars";
import barStore from "./BarStore";
import Controls from "./Controls";
//import $ from "../lib/jquery";

//var items = [{value:100},{value:68}];

barStore.progressBarItems = [{value:2},{value:100}];
ReactDOM.render(
	<div>
	<Bars store={barStore}/>
	<Controls store={barStore}/>
	</div>,
	document.getElementById("container"));