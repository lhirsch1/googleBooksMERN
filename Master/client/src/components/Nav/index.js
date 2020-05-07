//require dependencies 
import React, { Component } from "react";
//deconstructing link from react-router-dom 
import { Link } from "react-router-dom";
import "./style.css";

//creating class component Nav
class Nav extends Component {
  //declaring state
  state = {
    open: false,
    //setting width to window width
    width: window.innerWidth
  };

  //if user changes window width, state is reset 
  updateWidth = () => {
    const newState = { width: window.innerWidth };
    //if the user's window is larger than 991 pixels, they are unable to collapse the navbar
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    //sets the state equal to newState
    this.setState(newState);
  };

  //allows user to open or close the navbar
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  //adds event listener to window to listen for resizing after component
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  //removes event listener from window
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  //renders nav jsx/html
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* link goes to root route */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* button for hiding/showing nav */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* class is changed based on the state of state.open. this collapses or expands nav link list */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* links to root */}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              {/* links to saved books */}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
//export Nav component
export default Nav;
