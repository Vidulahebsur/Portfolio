import React from 'react'
import axios from 'axios'
import PortfolioHeader from './PortfolioHeader';
const FETCH_URL="http://localhost:1215/portfolio/fetchPortfolio"
const BASE_URL="http://localhost:1215/portfolio/addPortfolio"
const GET_URL="http://localhost:1243/themeAsset/fetchThemeAsset"

class PortfolioHeaderService{
    
    getAll(){
        return axios.get(FETCH_URL);
    }
    addPortfolio(portfolioHeader)
    {   
        return axios.post(BASE_URL,portfolioHeader);
       
    }
    fetchThemeAsset(){
        return axios.get(GET_URL);
    }
}
export default new PortfolioHeaderService;