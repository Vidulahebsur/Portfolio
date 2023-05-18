import React from "react";
import { useNavigate } from "react-router-dom";
import './SecurityPage.css';
import Navbar from "./Navbar";

function SecurityPage() {
    const navigate= useNavigate();
    return (

        
        <div>
            <>
            <Navbar/>
            </>
            <div>
                <div class="container1">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Portfolio Name</th>
                                <th>Base Currency</th>
                                <th>Benchmark</th>
                                <th>Investment Theme</th>
                                <th>Rebalancing Frequency</th>
                                <th>Investement Value</th>
                            </tr>
                        </thead>

                    </table>
                    </div>
                <div>
                    <button className="add" onClick={()=>navigate('/addsecurity')}>Add Securities</button>
                </div>
                    <div class="container2">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Composition Id</th>
                                    <th>Transaction Date</th>
                                    <th>Security Name</th>                                    
                                    <th>Equity Category</th>                                   
                                    <th>Exchange Name</th>                                   
                                    <th>Units</th>                                    
                                    <th>Price</th>                                    
                                    <th>Allocated Value</th>                                    
                                    <th>Total Transactions</th>                                    
                                    <th>Available Balance</th>                                    
                                    <th>Invested Amount</th>
                                    <th>Portfolio Name</th>                                    
                                </tr>
                            </thead>
                            
                        </table>
                    </div>
                </div>
            <div>
                <button className="ba" onClick={()=>navigate('/landing')}>Back</button>
                <button className="ne" onClick={()=>navigate('/portpage')}>Next</button>
            </div>
            </div>
            );
}
            export default SecurityPage;