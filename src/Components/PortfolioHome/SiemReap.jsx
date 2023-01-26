import FooterDesign from '../FooterDesign';
import Navbar from '../Navbar';
import { MDBIframe } from 'mdbreact';
import Carousel from 'react-multi-carousel';
import {
  MDBCard, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardHeader,
  MDBCardBody, MDBCardFooter
} from 'mdb-react-ui-kit';
import Scrolltop from '../Scrolltop';

export default function SiemReap() {

 /** carousel frame item place */
 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
/** End carousel frame item place */

  return (
    <>
      {/* ======================== Navbar ======================== */}
      <Navbar/>
      {/* ======================== End Navbar ======================== */}

      <br></br> <br></br> <br></br><br></br><br></br>
      {/* ======================== Breakcrumbs ======================== */}
      <MDBContainer>
      <MDBBreadcrumb className="p-3 mb-2 bg-light bg-gradient text-dark text-center">
        <MDBBreadcrumbItem>
          <a href='/Home'>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Siem Reap</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      </MDBContainer>
      {/* ======================== End Breakcrumbs ======================== */}

      {/* ======================== Main ======================== */}
      <MDBContainer breakpoint='md' className='mt-3'>
        {/* +++++++++++++ start Portfolio +++++++++++++*/}
        <MDBRow className='mt-3'>

          <MDBCol md='8'>
            {/* Carousel image  */}
            <Carousel
            responsive={responsive } >

              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ backgroundImage: "url('https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ backgroundImage: "url('https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ backgroundImage: "url('https://images.pexels.com/photos/4605114/pexels-photo-4605114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ backgroundImage: "url('https://images.pexels.com/photos/12168511/pexels-photo-12168511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ backgroundImage: "url('https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
            </Carousel>
          </MDBCol>
          
          {/* End Carousel image  */}

          {/* start content info */}
          <MDBCol md='4'>
            <MDBCard alignment='center'>
              <MDBCardHeader><h3><span style={{ fontWeight: 'bold' }}>Location</span></h3></MDBCardHeader>
              <MDBCardBody>
              <MDBContainer className="text-center">
                  <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.9976164393097!2d103.86479701527696!3d13.41247450867855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110168aea9a272d%3A0x3eaba81157b0418d!2sAngkor%20Wat!5e0!3m2!1sen!2skh!4v1673338807929!5m2!1sen!2skh" />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* End content info */}
          
        </MDBRow>
        {/* +++++++++++++ End Portfolio +++++++++++++*/}
        <MDBContainer className='mt-3 text-muted text-start' breakpoint='md' fluid>
          <MDBCard>
            <MDBCardFooter className='text-muted text-start'><span style={{ fontWeight: 'bold' }}>Angkor Wat</span>, temple complex at Angkor, near Siĕmréab, Cambodia, 
                that was built in the 12th century by King Suryavarman II (reigned 1113–c. 1150). The vast religious 
                complex of Angkor Wat comprises more than a thousand buildings, and it is one of the great cultural 
                wonders of the world. Angkor Wat is the world’s largest religious structure, covering some 400 acres 
                (160 hectares), and marks the high point of Khmer architecture. 
                <a href="https://www.britannica.com/topic/flag-of-Cambodia" className="stretched-link"><br></br> <br></br>Detail</a>
              </MDBCardFooter>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
      
      {/* ======================== End Main ======================== */}

      {/* ======================== Footer and Scrolltop ======================== */}
      <Scrolltop/>
      <FooterDesign/>  
    </>
  );
}