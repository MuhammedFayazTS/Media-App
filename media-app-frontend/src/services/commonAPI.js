//single function api call with different requests

import axios from "axios";

export const commonAPI = async(httpMethod,url,reqBody) =>{

    let requestConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
    }


    return await axios(requestConfig).then((result)=>{
        return result
    })
    .catch((err)=>{
        return err
    })
}