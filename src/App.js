import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";

//// ADD ITEM
// store values in state
// update state when user types in the input
// on submit create new object with entered data
// send new object to firebase
// empty state
// render items to the page

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
    // attach event to lister

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
      <div className="App">
        <header>
          <h1>Inventory Manager</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Inventory</a>
              </li>
              <li>
                <a href="#">P.O.S</a>
              </li>
            </ul>
          </nav>
        </header>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="itemName">Item Name:</label>
          <input
            onChange={this.handleChange}
            value={this.state.itemName}
            type="text"
            id="itemName"
            placeholder="Item Name"
          />

          <label htmlFor="itemPrice">Item Price:</label>
          <input
            onChange={this.handleChange}
            value={this.state.itemPrice}
            type="text"
            id="itemPrice"
            placeholder="Item Price"
          />

          <label htmlFor="itemQuantity">Quantity:</label>
          <input
            onChange={this.handleChange}
            value={this.state.itemQuantity}
            type="text"
            id="itemQuantity"
            placeholder="Quantity"
          />

          <label htmlFor="itemDescription">Description:</label>
          <input
            onChange={this.handleChange}
            value={this.state.itemDescription}
            type="text"
            id="itemDescription"
            placeholder="Description"
          />

          <label htmlFor="itemImage">Image:</label>
          <input
            onChange={this.handleChange}
            value={this.state.itemImage}
            type="text"
            id="itemImage"
            placeholder="Image"
          />

          <input type="submit" value="Add Item" />
        </form>
        <section>
          {Object.entries(this.state.inventoryItems).map(item => {
            return (
              <div key={item[0]}>
                <h2>{item[1].itemName}</h2>
                <p>Price:{item[1].itemPrice}</p>
                <p>Quantity:{item[1].itemQuantity}</p>
                <p>Description:{item[1].itemDescription}</p>
                <p>Image:{item[1].itemImage}</p>
                <button id={item[0]} onClick={this.removeItem}>
                  Remove Item
                </button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
