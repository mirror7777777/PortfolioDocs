import React, { Suspense, lazy, use } from 'react';
import glass from '../assets/images/glass.jpg';
import pattern from '../assets/images/pattern.jpg';
import clay from '../../src/assets/images/flames.jpg';
import { Herotext } from '../assets/data/svgObj';
// import Boxap from './ThreeD/boxmodel';
import { NavLink } from "react-router-dom";
// import Model from './ThreeD/models';
import Button from './Button';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Preload, Stage,  } from '@react-three/drei';
// import Building from '../../public/Building.jsx';
// import { Html, useProgress } from '@react-three/drei'
// import { useGSAP } from "@gsap/react";
// import { useRef , useEffect} from 'react';
// import { Board } from '../../public/Board'
import ClientCard from './clientCard.jsx';




const Hero = ()=> {
  
  

   
    return (
        <div>
            
            <div className='hero-main-Text relative '>
                
                 <section className=' '>
                   <div className=' w-450 h-260 z-5  absolute top-0.5 left-0.5 '>
                    <img
                        src={clay}
                        alt='glass'
                        className=' w-full h-full object-cover brightness-50 opacity-2 z-70 clayimg '
                    />
                    
                <div className='text-black absolute top-20 left-1 font-bold w-1/2 text-center  mt-20 justify-center items-center hText'>
                        <h2>Hi, I'm</h2>
                        <h1>George</h1>
                        <p>A professional web developer and designer with passion for creating <br/> visually stunning and user-friendly websites.</p>
                </div>
                   </div>  




                <div className='justify-center items-center '>
                    <div className='text-red-600 text-3xl z-50 font-bold absolute top-30 left-240 scrolltext'>
                        <div className='container'>
                            <h3 className=' responsivetext'>
                                 We deal with
                            </h3>
                              
                            <div className=' text-2xl font-bold z-50 scrollanimate  '>
                             <span className='flex-center spantext'>
                              <div >
                                {Herotext.map((Htext)=>(
                                <div key={Htext.text}>
                                    <span  className=' flex flex-col mintext '>{Htext.text}</span>
                                </div>
                                 ))}
                                </div>
                       
                             </span>
                            </div > 
                            

                        </div>
                        
                     
                    </div>
                    

                    
                </div>
                <Button/>

              
                
              
             


       
                   
            </section>

            <section className=' w-full h-full  '>
                {/* <div className='absolute top-10 left-10 '> 
                    
                        <Canvas camera={{position: [19,55,15], fov: 50}}>
                            
                                <ambientLight intensity={0.3} />
                                <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                                <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                                </directionalLight>
                                <Stage environment="city" intensity={0.6} >
                                    <Building/>
                                </Stage>
                                <OrbitControls  />
                                <Preload all />
                        
                        </Canvas>

                </div> */}
                
                
                      {/* <div className='absolute top-210 left-190'>
                    <Canvas camera={{position: [-100,580,150], fov: 50}}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <Stage environment="city" intensity={0.6} >
                                <Board/>
                            </Stage>
                            <OrbitControls  />
                            <Preload all />
                    </Canvas>
                </div> */}
                  <div className=' relative right-140  w-1/2 h-1/2 z-5  text-3xl font-bold text-black navigationbar '>
                  <div className='absolute top-80'>
                    <div>
                        <ClientCard/>   
                    </div>
                     
                  </div>
                   
                </div>

              
           
        
                
            </section>
                
               
            </div>
            
           
        </div>
    );
}
export default Hero;