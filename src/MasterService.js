import React from 'react'
import axios from 'axios'

const GET_URL="http://localhost:1243/master/getByAssetId"
class MasterService{
    fetchData(assetId){
        console.log(assetId)
        return axios.get(`${GET_URL}/`+assetId);
    }
}
export default new MasterService;