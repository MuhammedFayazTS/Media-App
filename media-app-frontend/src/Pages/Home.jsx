import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import View from '../Components/View';
import Category from '../Components/Category';





function Home() {
  const [deleteCataegoryState,setDeleteCategoryState]=useState(false)
  const[uploadVideoServerResponse,setUploadVideoServerResponse] = useState({});

  return (
    <div>
      {/* 1st div */}
          <Container className='d-flex  align-item-center justify-content-between mt-5 '>
            <div className="add-videos">
              <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
            </div>

            <Link style={{textDecoration:'none'}} to={'/watchhistory'}>Watch History</Link>
          </Container>
      
      {/* 2nd div */}
      {/* <div   className='d-flex  justify-content-between'> */}
      <Row>
            <Col className='add-videos' xs={8}>
              <h5 className="mt-4 text-center fw-semibold fs-3"><span className='text-primary'>All</span> Videos</h5>
              <View uploadVideoServerResponse={uploadVideoServerResponse} />
            </Col>


            <Col xs={4}>
              <Category  />
            </Col>


          </Row>

    </div>
  )
}

export default Home