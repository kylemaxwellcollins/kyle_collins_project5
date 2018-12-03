import React, { Component } from "react";
import { FaTimesCircle } from "react-icons/fa";

class Pos extends Component {
  render() {
    return (
      <div className="pos">
        <div className="wrapper">
          <div className="posContainer">
            <section className="products">
              {Object.entries(this.props.inventoryItems).map(itemPair => {
                const id = itemPair[0];
                const item = itemPair[1];

                return (
                  <div key={id} className="product">
                    <img
                      className="productImage"
                      src={item.itemImage}
                      alt={item.itemDescription}
                    />
                    <h2 className="subHeading--product">{item.itemName}</h2>
                    <p>Price: ${item.itemPrice}</p>
                    <p>Inventory: {item.itemQuantity}</p>
                    <button
                      className="btn btn--general"
                      id={id}
                      onClick={this.props.addToCart}
                      disabled={
                        this.props.inventoryItems[id].itemQuantity === 0
                          ? "disabled"
                          : false
                      }
                    >
                      Add
                    </button>
                  </div>
                );
              })}
            </section>
            <section className="cart">
              <h2 className="subHeading">Cart</h2>
              <div className="cartContainer">
                <div className="cartItems">
                  {this.props.cartState.map(item => {
                    return (
                      <div className="cartItem">
                        <p>{item.itemName}</p>
                        <p>${item.itemPrice}</p>
                        <button
                          className="deleteFromCart"
                          onClick={this.props.deleteFromCart}
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="process">
                  <p className="total">Total: {this.props.cartTotal}</p>
                  <button className="btn btn--general" onClick={this.props.process}>
                    Process
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Pos;
