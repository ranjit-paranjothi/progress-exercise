import React from "react";
import ReactDOM from "react-dom";
import Bars from "./Bars";
//import $ from "../lib/jquery";

var items = [{value:30},{value:68}];
ReactDOM.render(<Bars progressItems={items}/>,document.getElementById("container"));