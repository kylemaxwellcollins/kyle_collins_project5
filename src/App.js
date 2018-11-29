import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Pos from "./Components/Pos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//// ADD ITEM
// store values in state
// update state when user types in the input
// on submit create new object with entered data
// send new object to firebase
// empty state
// render items to the page

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/inventory/" component={Inventory} />
            <Route path="/pos/" component={Pos} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
