import React from 'react';
import { BiSearch} from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import './Style/Home.css';
import { Link } from 'react-router-dom';


import logo from './Assets/logo1.png';
import Pic from './Assets/P19.jpg';
import p1 from './Assets/P1.jpg';
import p2 from './Assets/P2.jpg';
import p3 from './Assets/P3.jpg';
import p4 from './Assets/P4.jpg';
import p5 from './Assets/P5.jpg';
import p6 from './Assets/P6.jpg';
import p7 from './Assets/P7.jpg';
import p8 from './Assets/P8.jpg';
import p9 from './Assets/P9.jpg';
import backG from './Assets/bg4.png';

// import {AllFillStart} from "react-icons/bi";


function About() {
    return (
    
    <>
    {/* *********************Navbar area************************************** */}
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
                    <a class="rounded-pill nav-link table-hover active text-muted fw-bold" href="/#">Photos</a>
                    </li>
                    </Link>

                    <li class="nav-item">
                    <a class="rounded-pill nav-link active text-muted fw-bold" href="/#">Places</a>
                    </li>
                    <li class="nav-item">
                    <a class="rounded-pill nav-link active text-muted fw-bold" href="/#">Top picture</a>
                    </li>
                    <li class="nav-item">
                    <a class=" rounded-pill nav-link active text-muted fw-bold" href="/#">Contact us</a>
                    </li>
                    <div class="nav-item">
                    <form class="d-flex float-start fw-bold" role="search">
                        <input class="col-12 rounded-start fw-bold border border-2 text-md" type="search" placeholder="Search" aria-label="Search"/>
                        <button class=" border-start fw-bold-0 border border-2 rounded-end" type="submit"><BiSearch size="2rem" class="text-muted"/></button>
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
    {/* *********************Main area************************************** */}
        <main class="body">
           <div class="main " >
                {/* <img src={backG} className='img-fluid' alt="" /> */}
               
            <div class="card-group justify-content-between px-5 has-bg-img">
            <div class="card">
                <img src={p4} class="card-img-top"
                alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                <h5 class="card-title fw-bold">Phnom Penh</h5>
                <p class="card-text">
                    Posted by Nara
                </p>
                    <div className='d-flex flex-row'>
                        <AiFillStar color='#FFD700' size="1.5rem"/>
                        <p className='ps-2 fw-bold'>3,450</p>
                    </div>

                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

            <div class="card">
                <img src={p3} class="card-img-top"
                alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                <h5 class="card-title fw-bold">Phnom Penh</h5>
                <p class="card-text">
                    Posted by Nara
                </p>
                    <div className='d-flex flex-row'>
                        <AiFillStar color='#FFD700' size="1.5rem"/>
                        <p className='ps-2 fw-bold'>3,450</p>
                    </div>

                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

            <div class="card">
                <img src={p6} class="card-img-top"
                alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                <h5 class="card-title fw-bold">Phnom Penh</h5>
                <p class="card-text">
                    Posted by Nara
                </p>
                    <div className='d-flex flex-row'>
                        <AiFillStar color='#FFD700' size="1.5rem"/>
                        <p className='ps-2 fw-bold'>3,450</p>
                    </div>

                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

            <div class="card">
                <img src={p5} class="card-img-top"
                alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                <h5 class="card-title fw-bold">Phnom Penh</h5>
                <p class="card-text">
                    Posted by Nara
                </p>
                    <div className='d-flex flex-row'>
                        <AiFillStar color='#FFD700' size="1.5rem"/>
                        <p className='ps-2 fw-bold'>3,450</p>
                    </div>

                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            
            <img class="bg-img img-fluid mt-3" src={backG} alt="..."/>
            </div>

            
            </div>

                            
           

           <div class="text">
                <h1 class="text-center h1 fw-bold">Your next aventure start here</h1>
                <p class="text-center h2">Take a relexing forest walk, shop h-3 irish chrismas gift from around the <br/> 
                    country, cosy up in local pub and plan your next short break. There's so <br/> much to discover
                    in this winter.                </p>
            </div>
            <div class="mt-12 img px-5">
                <div><img class="img-fluid hover-zoom" src={Pic} alt="pp" /></div>
            </div>
            <div class="mt-5 ps-5 mb-3 beast-trip">
                <h1 class="fw-bold">Best trips</h1>
            </div>

            <div class="mt-2 picture d-flex flex-column px-5 gap-2">
                <div class=" d-flex flex-row gap-2">
                    <div><img src={p3} class="img-fluid hover-zoom" alt="" /></div>
                    <div><img src={p4} class="img-fluid hover-zoom" alt="" /></div>
                    <div><img src={p3} class="img-fluid hover-zoom" alt="" /></div>
                    <div><img src={p4} class="img-fluid hover-zoom" alt="" /></div>
                </div>
                    <div class=" d-flex flex-row gap-2 mt-2">
                    <div><img src={p6} class="img-fluid hover-zoom" alt="" /></div>
                    <div><img src={p6} class="img-fluid hover-zoom" alt="" /></div>
                    <div><img src={p6} class="img-fluid hover-zoom" alt="" /></div>
                </div>
            
            </div>

            <div class="mt-5 ps-5 mb-3 beast-trips demo">
                <h1 class="fw-bold best">The Best <br/> Travel and <br/> the best <br/> picture</h1>
            </div>

            <div class=" d-flex flex-row gap-5 mt-2 px-5 photo3">
                <div><img src={p7} class="img-fluid hover-zoom" alt="" /></div>
                <div><img src={p9} class="img-fluid hover-zoom mt-5" alt="" /></div>
                <div><img src={p8} class="img-fluid hover-zoom" alt="" /></div>
            </div>
            
            
            
        </main>

    </>
    );
}

export default About;

