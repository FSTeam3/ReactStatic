import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Login = () => {

    const abc =  (e) => {
console.log(e)
    }
  return (

    <div className='d-flex justify-content-center mt-5'>
    <form className='col-sm-3'>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onSubmit={abc}><Link className="nav-link text-light" to="/home" onClick={abc}>Login</Link></button>
    {/* <input className="w-100 btn btn-lg btn-primary" type="submit"><Link className="nav-link text-light" to="/home" onClick={abc}>Login</Link></input> */}

  </form><Outlet/></div>
  )
}

export default Login