import React from "react";
import ReactDOM from "react-dom";
import {shallow, mount} from "enzyme";
import Controls from "../dev/Controls";
import ProgressStore from "../dev/ProgressStore";

test("drop down box option count should match with the progress bar count",()=>{
	var items = [{value:20}, {value:50}];
	var btns = [20, 50];
	const controlsWrapper =shallow(<Controls progressStoreArr={items} valueBtns={btns}/>);
	expect(controlsWrapper.find("option").length).toEqual(items.length);
});

test("controls should have same number of buttons as data received",()=>{
	var items = [{value:20}, {value:50}];
	var btns = [20, 50];
	const controlsWrapper =shallow(<Controls progressStoreArr={items} valueBtns={btns}/>);
	expect(controlsWrapper.find("button").length).toEqual(btns.length);
});

test("button click should update the value", ()=>{
	var store = new ProgressStore;
	var btns = [30];
	store.value = 10;

	store.minLimit = 0;
	store.maxLimit = 200;
	var items = [store];
	
	const controlsWrapper =mount(<Controls progressStoreArr={items} valueBtns={btns}/>);
	controlsWrapper.find("button").simulate("click", { target: ReactDOM.findDOMNode(controlsWrapper.find("button").node) });

	expect(store.value).toEqual(40);
});

test("negative value which is resulted from negative button click should make the value 0", ()=>{
	var store = new ProgressStore;
	var btns = [-30];
	store.value = 10;

	store.minLimit = 0;
	store.maxLimit = 200;
	var items = [store];
	
	const controlsWrapper =mount(<Controls progressStoreArr={items} valueBtns={btns}/>);
	controlsWrapper.find("button").simulate("click", { target: ReactDOM.findDOMNode(controlsWrapper.find("button").node) });

	expect(store.value).toEqual(0);
});

test("value which crosses the limit should make the value equal to limit", ()=>{
	var store = new ProgressStore;
	var btns = [30];
	store.value = 190;

	store.minLimit = 0;
	store.maxLimit = 200;
	var items = [store];
	
	const controlsWrapper =mount(<Controls progressStoreArr={items} valueBtns={btns}/>);
	controlsWrapper.find("button").simulate("click", { target: ReactDOM.findDOMNode(controlsWrapper.find("button").node) });

	expect(store.value).toEqual(200);
});

test("combo box change should happen and value button click should increment respective progress", ()=>{
	var store = new ProgressStore;
	var btns = [30];
	store.value = 10;

	store.minLimit = 0;
	store.maxLimit = 200;
	var items = [store];
	
	const controlsWrapper =mount(<Controls progressStoreArr={items} valueBtns={btns}/>);
	controlsWrapper.find("select").simulate("change",{target:ReactDOM.findDOMNode(controlsWrapper.find("select").node)});
	controlsWrapper.find("button").simulate("click", { target: ReactDOM.findDOMNode(controlsWrapper.find("button").node) });

	expect(store.value).toEqual(40);
});


