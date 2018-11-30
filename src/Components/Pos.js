import React, { Component } from "react";

class Pos extends Component {
  render() {
    return (
      <div className="pos">
        <div className="wrapper">
          <div className="posContainer">
            <section className="products">
              {Object.entries(this.props.inventoryItems).map(item => {
                return (
                  <div key={item[0]} className="product">
                    <img
                      className="productImage"
                      src={item[1].itemImage}
                      alt={item[1].itemDescription}
                    />
                    <h2>{item[1].itemName}</h2>
                    <p>Price: ${item[1].itemPrice}</p>
                    <p>Inventory: {item[1].itemQuantity}</p>
                    <button id={item[0]} onClick={this.props.addToCart}>
                      Add
                    </button>
                  </div>
                );
              })}
            </section>
            <section className="cart">
              {/* CART COMPONENT GOES HERE */}
              {/* {Object.entries(this.cartItems).map(item => {
                return (
                  <div className="cartContainer">
                    <p></p>
                  </div>
                );
              })} */}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Pos;
