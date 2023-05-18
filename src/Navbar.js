import React from "react";
import './Navbar.css';
import symbol from './Images/symbol.png';



function Navbar() {
    return (
        <div className="main">
            
            <nav class="navbar navbar">
            {/* <nav class="navbar fixed-top navbar-expand-md navbar-light bg-faded"> */}
                <div class="container-fluid" >

                    <div class="navbar-header" >

                        <div >

                            <img src={symbol} alt="logo" class="image"  />

                        </div>

                    </div >




                    <div className="list">

                        <ul class="nav navbar-nav" >

                            <li><a class="nav-link" href="/home" >Home</a></li>
                            <li><a class="nav-link" href="/desktop" >Portfolio</a></li>
                            <li class="dropdown">

                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Admin

                                    <span class="caret"></span></a>

                                <ul class="dropdown-menu">

                                    <li><a href="/Isin">Security Master</a></li>

                                    <li><a href="/symbol">Create Asset</a></li>

                                    <li><a href="/description">Create Theme</a></li>

                                </ul>

                            </li>


                        </ul>

                    </div>


                </div>


            </nav>
        </div>
    );
}
export default Navbar;