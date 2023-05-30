import React, { useState, useEffect } from "react";
import './Navbar.css';
import symbol from './Images/symbol.png';
function Navbar() {
  return (
    <div>
      <div className="logo">
        <img src={symbol} className="navlogo"></img>
      </div>
      <div className="navcomp">
        <ui class="nav navbar-nav">
          <li><a href="/portfoliotheme">Home</a></li>
          <li><a href="/desktop">Portfolio</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" style={{"color":"white"}}>Admin
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" style={{"backgroundColor":"white","color":"black"}}>
              <li><a href="/#">Security Master</a></li>
              <li><a href="/addasset">Add Asset</a></li>
              <li><a href="/addtheme">Add Theme</a></li>
            </ul>
          </li>
        </ui>
      </div>
      <hr className="line"></hr>
    </div>
  );

}

export default Navbar;