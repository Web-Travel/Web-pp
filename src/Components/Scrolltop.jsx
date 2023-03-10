import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

{/*=================================================================
*   Scroll Back To Top link built with Bootstrap 5. Create a button 
*   that appears when you start scrolling and on click smooth scrolls 
*   you to the top of the page.
*   ================================================================= */}

export default function Scrolltop() {

  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  /** Function back to top */
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  /** End Function back to top */
  
  return (
    <MDBContainer>
      <MDBBtn 
        onClick={backToTop} 
        id='btn-back-to-top' 
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
        }} 
        className='btn-floating' 
        color='danger' 
        size='lg'>
        <MDBIcon fas icon="arrow-up" />
      </MDBBtn>
    </MDBContainer>
  );
}

