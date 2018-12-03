import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <form action="" className="form form--login">
        <label className="visuallyhidden" htmlFor="username">User Name</label>
        <input type="text" name="username" id="username" placeholder="User Name"/>
        <label className="visuallyhidden" htmlFor="password">User Name</label>
        <input type="password" name="password" id="password" placeholder="Password"/>
        <button className="btn btn--login">Log In</button>
        <button className="btn btn--login">Guest</button>
        
      </form>
    </div>
  );
};

export default Home;
