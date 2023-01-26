import React from "react";
import {
    MDBRow, MDBCol, MDBContainer
} from "mdb-react-ui-kit";
import Records from "./record.json"

function PhotoImage() {

    return (
        <>
        {/*==================================== 
        * Main
        ==================================== */}
        <MDBContainer fluid>
            <div>
                <MDBRow className='row-cols-2 row-cols-md-3 row-cols-lg-4  g-0 g-lg-0 '>
                    {
                        Records && Records.map( records => {
                            return (    
                                <MDBCol>          
                                    <div className='p-3' >            
                                        <img src={records.image} className='img-fluid' alt=''/>
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

export default PhotoImage;

           
               
               
{/* <MDBRow className='row-cols-2 row-cols-lg-4 g-0 g-lg-0 '>
<MDBCol>          
<div className='p-3' >            
    <img src={records.image} className='img-fluid' alt=''/>
</div>   
</MDBCol>  
</MDBRow> */}