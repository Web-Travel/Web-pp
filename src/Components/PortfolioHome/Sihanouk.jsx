import FooterDesign from '../FooterDesign';
import Navbar from '../Navbar';
import { MDBIframe } from 'mdbreact';
import Carousel from 'react-multi-carousel';
import {
  MDBCard, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardHeader,
  MDBCardBody, MDBCardFooter
} from 'mdb-react-ui-kit';

{/*--------------------------------------------------------------
  # Preah Sihanouk Component
    -------------------------------------------------------------- */}
export default function Sihanouk() {

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
        <MDBBreadcrumbItem active>Preah Sihanouk</MDBBreadcrumbItem>
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
                        "url('https://images.luxuryescapes.com/q_auto:good/c4ii6mzayenpepqviu5.jpeg')", 
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
                        "url('https://images.pexels.com/photos/12001826/pexels-photo-12001826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/12001827/pexels-photo-12001827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/12002175/pexels-photo-12002175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/12001664/pexels-photo-12001664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                  <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250939.90730685022!2d103.24689016616912!3d10.662071780930058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107e1dd2f564c45%3A0x13f1f8da254362ed!2sPreah%20Sihanouk!5e0!3m2!1sen!2skh!4v1673361277961!5m2!1sen!2skh" />
                </MDBContainer>
              </MDBCardBody>
              <MDBCardFooter className='text-muted text-start'><span style={{ fontWeight: 'bold' }}>Preah Sihanouk </span>
              province, named after King Norodom Sihanouk since its independence from France in 1953, is known locally as Kampong Som.
              <br></br><br></br> Located 230 kilometers southwest of the Capital Phnom Penh, the province of Kampong Som 
              has become one of the best seaside destinations in Asia. 
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          {/* End content info */}
        </MDBRow>
        {/* +++++++++++++ End Portfolio +++++++++++++*/}
        <MDBContainer className='mt-3 text-muted text-start' breakpoint='md' fluid>
          <MDBCard>
            <MDBCardFooter>
              Known for its fabulous beaches, 
              the province revolves around fabulous seafood, water-sports, and its surrounding islands. The popular beaches 
              that line the contour of the city from north to south are the Victory Beach, Deum Chrey Beach, Independence 
              Beach, Sokha Beach, Serendipity Beach, Ochheuteal Beach, Samdech Hun Sen Beach, Hawaii Beach, Ream Beach, 
              and the Otres Beach.<br></br><br></br>Island hopping, snorkeling and scuba-diving are also very popular 
              since most part of the natural beauties in and around Kampong Som (Sihanoukville province) are still very 
              much undisturbed. When night falls, tourists can explore and enjoy the culinary diversity of restaurants 
              and bars that are scattered alongside the beaches and all over town.<br></br><br></br>Tourist attractions 
              in Preah Sihanouk province come in great many varieties which are sure to leave the tourists with cherished 
              memories. Besides mesmerising tourists with its beaches, other popular off-the-beach attractions 
              in this province, include the beautiful Kbal Chhay waterfall.
              <a href="https://www.britannica.com/place/Phnom-Penh" className="stretched-link"><br></br> <br></br> Detail</a>
            </MDBCardFooter>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
      {/* ======================== End Main ======================== */}

      {/* ======================== Footer ======================== */}
      <FooterDesign/>
      {/* ======================== End Footer ======================== */}
      
    </>
  );
}