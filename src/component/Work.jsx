import React, { Component } from 'react';
import { memo } from 'react';
import brand from '../../src/assets/images/flames.jpg';
import wine from '../../src/assets/images/wineweb.png';
import gArrow from '../../src/assets/images/wineweb.png';
import cArrow from '../../src/assets/svg/screen-svgrepo-com.svg';



const Work = () => {
  return (
    <div>
      <div className='flex flex-col  md:flex-col gap-30 displaysect'>
      {/* <section className="work-section-left section work-section- flex flex-col" >
      
        <div className='wrapper flex flex-row gap-20'>
        <div className='img box a  visual workrightimg mt-15 card'>
          <div className='example-3 inner'>
              <img className='imgs' src={brand} alt="Brand" />
          </div>
      

       </div>
       <div className='content'>
          <div className=' Left-content-sect meta mt-110 gap-20'>
             <h3 className='title'>Build a Brand That Converts. Digitally Perfected</h3>
            <p>build responsive, high-conversion brands using the latest React framework to ensure your first impression is a lasting one. Let’s turn your vision into a high-quality digital experience. Click below to learn more. <a href=""><img src={cArrow} alt="" /></a></p>

       </div>
       <a href="">
        <svg>

        </svg>
       </a>
       </div>
        </div>
       
      </section> */}

      <section className="work-Background-section flex flex-col absolute top-220" >
        {/* Your work right section content */} 
        <div  className='flex flex-row gap-10 '>
            <div  className='workleftimg-frame card ' > 
              <div className='example-3 inner mt-60 '>
                 <img className='imgs' src={wine} alt="Wine" />
              </div>
             
            </div>
            
        <div className='content'>
             <div className=' Right-content-sect meta mt-90 gap-10'>
            <h3> Your Private wine Cellar, Digitally Perfected</h3>
            <p className='desc'>The ultimate digital liquor cabinet. We’ve stripped away the noise to provide a clean, Tailwind-styled interface that focuses on what matters: premium quality and effortless ordering. Your favorite labels are just a tap away.  Click below to learn more.</p>
             <div className="navbar">
             <div className="htext">
                <div className='absolute top-40 left-190  w-1/4 h-86  z-5  text-1xl font-bold text-black opacity-27  navigationbar '>
                    <ul className='ulheadersects cursor-pointer' id='' >
                        <li><a href="">Click To View Website1</a></li>
                        <li><a href="">Click To View Website2</a></li>
                        <li><a href="">Click To View Website3</a></li>
                    </ul>

                </div>
                
             </div>
            </div>
       </div>
        </div>
        </div>
      
      </section>
      </div>

  
    </div>
  );
};

export default memo(Work);

