import React from 'react'
import { Form, Button } from 'semantic-ui-react';


const Forms = () => {
  return (
    
    <div className='col-md-8 mx-auto mt-5'>
      <form><div className="mb-3">
      <label for="fname" className="form-label">First Name</label>
      <input type="text" className="form-control" id="fname" placeholder="Enter First Name Here" required/>
    </div>
      <div className="mb-3">
        <label for="lname" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name Here" required />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter Email Here" required/>
      </div>
      <div className="mb-3">
        <label for="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" placeholder="Enter Address Here" required />
      </div>
      <div className="mb-3">
        <label for="vehnumber" className="form-label">Vehicle Number</label>
        <input type="text" className="form-control" id="vehnumber" placeholder="Enter Vehicle Number Here" required/>
      </div>
      <div className="mb-3">
        <label for="engineNumber" className="form-label">Engine Number</label>
        <input type="text" className="form-control" id="engineNumber" placeholder="Enter Engine Number Here" required/>
      </div>
      <div className="mb-3">
        <label for="vehType" className="form-label">Vehicle Type</label>
        <input type="text" className="form-control" id="vehType" placeholder="Enter Vehicle Type Here" required/>
      </div>
        <div class="form-group">
          <label for="regcert">Upload Vehicle registration Certificate</label>
          <input type="file" className="form-control-file mx-5" id="regcert" required/>
        </div>
        <button type='submit' className='btn btn-primary my-3 '>Submit</button>
      </form>
    </div>
  )
}

export default Forms