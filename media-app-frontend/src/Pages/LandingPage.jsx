import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';




function LandingPage() {

  const navigate = useNavigate();

  return (
    <div>
      <Container>
      {/* first row */}
      <Row className='py-5 my-5'>
        <Col sm={12} md={6}>
        {/* content */}
        <h2>Welcome to <span className='text-primary fw-bold'>MediaTube</span></h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur architecto soluta vel, numquam molestias delectus repellat temporibus, quae culpa illum eligendi facere? Temporibus, nemo tempora molestias perspiciatis natus quo consectetur.
        Doloremque vitae esse, ratione vel accusamus minus animi ea, suscipit tempora facilis omnis quisquam repudiandae? Dolores, distinctio rem? Eveniet facere esse reprehenderit ab obcaecati accusantium libero praesentium blanditiis? Repellat, perspiciatis.</p>
        <MDBBtn onClick={()=>navigate('/home')}>Get Started</MDBBtn>
        </Col>
        
        <Col sm={12} md={6}>
        {/* image */}
        <img style={{width:'100%',height:'320px',objectFit:'cover',mixBlendMode:'multiply'}} src="https://cdn.dribbble.com/users/1161517/screenshots/11465357/media/286bb09a236ca65ef4950093444c182d.gif" alt="" />
        </Col>
      </Row>

      {/* second row */}
      <h1 className='text-center my-4'><span className='text-primary'>Fe</span>atures</h1>
      <Row className='pb-5'>


        
        
        <Col sm={12} md={6} lg={4}>
        <MDBCard  className='bg-image hover-zoom'>
      <MDBCardImage style={{width:'100%',height:'300px',}} src='https://gifdb.com/images/high/listening-to-music-playing-headphones-917xrfcj5ywy343q.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><span className='text-info fw-semibold fs-4'>M</span>anaging Videos</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4}>
        <MDBCard  className='bg-image hover-zoom'>
      <MDBCardImage style={{width:'100%',height:'300px',objectFit:'cover'}} src='https://giffiles.alphacoders.com/173/173919.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><span className='text-danger fw-semibold fs-4'>C</span>ategorise Videos</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4}>
        <MDBCard className='bg-image hover-zoom'>
      <MDBCardImage style={{width:'100%',height:'300px',objectFit:'cover'}} src='https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><span className='text-warning fw-semibold fs-4'>W</span>atch History</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </Col>

      </Row>

    {/* third row */}
      <Row className='border border-primary py-3 px-5 my-5 bg-secondary'>
        <Col sm={12} md={6}>
          <h3 className='my-5 text-primary'>Simple , Fast and Powerful</h3>
          <h5><span className='text-primary'>Play</span> everything</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto maiores voluptatibus a delectus illo praesentium cum reprehenderit debitis facilis, excepturi facere impedit asperiores voluptatem eum temporibus. Reiciendis, nemo temporibus!
          </p>
          
          <h5><span className='text-danger'>Categorise</span> Videos</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto maiores voluptatibus a delectus illo praesentium cum reprehenderit debitis facilis, excepturi facere impedit asperiores voluptatem eum temporibus. Reiciendis, nemo temporibus!
          </p>
          
          <h5><span className='text-warning'>Managing</span> History</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto maiores voluptatibus a delectus illo praesentium cum reprehenderit debitis facilis, excepturi facere impedit asperiores voluptatem eum temporibus. Reiciendis, nemo temporibus!
          </p>
          
        </Col>
        
        <Col  sm={12} md={6} >
        {/* <iframe style={{marginTop:'20%'}} width="100%" height="80%" src="https://www.youtube.com/embed/IqwIOlhfCak?si=dBkx6R3yfDJyocpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe style={{marginTop:'20%'}} width="100%" height="430px" src="https://www.youtube.com/embed/IqwIOlhfCak?si=am_ih6NnZRv-zrih&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe style={{marginTop:'20%'}} width="100%" height="430px" src="https://www.youtube.com/embed/Po3jStA673E?si=Fjxqj_01HAdiOJPI&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>

      </Row>

    </Container>
    </div>
  )
}

export default LandingPage