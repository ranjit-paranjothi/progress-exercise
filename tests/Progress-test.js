import React from "react";
import Progress from "../dev/Progress";
import {shallow} from "enzyme";

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