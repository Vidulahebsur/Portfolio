import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Addasset.css';
import axios from "axios";
import PortfolioHeaderService from "./PortfolioHeaderService";


function Addassets() {

    const[assetId,setAssetId]=useState('');
    const[assetClasses,setAssetClass]=useState('');
    const[subAssetClass,setSubAssetClasss]=useState('');
    // const[allocation,setAllocation]=useState('');
    // const[themeName,setThemeName]=useState([]);
    // const[trlValue,setTrlValue]=useState('');
    const[investmentHorizon,setInvestmentHorizon]=useState('');
    const[risk,setRisk]=useState('');
    const[liquidity,setLiquidity]=useState('');
    const[returns,setReturns]=useState('');
    
    
    const asset_url="http://localhost:1243/asset/add"
    const handleClick=()=>{
        Swal.fire({
            position: 'middle-end',
            icon: 'success',
            title: 'Asset Class Added',
            showConfirmButton: false,
            timer: 2500
          })
    }
    const navigate=useNavigate();

    function addAsset(asset){
        return axios.post(asset_url,asset)

    }

    // function getTheme(){
    //     PortfolioHeaderService.fetchThemeAsset().then(
    //         (response)=>{setThemeName(response.data)}
    //     )
    // }

    const saveAsset=(event)=>{
        event.preventDefault()
        const asset={assetId,assetClasses,subAssetClass,risk,investmentHorizon,liquidity,returns}
        console.log(asset);
          addAsset(asset).then(
           (response)=> {console.log(response.data);
            
             }).catch(
             error =>{console.log(error);})
    }
        
        // useEffect(()=>{
        //     getTheme()
        // },[])
        
        
    


    return (

<div>
    <br/>
<div className="containera">
                <div class="headtheme" style={{"font-size":"170%"}}>ADD ASSET</div>
                <form action="#">
                    <div class="portfolio-details">
                        <div class="input-box">
                            <span class="details">Asset ID</span>
                            <input type="text" placeholder="Enter the asset id"  required
                            value={assetId} onChange={(event)=>setAssetId(event.target.value)}></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Risk</span>
                            <select className="selections" 
                             value={risk} onChange={(event)=>setRisk(event.target.value)}>
                                                 <option>-------Choose Risk-------</option>
                                                <option >High</option>

                                                <option >Low</option>

                                               <option >Medium</option>

                                 </select><br /> <br />
                            
                        </div>
                        <div class="input-box">
                            <span class="details">Asset Class</span>
                            <input type="text" placeholder="Enter asset class" 
                            value={assetClasses} onChange={(event)=>setAssetClass(event.target.value)}></input>
                        </div>
                        <div class="input-box">
                            <span class="details">Returns</span>
                            <select className="selections" 
                            value={returns} onChange={(event)=>setReturns(event.target.value)}>
                                                 <option>-----Choose Returns-----</option>
                                                 <option >High</option>

                                                 <option >Medium</option>

                                                <option >Low</option>

                                           </select><br /> <br />
                        </div>
                        <div class="input-box">
                            <span class="details">Sub-Asset Class</span>
                            <input type="text" placeholder="Enter the sub-asset class" 
                            value={subAssetClass} onChange={(event)=>setSubAssetClasss(event.target.value)}
                                             ></input>
                        </div>
                        
                        <div class="input-box">
                            <span class="details">Investment Horizon</span>
                            <select className="selections" 
                            value={investmentHorizon} onChange={(event)=>setInvestmentHorizon(event.target.value)}>
                                                 <option>----Select your choice----</option>
                                                 <option >Short</option>

                                                 <option >Long</option>

                                                


                                           </select><br /> <br />
                        </div>
                        <div class="input-box">
                            <span class="details">Liquidity</span>
                            <select className="selections" style={{width: "78%","height":"50%"}} 
                            value={liquidity} onChange={(event)=>setLiquidity(event.target.value)} >
                                                 <option>----Choose liquidity----</option>
                                                 <option>High</option>
                                                 <option>Medium</option>
                                                 <option>Low</option>

                                          </select>
                        </div>
                        {/* <div className="view">
                            <button  >View Theme</button>
                     </div> */}
                   </div>
                    {/* <div>
                        <button className="cancelb wert" >Back</button>
                           <button className="nextb wert" >Next</button>
                    </div> */}
                    <br/>
                <div class="col-md-6 wert">
                      
                      <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Save" onClick={saveAsset}/>
                  
              </div><br/><br/>
              
                <div class="col-md-6 wert">
                      
                      <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Next" onClick={()=>{navigate(`/addtheme`)}}/>
                  
              </div>
        
              
                </form>
                
            </div>
</div>
    );
}
export default Addassets;
