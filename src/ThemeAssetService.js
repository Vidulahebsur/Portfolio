import React from 'react'
import axios from 'axios'
import PortfolioHeader from './PortfolioHeader';
const FETCH_URL="http://localhost:1215/themeAsset/fetchThemeAsset"
const BASE_URL="http://localhost:1215/themeAsset/addThemeAsset"
const GET_URL="http://localhost:1215/asset/fetchAsset"
const theme_url="http://localhost:1215/asset/fetchAssetByThemeName"
class ThemeAssetService{
    
    addThemeAsset(themeAsset,assetClass)
    {
        return axios.post(`${BASE_URL}/`+assetClass,themeAsset);
        
    }
    fetchThemeAsset(themeName){
        return axios.get(`${theme_url}/`+themeName);
    }
    getAll(){
        return axios.get(GET_URL);
    }

}
export default new ThemeAssetService;