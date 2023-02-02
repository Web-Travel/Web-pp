import FooterDesign from '../FooterDesign';
import Navbar from '../SidebarBeforeLogin/Navbar';
import { MDBIframe } from 'mdbreact';
import Carousel from 'react-multi-carousel';
import {
  MDBCard, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardHeader,
  MDBCardBody, MDBCardFooter
} from 'mdb-react-ui-kit';
import Scrolltop from '../Scrolltop';

export default function Kampot() {

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
        <MDBBreadcrumbItem active>Kampot</MDBBreadcrumbItem>
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
                        "url('https://images.pexels.com/photos/11254951/pexels-photo-11254951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/11254678/pexels-photo-11254678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/11295431/pexels-photo-11295431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/11219974/pexels-photo-11219974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                        "url('https://images.pexels.com/photos/7638545/pexels-photo-7638545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
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
                  <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62749.57590469787!2d104.13313811931923!3d10.591016186354029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310836897d5fd26f%3A0x6f50ed443bd607ff!2sKrong%20Kampot!5e0!3m2!1sen!2skh!4v1673361424351!5m2!1sen!2skh" />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* End content info */}
          
        </MDBRow>
        {/* +++++++++++++ End Portfolio +++++++++++++*/}
        <MDBContainer className='mt-3 text-muted text-start' breakpoint='md' fluid>
          <MDBCard>
            <MDBCardFooter className='text-muted text-start'><span style={{ fontWeight: 'bold' }}>Kampot </span>
              ,this province is located in the Southwest of the country, having an eighty kilometres coastal strip with 
              the Gulf of Thailand. The provincial capital is named Kampot and sits near the base of the abundant green 
              Elephant Mountains and the famous Bokor Hill Station. Compete to crowded Sihanoukville in the North of the 
              province you may find quietness.
              Kep Beach, Rabbit Island, Bokor Hill Station, and countryside tours are perhaps the most popular day 
              tours out of Kampot with tour operators offering very competitively priced tours. <br></br><br></br>
              The Kampot area also offers several other attractions including pre-Angkorian ruins and caves, 
              jungle trekking, bicycling tours, river cruises, island trips, fishing trips, isolated beaches, 
              pepper plantations, bamboo train rides and some beautiful rural countryside. <br></br><br></br>
              Most visitors come here to have a look at the old French colonial architecture, which is one still 
              in charming condition, to have a vantage point for visiting the near beaches or the small islands 
              of Kep. Kampot province is also renowned for the quality of its fruits (durian, coconut, mango, etc.), 
              its sea salt and of course the famous Kampot Pepper. The special fresh climate and soil type of Kampot 
              as well as the experience from several generations of pepper farmers make this pepper unique and much 
              sought-after by gourmets worlwide. <br></br><br></br>The small town of Kampot on the Tuk Chhou River 
              is 5km inland from the sea. Fishing and farming are the main activities; durians and melons grow in abundance.
              <br></br><br></br>On the circle is the Prachummith Restaurant, which is close by is the Amar Restaurant. 
              To the south near the river is the GPO and telecommunications building. At the north end of town, about 1.5 
              km away, lays the Central Market, with quite a lot of food stalls. All Kampot transportation is concentrated 
              within the range of the market cycle, motors, taxis, trucks, and buses. The railway station lies further north, 
              but isn't used anymore.
              <a href="https://angkorfocus.com/kampot-tourist-attractions/introduction-to-kampot.html" className="stretched-link"><br></br> <br></br> Detail</a>
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