import React from 'react'
import './App.css'
function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo"/>
        </div>
        <ul className="list">
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button className="login_btn">login</button>
      </nav>
      <main className="hero">

        <div className="hero_div1">
          <h1>YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
          <p className="hero_p">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
         
         <div className="btn"><button className="shop">Shop Now</button>
          <button className="cat">Category</button>
          </div> 
          <p className=" hero_p2">Also Available On</p>
          <div className="icon_div">
          <img src="/images/flipkart.png" alt="logo" />
          <img src="/images/amazon.png" alt="logo2" />
          </div>
        </div>
        <div className="img">
          <img src="/images/shoe_image.png" alt="" />
        </div>

      </main>
    </div>
  )
}

export default App