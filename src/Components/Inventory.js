import React, { Component } from "react";

class Inventory extends Component {
  render() {
    return (
      <div className="wrapper">
        <form action="" onSubmit={this.props.handleSubmit}>
          <label className="visuallyhidden" htmlFor="itemName">
            Item Name:
          </label>
          <input
            onChange={this.props.handleChange}
            value={this.props.formState.itemName}
            type="text"
            id="itemName"
            className="itemName"
            placeholder="Item Name"
          />

          <label className="visuallyhidden" htmlFor="itemPrice">
            Item Price:
          </label>
          <input
            onChange={this.props.handleChange}
            value={this.props.formState.itemPrice}
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
            onChange={this.props.handleChange}
            value={this.props.formState.itemQuantity}
            type="number"
            id="itemQuantity"
            className="itemQuantity"
            placeholder="Quantity"
          />

          <label className="visuallyhidden" htmlFor="itemDescription">
            Description:
          </label>
          <input
            onChange={this.props.handleChange}
            value={this.props.formState.itemDescription}
            type="text"
            id="itemDescription"
            className="itemDescription"
            placeholder="Description"
          />

          <label className="visuallyhidden" htmlFor="itemImage">
            Image:
          </label>
          <input
            onChange={this.props.handleChange}
            value={this.props.formState.itemImage}
            type="text"
            id="itemImage"
            className="itemImage"
            placeholder="Image"
          />

          <input className="btn btn--add" type="submit" value="Add Item" />
        </form>
        <section className="inventoryContainer">
          {Object.entries(this.props.inventoryItems).map(item => {
            return (
              <div key={item[0]} className="inventoryItem ">
                <h2 className="subHeading">{item[1].itemName}</h2>
                <p>Price: ${item[1].itemPrice}</p>
                <p>Quantity: {item[1].itemQuantity}</p>
                <p>Description: {item[1].itemDescription}</p>
                <p>Image: {item[1].itemImage}</p>
                <button
                  className="btn btn--remove"
                  id={item[0]}
                  onClick={this.props.removeItem}
                >
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
