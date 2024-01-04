import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
         <MDBFooter style={{ backgroundColor: 'rgba(0, 0, 0,0.1)' }} className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(217, 35, 15,0.8)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light-emphasis' href='/'>
          MediaPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer