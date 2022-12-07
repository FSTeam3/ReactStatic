import React from 'react'
import Card_data from '../datas/Card_data'
import { Outlet, Link } from "react-router-dom";
import car from './Insurance_Car.jpg'

const Ca = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Card_data.map((data) => {
          return <div className="col">
            <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={car} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <p className="card-text">{data.p}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">{data.btn1}</Link></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button>
                  </div>
                  <small className="text-muted">{data.min}</small>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
      <Outlet/>
    </div>

  )
}

export default Ca