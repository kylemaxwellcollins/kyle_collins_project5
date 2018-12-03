import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return <header>
        <div className="wrapper">
          <div className="headerContainer">
            <h1 className="heading">
              <Link to="/" className="heading">
                Inventory Manager
              </Link>
            </h1>
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
      </header>;
  }
}

export default Header;
