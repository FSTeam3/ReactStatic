import React from 'react'
import Card_data from '../datas/Card_data'
const Ca = () => {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Card_data.map((data) => {
          return <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

              <div class="card-body">
                <p class="card-text">{data.p}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">{data.btn1}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">{data.btn2}</button>
                  </div>
                  <small class="text-muted">{data.min}</small>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>

  )
}

export default Ca