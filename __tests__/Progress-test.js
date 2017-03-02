import React from "react";
import ReactDOM from "react-dom";
import Progress from "../dev/Progress";
import {shallow, mount} from "enzyme";

test("should contain fixed outer rectangle ",()=>{
	var store = {value:30};
	const progressWrapper= shallow(<Progress store={store}/>);
	expect(progressWrapper.find(".Outer-bar").exists()).toEqual(true);
});

test("should contain growing inner rectangle ",()=>{
	var store = {value:30};
	const progressWrapper= shallow(<Progress store={store}/>);
	expect(progressWrapper.find(".Inner-bar").exists()).toEqual(true);
});

test("should have progress percentage text",()=>{
	var store = {value:30};
	const progressWrapper= shallow(<Progress store={store}/>);
	expect(progressWrapper.find(".Inner-bar").exists()).toEqual(true);
});

test("received store value and progress bar width should match",()=>{
	var store = {value:30};
	const progressWrapper= mount(<Progress store={store}/>);
	expect(progressWrapper.find(".Inner-bar").node.style.width).toEqual("30%");
});