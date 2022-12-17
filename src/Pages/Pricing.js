import React from 'react'
import Pricing_data from '../datas/Pricing_data'
import toast from 'react-simple-toasts';
// toast.configure()

const Pricing = () => {
  // const notify = ()=>{toast('Thank You For Your Interest, We Will Get Back To you!');}
    

  return (
    <div class="row row-cols-1 row-cols-md-3 mb-3 my-3 text-center">
      {Pricing_data.map((data) => {
        return <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{data.title}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{data.price}<small class="text-muted fw-light">/{data.year}</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={() => toast('Thank You For Your Interest, We Will Get Back To you!')}>{data.btn}</button>
          </div>
        </div>
      </div>
      })}


    {/* <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Free</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 text-bg-primary border-primary">
          <h4 class="my-0 fw-normal">Enterprise</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default Pricing