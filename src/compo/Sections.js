import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Sections = () => {
  return (
    <section className='py-1 text-center container'>
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">About Us</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2 mx-2 text-light"><Link className="text-light" to="/About_us">Contact Us</Link></a>
          <a href="#" className="btn btn-secondary my-2">Location</a>
        </p>
      </div>
    </div>
    <Outlet/>
    </section>
    
  )
}

export default Sections