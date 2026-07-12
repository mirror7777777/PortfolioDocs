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
// import Building from '../../public/Building';
// import { Html, useProgress } from '@react-three/drei'
import { useGSAP } from "@gsap/react";
import { useRef , useEffect} from 'react';
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
                    
                <div className='text-black absolute top-0.5 left-10 text-2xl font-bold w-1/2 text-center  mt-20 justify-center items-center hText'>
                        <p>Hi my name is George Ajileye I am a web developer and designer <br></br>with a passion for creating visually stunning and user-friendly websites.</p>
                </div>
                   </div>  




                <div className='justify-center items-center '>
                    <div className='text-red-600 text-3xl z-50 font-bold absolute top-90 left-50 scrolltext'>
                        <div className='container'>
                            <h3 className=' responsivetext'>
                                 We deal with
                            </h3>
                              
                            <div className=' text-4xl font-bold  z-50  m-5 scrollanimate  '>
                             <span className='flex-center gap-10 spantext mt-27'>
                              <div >
                                {Herotext.map((Htext)=>(
                                <div key={Htext.text}>
                                    <span  className=' flex flex-col mt-5 mintext '>{Htext.text}</span>
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
                <div className='absolute top-30 left-400 '> 
                    
                        {/* <Canvas camera={{position: [19,55,15], fov: 50}}>
                            
                                <ambientLight intensity={0.3} />
                                <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                                <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                                </directionalLight>
                                <Stage environment="city" intensity={0.6} >
                                    <Building/>
                                </Stage>
                                <OrbitControls  />
                                <Preload all />
                        
                        </Canvas> */}

                </div>
                
                
                      <div className='absolute top-380 left-190'>
                    {/* <Canvas camera={{position: [-100,580,150], fov: 50}}>
                            <ambientLight intensity={0.3} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <Stage environment="city" intensity={0.6} >
                                <Board/>
                            </Stage>
                            <OrbitControls  />
                            <Preload all />
                    </Canvas> */}
                </div>
                  <div className=' mt-200 mb-10  relative right-140  w-1/2 h-1/2 z-5  text-3xl font-bold text-black navigationbar '>
                  <div className=''>
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