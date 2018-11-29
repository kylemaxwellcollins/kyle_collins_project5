import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class Header extends Component {

  render() {
    return (
      <Router>
        <header>
          <div className="wrapper">
            <div className="headerContainer">
              <h1>Inventory Manager</h1>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/inventory">Inventory</NavLink>
                  </li>
                  <li>
                    <NavLink to="pos">P.O.S</NavLink>
                  </li>
                </ul>
              </nav>  
            </div>
          </div>
        </header>
      </Router>
    );
  }
}



export default Header;
