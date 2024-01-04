import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { getWatchHistory } from '../services/allAPI';

function WatchHistory() {

  const [allWatchHistory,setallWatchHistory] = useState([]);
  const getAllWatchHistory = async()=>{
    const {data} = await getWatchHistory();
    setallWatchHistory(data);
  }
  console.log(allWatchHistory)

  useEffect(()=>{
    getAllWatchHistory();
  },[])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-3 container">
        <h3 className="text-primary">Watch History</h3>
        <Link style={{textDecoration:'none'}} to={'/home'}>
            <p className="d-flex align-items-center gap-1">
              <i class="fa-solid fa-arrow-left"></i>
              Back to Home
            </p>
        </Link>
      </div>

      <div className="container">
      {/* <Table striped bordered hover variant="secondary">
      <thead >
        <tr >
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table> */}

<MDBTable hover bordered >
      <MDBTableHead>
        <tr className='table-dark'>
          <th scope='col'>id</th>
          <th scope='col'>Caption</th>
          <th scope='col'>Url</th>
          <th scope='col'>Time</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allWatchHistory?.map(e=>(
            <tr>
          <th scope='row'>{e.id}</th>
          <td>{e.caption}</td>
          <td><Link target='blank' to={e.embedLink}>{e.embedLink}</Link></td>
          <td>{e.timestamp}</td>
        </tr>
            ))
          }
      </MDBTableBody>
    </MDBTable>
      </div>
    </>
  );
}

export default WatchHistory