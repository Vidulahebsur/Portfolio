import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './Theme.css';

function Theme(){
    const navigate=useNavigate();

    const[data,setData]=useState();
    
    return(
        <div>
            <>
            <Navbar/>
            </>
            <div className="theader">
                <h1>Themes</h1>
            </div>
            <div class="container8">
                    <table class="table table-bordered">
                        <thead className="head">
                            <tr>
                                <th>Id</th>
                                <th>ThemeName</th>
                                <th>Equity</th>
                                <th>Cash</th>
                                <th>Risk</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                        </tbody>
                    </table>
                <button className="back" onClick={()=>navigate('/portfolioadd')}>Back</button>

                </div>
        </div>
    );
}
export default Theme;