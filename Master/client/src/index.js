//require dependencies
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//renders App to the root element on html page
ReactDOM.render(<App />, document.getElementById("root"));
//register serviceworker
registerServiceWorker();
