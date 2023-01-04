import React from 'react'

const About_us = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div> <section className='py-1 text-center container'>
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Autowa.</h1>
        <h3>We Work For You Not
The Insurance Companies</h3>
        <p className="lead text-muted">Car insurance provides financial protection to policyholders against accidents, theft, total loss, natural calamities, man-made disasters, fire, and third-party death or property damage. A car insurance policy is mandatory in India for all four-wheelers as per the Motor Vehicles Act, of 1988.</p>
        <p>
          {/* <a href="#" className="btn btn-primary my-2">Contact Us</a> */}
          <h5>+1 2345 67890</h5>

          <h5>info@domain.com</h5>
        </p>
      </div>
    </div>
    </section></div>
  )
}

export default About_us