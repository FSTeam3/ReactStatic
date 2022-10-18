import React from 'react'
import Carousel from '../compo/Carousel';
import Card from '../compo/Card'
import Sections from '../compo/Sections';
import Ca from '../compo/Ca';

const Home = () => {
  return (
    <div className='container'>
        
        <Carousel />
        <Sections />
        <Ca/>
    </div>
  )
}

export default Home