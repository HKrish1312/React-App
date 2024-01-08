import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <nav>
      <div className='product'>
        <div className='product_card'>
          <img src="assets/mobile.jpg" alt="apple" width={200} height={200} />
        </div>
        <div className='product_card'>
          <img src="assets/laptop.jpg" alt="apple" width={200} height={200} />
        </div>
        <div className='product_card'>
          <img src="assets/tv.jpg" alt="apple" width={200} height={200} />
        </div>
        <div className='product_card'>
          <img src="assets/ea.jpg" alt="apple" width={200} height={200} />
        </div>
      </div>
    </nav>
  )
}

export default Home
