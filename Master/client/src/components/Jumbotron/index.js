import React from "react";
import "./style.css";

//create functional component Jumbotron and pass in children 
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}
//export Jumbotron
export default Jumbotron;
