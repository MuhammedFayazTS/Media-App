import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
        <MDBNavbar dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='gap-3 mx-4'>
          <i class="fa-solid fa-film fa-lg fa-bounce"></i>
            MediaTube
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header