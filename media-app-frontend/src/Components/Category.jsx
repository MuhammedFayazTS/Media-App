import React, { useEffect } from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories,getCategories, getVideo, removeCategories, updateCategories } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  // to hold the category name from the form
  const [categoryName,setCategoryName] = useState('');
  // console.log(categoryName);

  // to hold category details
  const [categoryDetails,setCategoryDetails] = useState([]);
  console.log(categoryDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // add category function
  const handleAddCategory =async()=>{
    const body={
      categoryName,
      allVideos:[]
    }
    // api call
    if(body.categoryName.length>0){
      const response = await addCategories(body);
      toast.success('category added successfully');
      setCategoryName('')
      getCategory();

      handleClose();
    }
    else{
      toast.error('Cannot add category')
    }
  }

  // get categories
  const getCategory = async()=>{
    const {data} = await getCategories();
    // console.log(data);
    setCategoryDetails(data)
  }

  // delete categories
  const handleDeleteCategory = async(id)=>{
    const res = await removeCategories(id);
    toast.error('Deleted successfully')
    getCategory()
    console.log(res);
  }

  useEffect(()=>{
    getCategory()
  },[])

  // drop function
  const videoDrop=async(e,categoryId)=>{
    console.log("video dropped"+categoryId);
    const videoId = e.dataTransfer.getData("videoId");
    console.log(videoId);

    // api call
    const {data} = await getVideo(videoId);
    console.log(data); //data
    // get categoryDetails
    const selectedCategory = categoryDetails.find(item=>item.id===categoryId)
    // console.log(selectedCategory);
    // addVideo Details In to array (allVideos[])\
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    // make an API call to update category details.
    await updateCategories(categoryId,selectedCategory)
    getCategory()
  }
  // drag over
  const dragOver=(e)=>{
    console.log("video Drag over");
    e.preventDefault();
  }

  return (
    <>
    <ToastContainer />
      <div>
        <MDBBtn onClick={handleShow} className="me-5 mt-3">
          Add new Category
        </MDBBtn>
      </div>

      <div>
        {
          categoryDetails.length>0?categoryDetails.map(item=>(
              <div onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)} className=' me-2 my-2 p-3 border rounded'>
                <div className='d-flex justify-content-between '>
                  <h5>{item.categoryName}</h5>
                    <MDBBtn onClick={()=>handleDeleteCategory(item.id)}  color='primary'>
                    <i  className="fa-solid fa-trash text-light"></i>
                    </MDBBtn>
                </div>
                
                <Row >
                  {
                    item.allVideos && item.allVideos.map(data=>(
                      <Col>
                        <VideoCard displayData={data}  insideCategory={true} />
                      </Col>
                    ))
                  }
                </Row>

              </div>
          )):<p>No data</p>
          
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form>
          {/* <FloatingLabel controlId="floatingInput" label="Category Id" className="mb-3">
            <Form.Control type="text" placeholder="Category Id" />
          </FloatingLabel> */}
          <FloatingLabel controlId="floatingPassword" label="Category Name">
            <Form.Control autoComplete='off' onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category