import React from 'react';
import PlacesDesign from '../Components/Places/PlacesDesign';
import Navbar from '../Components/Navbar';
import FooterDeign from '../Components/FooterDesign';
import Scrolltop from '../Components/Scrolltop'


function Places() {
    return (
        <>
        <Navbar/>
        
        <div>
            <PlacesDesign/>
        </div>


        <Scrolltop/>
        <FooterDeign/>
        </>
    );
}

export default Places;

