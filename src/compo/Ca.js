import React from 'react'
import Card_data from '../datas/Card_data'
import { Outlet, Link } from "react-router-dom";
import car from '../compo/img/car.jpg'
import bike from '../compo/img/bike1.jpg'
// import bus from './bus1.jpg'
import bus from '../compo/img/bus1.jpg'
import truck from '../compo/img/truck.jpg'
import container from '../compo/img/container.jpg'
import lv from '../compo/img/loaded_vehicle.jpg'
// import car1 from './'

const Ca = () => {
  return (
    <div className="container"><h3 className='text-center font-weight-bold'>VEHICLES CATEGORY</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {/* {Card_data.map((data) => { */}
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={bike} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">Two wheeler</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">Get Quote</Link></button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button> */}
                </div>
                {/* <small className="text-muted">{data.min}</small> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={car} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">Sedan, Suv Category</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">Get Quote</Link></button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button> */}
                </div>
                {/* <small className="text-muted">{data.min}</small> */}
              </div>
            </div>
          </div>

        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={bus} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">Buses Category</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">Get Quote</Link></button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button> */}
                </div>
                {/* <small className="text-muted">{data.min}</small> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={truck} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">Trucks Category</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">Get Quote</Link></button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button> */}
                </div>
                {/* <small className="text-muted">{data.min}</small> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={container} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">Cargo container Category</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">Get Quote</Link></button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button> */}
                </div>
                {/* <small className="text-muted">{data.min}</small> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={lv} xmlns={car} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">Light duty Vehicles</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/forms">Get Quote</Link></button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">{data.btn2}</button> */}
                </div>
                {/* <small className="text-muted">{data.min}</small> */}
              </div>
            </div>
          </div>

        </div>
        {/* })} */}
      </div>

      <Outlet />
    </div>

  )
}

export default Ca