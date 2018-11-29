import React, { Component } from "react";
import firebase from "./firebase";


const dbRef = firebase.database().ref();

class Inventory extends Component {
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
      <div>
        {/* <AddItem /> */}
        <form action="" onSubmit={this.handleSubmit}>
          <label className="visuallyhidden" htmlFor="itemName">
            Item Name:
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.itemName}
            type="text"
            id="itemName"
            className="itemName"
            placeholder="Item Name"
          />

          <label className="visuallyhidden" htmlFor="itemPrice">
            Item Price:
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.itemPrice}
            type="number"
            id="itemPrice"
            className="itemPrice"
            placeholder="Item Price"
            min="1"
            step=".01"
            pattern="^\d*(\.\d{0,2})?$"
          />

          <label className="visuallyhidden" htmlFor="itemQuantity">
            Quantity:
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.itemQuantity}
            type="number"
            id="itemQuantity"
            className="itemQuantity"
            placeholder="Quantity"
          />

          <label className="visuallyhidden" htmlFor="itemDescription">
            Description:
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.itemDescription}
            type="text"
            id="itemDescription"
            className="itemDescription"
            placeholder="Description"
          />

          <label className="visuallyhidden" htmlFor="itemImage">
            Image:
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.itemImage}
            type="text"
            id="itemImage"
            className="itemImage"
            placeholder="Image"
          />

          <input className="addItem" type="submit" value="Add Item" />
        </form>
        <section>
          {Object.entries(this.state.inventoryItems).map(item => {
            return (
              <div key={item[0]} className="inventoryItem ">
                <h2>{item[1].itemName}</h2>
                <p>Price: {item[1].itemPrice}</p>
                <p>Quantity: {item[1].itemQuantity}</p>
                <p>Description: {item[1].itemDescription}</p>
                <p>Image: {item[1].itemImage}</p>
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

export default Inventory;