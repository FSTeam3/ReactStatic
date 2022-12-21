import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Sections = () => {
  return (
    <section className='py-1 text-center container'>
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light font-weight-bold">About Us</h1>
        <p className="lead text-muted">
        When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
        <p>
          <a href="#" className="btn btn-primary my-2 mx-2 text-light"><Link className="text-light" to="/About_us">Contact Us</Link></a>
        </p>
      </div>
    </div>
    <Outlet/>
    </section>
    
  )
}

export default Sections