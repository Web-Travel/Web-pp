import React from "react";
import {
    MDBRow, MDBCol, MDBContainer, MDBCardImage
} from "mdb-react-ui-kit";
import Records from "./record.json"
import { useState } from "react";
import Download from "./Downlaod";
import Profile from "./Profile";

function Photo() {
    /** Hover download profile and save */
    const [isShown, setIsShown] = useState(false);


    return (
        <>
        {/*==================================== 
        * Main
        ==================================== */}
        <MDBContainer fluid>
   
            <div>
                <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4  g-0 g-lg-0 '>
                    {
                      Records &&  Records.map( results => { 
                            return (    
                                <MDBCol >          
                                    <div className='p-3' >            
                                        <div className='text-center bg-image'>
                                            <img src={results.image} className='img-fluid' alt=''/>
                                            <div className='mask'
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}
                                            >
                                                <div className='d-flex h-100'>
                                                    <div className='text-white '>
                                                        {isShown && (
                                                            <div>
                                                                
                                                                {/* End Download Design  */}

                                                                {/* Profile Design */}
                                                                 <Profile
                                                                 name = {results.name}
                                                                 profile = {results.profile}
                                                                 />
                                                                {/* End Profile Design */}
                                                            </div>  
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                </MDBCol>  
                            )
                        })
                    }  
                </MDBRow>
            </div>
        </MDBContainer>
        </>
    );
}

export default Photo;
