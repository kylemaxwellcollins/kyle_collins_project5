import React, { Component } from "react";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="headerContainer">
            <h1>
              <Link to="/">Inventory Manager</Link>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                  <Link to="/pos">P.O.S</Link>
                </li>
                {/* <li>
                  <Link to="/home">Home</Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
