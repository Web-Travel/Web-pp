import FooterDesign from '../FooterDesign';
import Navbar from '../SidebarBeforeLogin/Navbar';
import { MDBIframe } from 'mdbreact';
import Carousel from 'react-multi-carousel';
import {
  MDBCard, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardHeader,
  MDBCardBody, MDBCardFooter
} from 'mdb-react-ui-kit';
import Scrolltop from '../Scrolltop';

export default function PhnomPenh() {

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
        <MDBBreadcrumbItem active>Phnom Penh</MDBBreadcrumbItem>
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
                      style={{ 
                        backgroundImage: 
                        "url('https://images.pexels.com/photos/3226403/pexels-photo-3226403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                        height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ 
                        backgroundImage: 
                        "url('https://images.pexels.com/photos/11295256/pexels-photo-11295256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                        height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ 
                        backgroundImage: 
                        "url('https://myanmarburmabirma.files.wordpress.com/2022/01/phnom_penh_zentralmarkt.jpg')", 
                        height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ 
                        backgroundImage: 
                        "url('https://images.pexels.com/photos/3118410/pexels-photo-3118410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                        height: '510px' }}
                    > </div>
                  </MDBRipple>    
                </MDBCard>
              </div>
              <div className='p-6 mt-3 me-3 mb-4'>    
                <MDBCard>
                  <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay rounded-7 '>
                    <div className=' text-center bg-image' 
                      style={{ 
                        backgroundImage: 
                        "url('https://images.pexels.com/photos/11295257/pexels-photo-11295257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                        height: '510px' }}
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
                  <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.15121032574!2d104.75010203308362!3d11.579666931912387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1673357786719!5m2!1sen!2skh" />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* End content info */}
          
        </MDBRow>
        {/* +++++++++++++ End Portfolio +++++++++++++*/}
        <MDBContainer className='mt-3 text-muted text-start' breakpoint='md' fluid>
          <MDBCard>
          <MDBCardFooter className='text-muted text-start'><span style={{ fontWeight: 'bold' }}>Phnom Penh</span>
              , also spelled Pnom Penh or Phom Penh, Khmer Phnum Pénh, capital and chief city of Cambodia. It lies at the 
              confluence of the Basăk (Bassac), Sab, and Mekong river systems, in the south-central part of the country. 
              <br></br><br></br>
              Phnom Penh was founded in 1434 to succeed Angkor Thom as the capital of the Khmer nation but was abandoned 
              several times before being reestablished in 1865 by King Norodom. The city formerly functioned as a processing 
              centre, with textiles, pharmaceuticals, machine manufacturing, and rice milling. Its chief assets, however, 
              were cultural. Institutions of higher learning included the National University of Phnom Penh 
              (founded in 1956 as the Royal Khmer University), with schools of engineering, fine arts, technology, 
              and agricultural sciences, the latter at Chamcar Daung, a suburb. Also located at Phnom Penh were the Royal 
              University of Agronomic Sciences and the Agricultural School of Prek Leap.
              <a href="https://www.britannica.com/place/Phnom-Penh" className="stretched-link"><br></br> <br></br> Detail</a>
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