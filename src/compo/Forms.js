import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
// const Forms = () => {
//   return (
//   <div></div>
//   //   <div className='col-md-8 mx-auto mt-2 border border-round'>
{/* <div className="mb-3 mx-5 mt-2"> */ }
//   //   <label for="fname" className="form-label">First Name</label>
//   //   <input type="text" className="form-control" id="fname" placeholder="Enter First Name Here" required autofocus/>
//   // </div>
//   // <div className="mb-3 mx-5 mt-2">
//   //   <label for="lname" className="form-label">Last Name</label>
//   //   <input type="text" className="form-control" id="lname" placeholder="Enter Last Name Here" required/>
//   // </div>
//   // <div className="mb-3 mx-5 mt-2">
//   //   <label for="email" className="form-label">Email address</label>
//   //   <input type="email" className="form-control" id="email" placeholder="Enter Email Here" required/>
//   // </div>
//   // <div className="mb-3 mx-5 mt-2">
//   //   <label for="address" className="form-label">Address</label>
//   //   <input type="email" className="form-control" id="address" placeholder="Enter Address Here" required/>
//   // </div>
//   // <div className="mb-3 mx-5 mt-2">
//   //   <label for="vehnumber" className="form-label">Vehicle Number</label>
//   //   <input type="text" className="form-control" id="vehnumber" placeholder="Enter Vehicle Number Here"/>
//   // </div>
//   // <div className="mb-3 mx-5 mt-2">
//   //   <label for="engineNumber" className="form-label">Engine Number</label>
//   //   <input type="text" className="form-control" id="engineNumber" placeholder="Enter Engine Number Here"/>
//   // </div>
//   // <div className="mb-3 mx-5 mt-2">
//   //   <label for="vehType" className="form-label">Vehicle Type</label>
//   //   <input type="text" className="form-control" id="vehType" placeholder="Enter Vehicle Type Here"/>
//   // </div>
//   // <button className='btn btn-primary mb-3 mx-5 mt-2'><Link className="nav-link text-light" to="/pricing">Submit</Link></button>
//   // < Outlet/>
//   // </div>

//   )
// }

// export default Forms


function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [rcno, setRcno] = useState('')

  const [error, setError] = useState(false)
  const [proceed, isProceed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true)
    }
    // if (firstName && lastName && number && rcno && email) {
    //   // console.log("First Name: ", firstName, "\nLast Name: ", lastName)
    //   isProceed(true);
    // }
    // console.log(proceed);
  }

  const checkSubmitButtom = () =>{
    if (firstName && lastName && number && rcno && email) {
      // console.log("First Name: ", firstName, "\nLast Name: ", lastName)
      isProceed(true);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='col-md-8 mx-auto mt-2 border border-round'>
        <div className="mb-3 mx-5 mt-2">
          <label for="fname" className="form-label">First Name <span className='text-danger'>*</span></label>
          <input placeholder="First Name" className='form-control' onBlur={checkSubmitButtom} on onChange={e => setFirstName(e.target.value)} />
          {error && firstName.length <= 0 ?
            <label  className='text-danger'>First Name can't be Empty</label> : ""}</div>


        <div className="mb-3 mx-5 mt-2">
          <label for="lname" className="form-label">Last Name<span className='text-danger'>*</span></label>
          <input placeholder="Last Name" className='form-control' onBlur={checkSubmitButtom} onChange={e => setLastName(e.target.value)} />
          {error && lastName.length <= 0 ?
            <label className='text-danger'>Last Name can't be Empty</label> : ""}</div>


            <div className="mb-3 mx-5 mt-2">
          <label for="email" className="form-label">Email<span className='text-danger'>*</span></label>
          <input placeholder="Email" type="email" className='form-control' onBlur={checkSubmitButtom} onChange={e => setEmail(e.target.value)} />
          {error && email.length <= 10 ?
            <label className='text-danger'>Email can't be Empty</label> : ""}</div>

            <div className="mb-3 mx-5 mt-2">
          <label for="fname" className="form-label">Contact No<span className='text-danger'>*</span></label>
          <input placeholder="Contact Number" className='form-control' onBlur={checkSubmitButtom}  onChange={e => setNumber(e.target.value)} />
          {error && (number.length  <= 0 && number.length > 10 ) ?
            <label className='text-danger'>Contact number should be 10 digits</label> : ""}</div>
            <div className="mb-3 mx-5 mt-2">
          <label for="fname" className="form-label">RC No<span className='text-danger'>*</span></label>

          <input placeholder="RC no" className='form-control' onBlur={checkSubmitButtom} onChange={e => setRcno(e.target.value)} />
          {error && rcno.length <= 0 ?
            <label className='text-danger'>RC NO can't be Empty</label> : ""}</div>
        <div>
          {<div className='d-flex justify-content-center'><button className={proceed ? 'btn btn-primary mx-5 mb-3 w-50' : 'btn btn-primary mx-5 mb-3 disabled w-25'} style={{'marginLeft':'auto'}} >
            <Link className="nav-link text-light" to="/pricing">Submit</Link>
          </button></div>}
        </div>
      </form>
    </>
  );
}
export default Form;