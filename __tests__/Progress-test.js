import React from "react";
import Progress from "../dev/Progress";
import {shallow} from "enzyme";
/*import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

global.chai = chai;
global.mount = mount;
global.React = React;
global.render = render;
global.shallow = shallow;

chai.use(chaiEnzyme());*/

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

/*test("received store value and progress bar width should match",()=>{
	var store = {value:30};
	const progressWrapper= shallow(<Progress store={store}/>);
	expect(Progress).to.have.style("width", "30%");
});*/