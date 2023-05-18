import React from "react";
import './Landing.css';
import Navbar from "./Navbar";
import edit from './Images/edit.png';
import del from './Images/del.png';
import add from './Images/add.png';
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate=useNavigate();
    return (
        <div>
            <>
            <Navbar/>
            </>
            <div >
                <div>
                    <button className="addbutton">
                        <img src={add} className="add1" onClick={()=>navigate('/portfolioadd')}></img>
                    </button>
                </div>
                <div className="pm">
                    <h1>Portfolio Management</h1>
                </div>
                <div class="container">
                    <table class="table table-bordered">
                        <thead className="head">
                            <tr>
                                <th>Portfolio Name</th>
                                <th>Fund Manager</th>
                                <th>Theme Name</th>
                                <th>Benchmark</th>
                                <th>Investement Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="editbutton">
                                        <img src={edit} className="edit"></img>
                                    </button>
                                    <button className="delbutton">
                                        <img src={del} className="del"></img>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="back" onClick={()=>navigate('/desktop')}>Back</button>
            </div>
        </div>
    );
}
export default Landing;