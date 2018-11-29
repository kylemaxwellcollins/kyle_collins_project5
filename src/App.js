import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Pos from "./Components/Pos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./Components/firebase";

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryItems: {},
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
      itemDescription: "",
      itemImage: ""
    };
  }

  componentDidMount() {
    console.log("mounted");

    dbRef.on("value", snapshot => {
      const newInventory = snapshot.val() === null ? {} : snapshot.val();
      this.setState({ inventoryItems: newInventory });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      itemPrice: this.state.itemPrice,
      itemQuantity: this.state.itemQuantity,
      itemDescription: this.state.itemDescription,
      itemImage: this.state.itemImage
    };

    // If inputs are blank, show error message

    dbRef.push(newItem);

    this.setState({
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
      itemDescription: "",
      itemImage: ""
    });
  };

  removeItem = e => {
    const firebaseKey = e.target.id;
    const itemRef = firebase.database().ref(`/${firebaseKey}`);
    itemRef.remove();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route
              path="/inventory"
              render={() => (
                <Inventory
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  removeItem={this.removeItem}
                  inventoryItems={this.state.inventoryItems}
                />
              )}
            />

            <Route
              path="/pos"
              render={() => <Pos inventoryItems={this.state.inventoryItems} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
