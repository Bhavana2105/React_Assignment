import React from 'react';
import {CiGlobe} from 'react-icons/ci';
import Countries from './Countries';
import "./Home.css";
import img1 from "./assets/Al.png"
import img2 from "./assets/Af.png"
import img3 from "./assets/Cameron.png"
import img4 from "./assets/canada.png"
import img5 from "./assets/w2.jpg"
import img6 from "./assets/image1.jpg"
import img7 from "./assets/image2.jpg"
import img8 from "./assets/image3.jpg"
import Analysis from './Analysis';
const Home=()=> {
  return (
    <div className='main-cards'>
       <div className='card'>
        <div className='logo'>
            <CiGlobe />
        </div>
        <div className='text'><b>Sales by Country</b></div>
        <div className='div1'>
          <table className='table1' style={{height:"100%",width:"50%"}}>
            <Countries country="United State" Sales="2500" value="$230,900" Bounce="29.9%" img={img1} />
            <Countries country="United State" Sales="2500" value="$230,900" Bounce="29.9%" img={img2} />
            <Countries country="United State" Sales="2500" value="$230,900" Bounce="29.9%" img={img3} />
            <Countries country="United State" Sales="2500" value="$230,900" Bounce="29.9%" img={img4} />
          </table>
        </div>
        <div className='map'>
          <img src={img5} className='map1'/>
        </div>
      </div>
      <div className='graph'>
        <div className='graphcard'>
          <Analysis img={img6} heading="website views" text="last campaign performance"/>
          <Analysis img={img7} heading="website views" text="last campaign performance"/>
          <Analysis img={img8} heading="website views" text="last campaign performance"/>
        </div>
      </div>
    </div>
  );
}

export default Home;