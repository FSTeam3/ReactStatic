import React from 'react'
import car from '../compo/img/pic.jpg'


const Carousel = () => {
    return (
        <div className='container mt-1'>
        <div id="carouselExampleControls" className="carousel slide h-25" data-bs-ride="carousel">
            <div className="carousel-inner h-50">
                <div className="carousel-item active">
                    <img src={car} style={{height: "450px"}} className="w-100 bg-dark" alt="broken img" />
                </div>
                <div className="carousel-item">
                    <img src={car} style={{height: "450px"}} className="w-100 bg-dark" alt="broken img" />
                </div>
                <div className="carousel-item">
                    <img src={car} style={{height: "450px"}} className="w-100 bg-dark" alt="broken img" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}

export default Carousel;