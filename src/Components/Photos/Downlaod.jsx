import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBCard } from 'mdb-react-ui-kit';
import record from './record.json'

export default function Download() {
   /** Download function */
   const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {record}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const src = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = src;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  /** End Download function */

  

  return (
    <MDBContainer>
      <MDBBtn   
        style={{ bottom: "-5px", left:"5px", }} 
        className='btn-floating position-relative' 
        color='danger' 
        size='lg'

        // download
        onClick={e => download(e)}
        >
          <MDBIcon fas icon='download' />
      </MDBBtn>
    </MDBContainer>
  );
}

