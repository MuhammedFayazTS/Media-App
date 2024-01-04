import React from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {
  const [video,setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  });
  console.log(video);
  const [show, setShow] = useState(false);

  const getEmbedLink = (e) => {
      const {value} = e.target;
      const Link = `https://www.youtube.com/embed/${value.slice(-31)}`;
      setVideo({...video,embedLink:Link});
  }

  const handleUpload= async()=>{ //to upload a video
      const {id,caption,url,embedLink} = video;
      
      if(!id||!caption||!url||!embedLink){
        toast.error("please fill the form")
      }
      else{
        // make an api call
        const response = await uploadVideo(video)
        console.log(response);
        if(response.status >= 200 && response.status<300){
          setUploadVideoServerResponse(response.data);
          toast.success(`${response.data.caption} added successfully`);
          setVideo({
            id:"",
          caption:"",
          url:"",
          embedLink:""})
          handleClose();
        }
        else{
          toast.warning('please provide a unique id')
        }
      }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <ToastContainer />
      <div className="container d-flex align-items-center">
        <h5>Upload  Video</h5>
        <MDBBtn onClick={handleShow} color='link' rippleColor='light'><i class="fa-solid fa-circle-plus fa-xl"></i></MDBBtn>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <p>Please fill following details :</p>

          <form>
            
          <FloatingLabel  label="Video Id" className="mb-3">
        <Form.Control 
        onChange={(e)=>setVideo({...video,id:e.target.value})}
        type="text" placeholder="Video Id" />
      </FloatingLabel>

      <FloatingLabel label="Video Caption" className="mb-3">
        <Form.Control
         onChange={(e)=>setVideo({...video,caption:e.target.value})}
         type="text" placeholder="Video Caption" />
      </FloatingLabel>
            
          <FloatingLabel 
          onChange={(e)=>setVideo({...video,url:e.target.value})}
          label="Video Image Url" className="mb-3">
        <Form.Control  type="text" placeholder="Video Image Url" />
      </FloatingLabel>

      <FloatingLabel label="Youtube Link">
        <Form.Control 
        onChange={getEmbedLink}
        type="text" placeholder="Youtube Link" />
      </FloatingLabel>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <MDBBtn onClick={handleUpload}>Upload</MDBBtn>
        </Modal.Footer>
      </Modal>
      
      </div>
    </>
  )
}

export default Add