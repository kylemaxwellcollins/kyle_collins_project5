import React, { Component } from "react";
import firebase from "./firebase";


const dbRef = firebase.database().ref();

class Pos extends Component {
  render() {
    return (
      <div>
        <h1>POS</h1>
      </div>
    )
  }
}

export default Pos;
