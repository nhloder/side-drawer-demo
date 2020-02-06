import React, { Component } from "react";
import logo from "./logo.svg";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/Side Drawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  render() {
    let sideDrawer;
    let backDrop;
    return (
      <div style={{ height: "100%" }}>
        <Toolbar />
        <SideDrawer />
        <Backdrop />
        <main style={{ marginTop: "56px" }}>
          <p> This is some Page content</p>
        </main>
      </div>
    );
  }
}

export default App;
