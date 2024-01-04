import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// 1. 1st request - upload a video to the server - post - req body

export const uploadVideo = async(reqBody)=>{
    // make post http request to 'http://localhost:4000/videos' and to add video in json server return response to add component
    return await commonAPI("post",`${serverURL}/videos`,reqBody)
}

//  get all videos from  json server

export const getAllVideos = async()=>{
        // make get http request to 'http://localhost:4000/videos' and to view video in json server return response to view component
    return await commonAPI("get",`${serverURL}/videos`,"")
}

// get a particular video from json server

export const getVideo = async(id)=>{
        // make get http request to 'http://localhost:4000/videos/id' and to view video in json server return response to VideoCard component
        return await commonAPI("get",`${serverURL}/videos/${id}`,"");
    }
    
    // delete a particular video
    
    export const deleteVideo = async(id)=>{
    // make delete http request to 'http://localhost:4000/videos/id' and to delete video in json server return response to view component
    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}

// store watch history in json server
export const addToWatchHistory = async(videoDetails)=>{
    // make post http request to 'http://localhost:4000/watch-history' and to addvideo in json server return response to videoCard component
    return await commonAPI("post",`${serverURL}/watch-history`,videoDetails)
}

// get from  watch history in json server
export const getWatchHistory = async()=>{
    // make get http request to 'http://localhost:4000/watch-history' and to view from json server return response to watchHistory component
    return await commonAPI("get",`${serverURL}/watch-history`,"")
}

// add category
export const addCategories = async(reqBody)=>{
    // make post http request to 'http://localhost:4000/category' and to add to json server return response to Category component
    return await commonAPI("post",`${serverURL}/category`,reqBody)
}

// get categories
export const getCategories = async()=>{
    // make get http request to 'http://localhost:4000/category' and to get from json server return response to Category component
    return await commonAPI("get",`${serverURL}/category`,"")
}

// delete categories
export const removeCategories = async(id)=>{
    // make get http request to 'http://localhost:4000/category' and to get from json server return response to Category component
    return await commonAPI("delete",`${serverURL}/category/${id}`,{})
}

// update categories
export const updateCategories = async(id,body)=>{
    // make put http request to 'http://localhost:4000/category' and to get from json server return response to Category component
    return await commonAPI("put",`${serverURL}/category/${id}`,body)
}
