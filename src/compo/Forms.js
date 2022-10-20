import React from 'react'

const Forms = () => {
  return (
    <div className='col-md-8 mx-auto mt-5'><div className="mb-3">
    <label for="fname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="fname" placeholder="Enter First Name Here"/>
  </div>
  <div className="mb-3">
    <label for="lname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name Here"/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter Email Here"/>
  </div>
  <div className="mb-3">
    <label for="address" className="form-label">Address</label>
    <input type="email" className="form-control" id="address" placeholder="Enter Address Here"/>
  </div>
  <div className="mb-3">
    <label for="vehnumber" className="form-label">Vehicle Number</label>
    <input type="text" className="form-control" id="vehnumber" placeholder="Enter Vehicle Number Here"/>
  </div>
  <div className="mb-3">
    <label for="engineNumber" className="form-label">Engine Number</label>
    <input type="text" className="form-control" id="engineNumber" placeholder="Enter Engine Number Here"/>
  </div>
  <div className="mb-3">
    <label for="vehType" className="form-label">Vehicle Type</label>
    <input type="text" className="form-control" id="vehType" placeholder="Enter Vehicle Type Here"/>
  </div>
  </div>
  )
}

export default Forms