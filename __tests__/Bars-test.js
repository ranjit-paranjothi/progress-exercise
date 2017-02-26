import React from "react";
import {shallow} from "enzyme";
import Bars from "../dev/Bars";
import Progress from "../dev/Progress";

test("Progress components should match with the number of data recieved", ()=>{

	var items = {progressBarItems:[{value:10},{value:30}]};

	const bars = shallow(<Bars store={items}/>);
	expect(bars.find(Progress).length).toBe(items.progressBarItems.length);
});