import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./Components/firebase";
import "./styles/App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Pos from "./Components/Pos";

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryItems: {},
      formState: {
        itemName: "",
        itemPrice: "",
        itemQuantity: "",
        itemDescription: "",
        itemImage: ""
      },
      cartState: [],
      cartPrices: [],
      cartTotal: ""
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
      formState: {
        ...this.state.formState,
        [e.target.id]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    dbRef.push(this.state.formState);

    this.setState({
      formState: {
        itemName: "",
        itemPrice: "",
        itemQuantity: "",
        itemDescription: "",
        itemImage: ""
      }
    });
  };

  removeItem = e => {
    const firebaseKey = e.target.id;
    const itemRef = firebase.database().ref(`/${firebaseKey}`);
    itemRef.remove();
  };

  addToCart = e => {
    const item = this.state.inventoryItems[e.target.id];
    const cartItems = [...this.state.cartState];
    const prices = [...this.state.cartPrices];

    cartItems.push(item);

    // cartItem = cartItems[e.target.id]
    // cartItems[e.target.id] = item

    prices.push(parseFloat(item.itemPrice).toFixed(2) * 1);

    const total = this.state.cartPrices.reduce(
      (a, b) => a + b,
      parseFloat(item.itemPrice)
    );

    const updateInventory = Object.assign({}, this.state.inventoryItems);
    updateInventory[e.target.id].itemQuantity--;

    const totalFormatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "CAD"
    })
      .format(total)
      .replace(",", ".");

    this.setState(
      {
        inventoryItems: updateInventory,
        cartState: cartItems,
        cartPrices: prices,
        cartTotal: totalFormatted
      },
      () => console.log(this.state.cartPrices)
    );
  };

  deleteFromCart = () => {};

  process = () => {
    dbRef.update(this.state.inventoryItems);
    this.setState({
      cartState: [],
      cartPrices: [],
      cartTotal: ""
    });
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
                  formState={this.state.formState}
                  inventoryItems={this.state.inventoryItems}
                />
              )}
            />

            <Route
              path="/pos"
              render={() => (
                <Pos
                  inventoryItems={this.state.inventoryItems}
                  cartState={this.state.cartState}
                  addToCart={this.addToCart}
                  cartPrices={this.state.cartPrices}
                  deleteFromCart={this.deleteFromCart}
                  cartTotal={this.state.cartTotal}
                  process={this.process}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
