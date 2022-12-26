import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch} from "react-icons/bi";

import logo from './Assets/logo1.png';
import p1 from './Assets/P1.jpg';
import p2 from './Assets/P2.jpg';
import p3 from './Assets/P3.jpg';
import p4 from './Assets/P4.jpg';
import p5 from './Assets/P5.jpg';
import p6 from './Assets/P6.jpg';
import p7 from './Assets/P7.jpg';
import p8 from './Assets/P8.jpg';
import p9 from './Assets/P9.jpg';
import p10 from './Assets/P10.jpg';
import p11 from './Assets/P11.jpg';
import p12 from './Assets/P12.jpg';
import p13 from './Assets/P13.jpg';
import p14 from './Assets/P14.jpg';
import p15 from './Assets/P15.jpg';
import p16 from './Assets/P16.jpg';
import p17 from './Assets/P17.jpg';
import p18 from './Assets/P18.jpg';
import p19 from './Assets/P19.jpg';


function Photos() {
    return (
        <>
         <nav class="navbar navbar-expand-lg bg-light fixed-top px-5 shadow">
            <div class="container-fluid hover-zoom px-2">
            <a class="navbar-brand fw-bold" href="/#"><img class="logo" src={logo} alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" nav-item collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav gap-3">

                    <Link to="/photos">
                    <li class="nav-item">
                    <a class=" nav-link table-hover active text-secondary fw-bold" href="/#">Photos</a>
                    </li>
                    </Link>

                    <li class="nav-item">
                    <a class=" nav-link active text-secondary fw-bold" href="/#">Places</a>
                    </li>
                    <li class="nav-item">
                    <a class=" nav-link active text-secondary fw-bold" href="/#">Top picture</a>
                    </li>
                    <li class="nav-item">
                    <a class=" nav-link active text-secondary fw-bold" href="/#">Contact us</a>
                    </li>
                    <div class="nav-item">
                    <form class="d-flex float-start fw-bold" role="search">
                        <input class="col-12 rounded-start fw-bold border border-2 text-md" type="search" placeholder="Search" aria-label="Search"/>
                        <button class=" border-start fw-bold-0 border border-2 rounded-end" type="submit"><BiSearch size="2rem" class="text-secondary"/></button>
                    </form>  
                    </div>
                </ul>

                <div class=" login d-flex flex-row-reverse gap-1 float-end collapse navbar-collapse mt-2">
                    <button type="button" class="btn btn-secondary btn-sm">Log in</button>
                    <button type="button" class="btn btn-primary btn-sm ">Sign in</button> 
                </div>
                </div>
                
            </div> 
        </nav>
        {/* *****************************main****************************** */}
        <main className='mt-5'>
            <div class="mt-5 picture d-flex flex-row px-5 gap-3">
                    <div class=" mt-5 d-flex flex-column gap-2">
                        <div><img src={p1} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p2} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p3} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p4} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p11} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p12} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p17} class="img-fluid hover-zoom" alt="" /></div>
                        
                    </div>

                    <div class=" mt-5 d-flex flex-column gap-2 mt-2">
                        <div><img src={p5} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p6} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p7} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p13} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p14} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p18} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p16} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p4} class="img-fluid hover-zoom" alt="" /></div>
                    </div>

                    <div class=" mt-5 d-flex flex-column gap-2 picture2">
                        <div><img src={p3} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p17} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p4} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p12} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p1} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p11} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p2} class="img-fluid hover-zoom" alt="" /></div>
                    </div>

                    <div class=" mt-5 d-flex flex-column gap-2 mt-2 picture3">
                        <div><img src={p8} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p9} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p10} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p15} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p16} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p11} class="img-fluid hover-zoom" alt="" /></div>
                    </div>

                </div>

                {/* *********************************mobile display******************************** */}
                {/* <div className=' d-flex flex-row px-5 picture4'>
                    <div class=" d-flex flex-column gap-2">
                        <div><img src={p3} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p17} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p4} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p12} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p1} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p11} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p2} class="img-fluid hover-zoom" alt="" /></div>
                    </div>

                    <div class=" d-flex flex-column gap-2 mt-2">
                        <div><img src={p8} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p9} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p10} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p15} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p16} class="img-fluid hover-zoom" alt="" /></div>
                        <div><img src={p11} class="img-fluid hover-zoom" alt="" /></div>
                    </div>
                    </div> */}
        </main>
       
    </>
    );
}

export default Photos;