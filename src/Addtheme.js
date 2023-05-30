import React from "react";
import './Addtheme.css'

import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

function Addtheme() {

  const navigate = useNavigate();
  const [themeName,setThemeName]=useState('');
  const[assetId,setAssetId]=useState('');
  const[allocation,setAllocation]=useState('');
  const[assetData,setAssetData]=useState('');
 
  const theme_url="http://localhost:1243/themeAsset/addThemeAllocation"
  const assetFetch_url="http://localhost:1243/asset/fetchAsset"

    const handleClick=()=>{
        Swal.fire({
            position: 'middle-end',
            icon: 'success',
            title: 'Theme Added',
            showConfirmButton: false,
            timer: 2000
          })
    }

    function Addtheme(themeAsset){
      return axios.post(theme_url,themeAsset);
  }

    function fetchAsset(){
      return axios.get(assetFetch_url)
    }

    

  const saveThemeAsset=(event)=>{
    event.preventDefault()
const themeAsset={themeName,assetId,allocation}
console.log(themeAsset);
Addtheme(themeAsset).then(
   (response)=> {console.log(response.data); 
   navigate('/addasset')
}).catch(
   error =>{console.log(error);})
   }


   useEffect(() => {
    fetchAsset().then(

        (response) => { setAssetData(response.data) },

    ).catch(error => { console.log(error); })
}, [])

console.log(assetData);

    return(
        
      <div class="container">
      <div class=" text-center mt-5 ">

          <div className="headtheme" style={{"marginLeft":"-5%"}}>
          <h1 >ADD THEME</h1>
          </div>
              
          
      </div>

  
  <div class="row ">
    <div class="col-lg-7 mx-auto">
      <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
     
          <div class = "container">
                           <form id="contact-form" role="form">

          

          <div class="controls">
          <div class="col-md-8">
                      <div class="form-group">
                          <label className="rdit" for="form_lastname" style={{"marginLeft":"30%"}}>Theme Name</label>
                          <input id="form_lastname" type="text" name="surname" class="form-control" style={{"marginLeft":"30%", "width": "50rem"}} placeholder="Enter Theme Name" required="required" data-error="Theme name is required."
                          value={themeName} onChange={(event)=>setThemeName(event.target.value)}/>
                                                          </div><br/><br/>
                  </div>
          
                  <div class="col-md-8">
                      <div class="form-group">
                          <label className="rdit" for="form_lastname" style={{"marginLeft":"30%"}}>Allocation</label>
                          <input id="form_lastname" type="text" name="surname" class="form-control" style={{"marginLeft":"30%", "width": "50rem"}} placeholder="Enter allocation" required="required" data-error="Risk is required." 
                          value={allocation} onChange={(event)=>setAllocation(event.target.value)}/>
                                                          </div>
                  <br/><br/>
              </div>
              <div class="row">
                      <div class="col-md-8">
                          <label className="rdit" for="form_need" style={{"marginLeft":"30%"}}>Asset</label>
                          <select id="form_need" name="need" class="form-control uio" style={{"marginLeft":"31%", "width": "50rem"}} required="required" data-error="Please specify your need."
                          value={assetId} onChange={(event)=>setAssetId(event.target.value)}>
                               <option value="" selected disabled >--Select Your Choice--</option>
                                    {
                                        assetData? (assetData.map((data,key)=>(
                                                <option value={data.assetId}> {data.assetClasses}</option>
                                            ))):(<>Loading...</>)
                                    }
                            </select>
                          
                      </div></div><br/><br/>
              <div class="rowed">
                <div class="col-md-6">
                      
                      <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Save" style={{"marginLeft":"-155%"}} onClick={saveThemeAsset}/>
                  
              </div><br/><br/>
              
                <div class="col-md-6">
                      
                      <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Cancel" style={{"marginLeft":"-155%"}} onClick={()=>navigate('/desktop')}/>
                  
              </div>
        
              </div>


      </div>
       </form>
      </div>
          </div>


  </div>
      

  </div>
  

</div>
</div>
);
}
export default Addtheme;