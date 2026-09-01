import { memo } from 'react';
import { useState, useRef, useEffect } from 'react';
import { icons } from '../../src/assets/data/svgObj.jsx';
import classNames from 'classnames';
import { Servicestools } from '../assets/data/svgObj.js';
import { Programmingtools } from '../assets/data/svgObj.js';
import { devopstools } from '../assets/data/svgObj.js';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Preload, Stage,  } from '@react-three/drei';
// import { Suspense } from 'react';
// import {Robots} from '../../public/Robot.jsx'
// import {Scanner} from '../../public/Scanner.jsx'
// import {Keys} from '../../public/Keys.jsx'
// import { Designs } from '../../public/Design.jsx';

const Iconcard = () => {
  const [rendered, setrendered] = useState(false);
  const inforef = useRef();
  const refObj = useRef([])
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);

  useEffect(() => {
    setrendered(true);
    const canvas = inforef.current;
    if (canvas) {
      const mainwidth = canvas.getBoundingClientRect();
      setwidth(mainwidth.width);
      setheight(mainwidth.height);
    }


    // const handleMouseMove = inforef.current
    // handleMouseMove.addEventListener('mousemove', Hovernode);
    // return () => {
    //   handleMouseMove.removeEventListener('mousemove', Hovernode);
    // };


  }, []);

  // Hovernode uses the inforef details stored in refObj to set the transform positional thresholds for each icon based on their size attributes.
  // const Hovernode = (hoverX , hoverY)=>{

  //   refObj.forEach((item)=>{
  //     if(item){
  //     const {xpos, ypos} = item?.initialpositions ?? {};
  //     console.log(`xposobj : ${xpos}px , yposobj : ${ypos}px `);
  //     const {Hoverx , Hovery } = setThreshold(hoverX , hoverY);

  //     item.style.transform = `translate(${xpos + Hoverx}px ,${ypos + Hovery}px)`

  //     }else{
  //       console.log('items not found in refobj array storage');
  //       return null ;
  //     }


  //   })

  // }


  // const setThreshold = (hoverX , hoverY, size)=>{
  //   if (size === 'sm') {
  //     hoverX:hoverX + 0.03
  //     hoverY : hoverY + 0.03
  //   };

  //      if (size === 'md') {
  //     hoverX:hoverX + 0.05
  //     hoverY : hoverY + 0.05
  //   };

  //      if (size === 'lg') {
  //     hoverX:hoverX + 0.01
  //     hoverY : hoverY + 0.01
  //   };

  // }



  const iconlength = icons.length // length of the icons array
  const rows = Math.ceil(Math.sqrt(iconlength)); // number of rows based on square root of length
  const cols = Math.ceil(iconlength / rows); // number of columns based on rows
  const cellwidth = width / cols;// width of each cell
  const cellheight = height / rows;// height of each cell


  return (
    <div className='icon-div'>

      <section className='TextInfosect bg-transparent relative h-430 w-full'>
        <div className='textDiv absolute top-30 left-8 mb-10'>
          <p > Dealing with managing, manipulating and storing both personal and company data from day-to-day activities can be very stressful, especially when incorporating data security and integrity, which are crucial to an organization's success. Spanned to the right are the tools I use to ensure your data is handled properly.</p>
        </div>
        <div className='textDiv absolute top-200 left-8 mb-10 '>
          <p>Equipped with creative design tools to prototype and create frontend webpage. Framework Tools like React, Tailwind as well as 3D environment construction tools like Blender and Three. JS. I Also make use of GSAP and Figma for 2D animation and prototyping. Among other things, this enables creation of a wonderful user experience and the incorporation of affordances and signifier elements to enhance branding.</p>
        </div>
        <div className='textDiv absolute top-350 left-8  mb-50'>
          <p>To provide your website with a strong code reasoning and functional structutre, Foundational programming languages HTML CSS, and JavaScript are used to construct the website's structural elements. HTML to build the website boilerplate and blueprint, CSS is used to design it, JavaScript to add functionality.</p>
        </div>

      </section>


      <div className='botimg'>
        {/* <img  
          alt='glass'
          className=' w-full h-500 object-cover brightness-50 opacity-9 z-70 mr-180 '
         /> */}
      </div>
      <div className='iconSpans'>
        <div ref={inforef} className="icon-container ">
          {rendered && icons.map((icon, index) => {
            const row = Math.floor(index / cols);
            const column = Math.floor(index % cols);
            const xpos = column * cellwidth;
            const ypos = row * cellheight;

            return (
              <span key={index} className={classNames('iconcard', icon?.size,)} style={{
                width: cellwidth, height: cellheight,
                position: 'absolute', top: xpos, left: ypos,
              }}

                ref={
                  prevref => {
                    refObj.current[index] = {
                      ...prevref,
                      initialpositions: {
                        xpos,
                        ypos
                      },
                      classNames: classNames('iconcard', icon.size),
                      size: icon.size,
                    }

                  }
                }
              >
                {icon?.icon}
              </span>
            )
          })}

        </div>
      </div>

      <div>
        <div className=''>
          <div className='justify-center items-center  techmodel'>
            <div className='text-red-600 text-3xl z-50 font-bold absolute top-30 left-250'>
              <div className='container'>
                {/* <div className=' responsivetext absolute top-23 right-135'>
                  <Canvas camera={{ position: [1, 100, 50], fov: 10 }}>

                    <Suspense>
                      <ambientLight intensity={0.3} />
                      <directionalLight color={'red'} intensity={8} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={0.6} >
                        <Scanner />
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>
                  </Canvas>
                </div> */}
                <h1>Backend tools</h1>
                <div className=' text-2xl font-bold  z-50  m-5 animate1  '>
                  <span className='flex-center gap-10 spantext1 mt-27'>
                    <div >
                      {devopstools.map((Htext) => (
                        <div key={Htext.text}>
                  
                          <span className=' flex flex-col mt-5 mintext text-white'>{Htext.text}</span>
                        </div>
                      ))}
                    </div>
                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='justify-center items-center techmodel1  '>
            <div className='text-red-600 text-3xl z-50 font-bold absolute top-150 left-250'>
              <div className='container'>
                {/* <div className=' responsivetext absolute top-10 right-128 '>
                  <Canvas camera={{ position: [1, 5, 50], fov: 50 }}>

                    <Suspense >
                      <ambientLight intensity={0.3} />
                      <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={0.6} >
                        <Robots/>
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>


                  </Canvas>
                </div> */}
                <h1>Frontend tools</h1>
                <div className=' text-2xl font-bold  z-50  m-5 animate2  '>
                  <span className='flex-center gap-10 spantext2 mt-27'>
                    <div >
                      {Servicestools.map((Htext) => (
                        <div key={Htext.text}>
                          <span className=' flex flex-col mt-5 mintext text-amber-300 '>{Htext.text}</span>
                        </div>
                      ))}
                    </div>
                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className='justify-center items-center techmodel2  '>
            <div className='text-red-600 text-3xl z-50 font-bold absolute top-240 left-250'>
              <div className='container'>
                {/* <div className=' responsivetext absolute top-200 right-40 '>
                  <Canvas camera={{ position: [1, 100, 50], fov: 100 }}>

                    <Suspense >
                      <ambientLight intensity={0.3} />
                      <directionalLight color={'red'} intensity={2} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={0.6} >
                        <Keys/>
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>


                  </Canvas>
                </div> */}
                <h1>Languages</h1>
                <div className=' text-2xl font-bold  z-50 animate3  '>  
                  <span className='flex-center spantext3'>
                    <div >
                      {Programmingtools.map((Htext) => (
                        <div key={Htext.text}>
                          <span className=' flex flex-col mintext text-white'>{Htext.text}</span>
                        </div>
                      ))}
                    </div>
                  </span>
                </div >
              </div>
            </div>
          </div>
        </div>

        {/* <div>
           <div className=' responsivetext absolute top-375 right-190 '>
                  <Canvas camera={{ position: [0, 290, 70], fov: 120 }}>

                    <Suspense >
                      <ambientLight intensity={3.3} />
                      <directionalLight color={'blue'} intensity={10} castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]} >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                      </directionalLight>
                      <Stage environment="city" intensity={4.6} >
                        <Designs/>
                      </Stage>
                      <OrbitControls />
                      <Preload all />
                    </Suspense>


                  </Canvas>
                </div>
        </div> */}


      </div>





    </div>

  );
};

export default memo(Iconcard); 