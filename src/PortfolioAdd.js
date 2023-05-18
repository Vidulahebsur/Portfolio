import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

import './PortfolioAdd.css';

import home from './Images/home.png';

import back from './Images/back.png';
import PortfolioHeaderService from "./PortfolioHeaderService";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const PortfolioAdd = () => {
    const [portfolios, setPortfolios] = useState('')
    const [portfolioName, setPortfolioName] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('')
    const [benchMark, setBenchMark] = useState('')
    const [themeName, setThemeName] = useState([])
    const [fundManagerName, setFundManagerName] = useState('')
    const [rebalancingFrequency, setRebalancingFrequency] = useState('')
    const [investmentValue, setInvestmentValue] = useState('')
    const [urlValue, setUrlValue] = useState('')
    const BASE_URL = "http://localhost:1212/portfolio/addPortfolio"
    const navigate = useNavigate();

    function changeUrlValue(e) {
        setUrlValue(e.target.value);
    }
    function changeRebalancingFrequency(e) {
        setRebalancingFrequency(e.target.value);
    }
    function changeBaseCurrency(e) {
        setBaseCurrency(e.target.value);
    }
    function changeBenchMark(e) {
        setBenchMark(e.target.value);
    }
    function getTheme() {
        PortfolioHeaderService.fetchThemeAsset().then(
            (response) => { setThemeName(response.data) }
        )
    }
    function addPortfolio(urlValue, portfolioHeader) {
        return axios.post(`${BASE_URL}/` + urlValue, portfolioHeader);

    }
    console.log(urlValue)

    // const savePortfolio = (event) => {
    //     event.preventDefault()
    //     const portfolioHeader = { portfolioName, baseCurrency, benchMark, themeName, fundManagerName, rebalancingFrequency, investmentValue }
    //     console.log(portfolioHeader);
    //     addPortfolio(urlValue, portfolioHeader).then(
    //         (response) => {
    //             console.log(response.data);
    //             navigate('/securitypage');
    //         }).catch(
    //             error => { console.log(error); })
    // }
    useEffect(() => {
        getTheme()
    }, [])

    return (

        <div>

            <>

                <Navbar />

            </>

            <div className="background1">

                <div>
                    <h1>Portfolio Header</h1>

                    {/* <div className="background2">

                        <button className="homebut" onClick={()=>navigate("/")}>

                            <img src={home} className="homelogo"></img>

                        </button>

                        <p className="heading">Portfolio Management</p>

                    </div> */}

                    <div className="background3">

                        <div>

                            <div>

                            </div>

                            <div class="row">

                                <div class="column">

                                    <div className="left">




                                        <div className="lc">

                                            <label className="text2">Portfolio Name: </label>&nbsp;

                                            <input className="pill" placeholder="Enter unique name"
                                                value={portfolioName}
                                                onChange={(event) => setPortfolioName(event.target.value)}></input><br />

                                        </div><br />

                                        <div >

                                            <label className="text2">Base Currency: </label>&nbsp;

                                            <select className="selections" value={baseCurrency} onChange={changeBaseCurrency}>
                                                <option>---Choose Currency---</option>
                                                <option value="INR">INR</option>

                                                <option value="USD">USD</option>

                                                <option value="GBP">GBP</option>

                                            </select><br /> <br />


                                        </div>

                                        <div>
                                            <label className="text8">Benchmark :</label>&nbsp;
                                            <select className="selections" value={benchMark} onChange={changeBenchMark}>
                                                <option>---Choose Benchmark---</option>
                                                <option value="NIFTY">NIFTY</option>

                                                <option value="NIFTY50">NIFTY50</option>

                                                <option value="NIFTY100">NIFTY100</option>

                                            </select><br /> <br />
                                        </div>


                                    </div>

                                </div>

                                <div class="column2">

                                    <div className="right">

                                        <div className="rc">

                                            <label className="text2">Fund Manager: </label>&nbsp;

                                            <input className="pill" placeholder="Enter fund manager name" value={fundManagerName}
                                                onChange={(event) => setFundManagerName(event.target.value)}></input><br />

                                        </div>

                                        <div className="investment">

                                            <label className="text2">Investment value : </label>&nbsp;

                                            <input className="ipill" placeholder="Enter Investment value"
                                                value={investmentValue}
                                                onChange={(event) => setInvestmentValue(event.target.value)}></input><br />

                                        </div>
                                        <>
                                            <br />
                                        </>

                                        <div>
                                        
                                            <label className="text2">Theme Name:</label>&nbsp;

                                            <select className="selections" value={urlValue} onChange={changeUrlValue}>
                                                {
                                                    themeName ? (themeName.map((data, key) => (
                                                        <option value={data.themeName}> {data.themeName}</option>
                                                    ))) : (<>Loading...</>)
                                                }

                                            </select>
                                            <button className="themebutton" onClick={()=>navigate('/theme')}>View</button>
                                            

                                        </div>

                                        <div>
                                            <label className="text2">Rebalancing Frequency: </label>&nbsp;
                                            <select className="selections" value={rebalancingFrequency} onChange={changeRebalancingFrequency}>
                                                <option>---Choose RebalancingFrequency---</option>
                                                <option value="DAILY">DAILY</option>

                                                <option value="MONTHLY">MONTHLY</option>

                                                <option value="QUATERLY">QUATERLY</option>

                                                <option value="YEARLY">YEARLY</option>

                                                <option value="SIXMONTHS">SIXMONTHS</option>


                                            </select><br /> <br />
                                            <br />

                                        </div>


                                        <div>

                                            <button className="cancelb" onClick={() => navigate("/landing")}>Back</button>

                                            {/* <button className="nextb" onClick={(event) => savePortfolio(event)}>Next</button> */}
                                            <button className="nextb" onClick={() => navigate("/securitypage")}>Next</button>
                                                
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>




            </div>

        </div>





    );

}

export default PortfolioAdd;