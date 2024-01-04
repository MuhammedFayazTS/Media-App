import React from 'react';
import Card from 'react-bootstrap/Card';
import {MDBBtn} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addToWatchHistory, deleteVideo } from '../services/allAPI';
import { toast,ToastContainer } from 'react-toastify';


function displayDataCard({displayData,setDeleteVideoStatus,insideCategory}) {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  // add watch history function with handle show
  const handleShow = async() => {
    setShow(true)
    // api call to add to watch history
    const {caption,embedLink} = displayData
    // to get current time
    let today = new Date();
    // date and time format
    let timestamp = new Intl.DateTimeFormat('en-in',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);
    // console.log(new Intl.DateTimeFormat('en-us'));
    console.log(timestamp);
    let videoDetails={
      caption,
      embedLink,
      timestamp
    }

    await addToWatchHistory(videoDetails);

  };

  // remove video
  const handleDelete= async()=>{
    const {id} = displayData;
    if(id){
      const deleted = await deleteVideo(id);
      toast.error("Video deleted successfully");
      setDeleteVideoStatus(true)
    }
  }

  // drag function
  const dragStarted=(e,id)=>{
    console.log("drag started"+id,e);
    e.dataTransfer.setData("videoId",id);
  }


  return (
      <Row >
    <ToastContainer />
        <Col >
          <Card draggable onDragStart={(e)=>dragStarted(e,displayData.id)} style={{width:'90%',background:'rgba(0,0,0,0.03)' }} className='m-5 shadow border border-dark-emphasis '>
            <Card.Img
              onClick={handleShow}
              variant="top"
              height={'200px'}
              src={displayData.url}
              alt={`${displayData.caption} image`}
            />
            <Card.Body className="d-flex  justify-content-between align-items-center">
              <Card.Title>{displayData.caption}</Card.Title>
              {insideCategory?"":
                <MDBBtn onClick={handleDelete} color="light">
                <i  className="fa-solid fa-trash text-primary"></i>
              </MDBBtn>}
            </Card.Body>
          </Card>
        </Col>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>displayData title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="325"
            src={displayData.embedLink}
            title="YouTube displayData player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            ></iframe>
        </Modal.Body>
      </Modal>
            </Row>
  );
}

export default displayDataCard