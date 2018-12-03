import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="headerContainer">
            <div className="logoContainer">
              <img
                src={require("../assets/noun_Stock_64261.svg")}
                alt="brand logo"
                className="logo"
              />
              <h1>
                <Link to="/" className="heading">
                  Stockpile
                </Link>
              </h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/inventory" className="subHeading--nav">
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/pos" className="subHeading--nav">
                    P.O.S
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
