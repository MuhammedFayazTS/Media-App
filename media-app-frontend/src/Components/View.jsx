import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap';


function View({uploadVideoServerResponse}) {
  // delete video status state
  const [deletevideoStatus,setDeleteVideoStatus] = useState(false);
  const [allVideo,setAllVideo] = useState([]);
  // api call for displaying video cards
  const getUploadedVideos = async()=>{
    const {data}= await getAllVideos() //all uploaded videos
    // console.log(data); //all array videos
    setAllVideo(data); //all array videos
  }
  console.log(allVideo);
  useEffect(()=>{
    getUploadedVideos();
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse, deletevideoStatus])
  return (
    <>
      <Row className='px-0 mx-0 pb-5 mb-5' >
          {
            allVideo.length > 0?allVideo.map(video=>(
              <Col  xs={12} md={6} lg={4} xl={3}>
                <VideoCard setDeleteVideoStatus={setDeleteVideoStatus} displayData={video} />
            </Col>
            )): <p>No Data</p>
            }
      </Row>
    </>
  )
}

export default View