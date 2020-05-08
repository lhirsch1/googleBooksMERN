//require dependencies/components
import React from "react";
//react-router-dom destructuring
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* wrapping routes in switch case to create routes and load appropriate components */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          {/* catch all renders NoMatch */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
//export App
export default App;
