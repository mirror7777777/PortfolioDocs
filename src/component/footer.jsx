import { memo } from 'react';
import Footerimg from '../assets/images/pattern.jpg';
import { useState, useEffect } from 'react';
import Form from './form';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Stage,  } from '@react-three/drei';
import { Suspense } from 'react';

function Clientlogic(e) {
    e.preventDefault();
    const target = document.getElementById('uclient');
    if (target) {
        const offset = window.innerHeight * 0.75;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
}
function Servicelogic(e) {
    e.preventDefault();
    const target = document.getElementById('uclient');
    if (target) {
        const offset = window.innerHeight * 0.001;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
}
function IconLogic(e) {
    e.preventDefault();
    const icontag = document.getElementById('uclient');
    if (icontag) {
        const offset = window.innerHeight * -1.15;
        const top = icontag.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return icontag;
}

const Footer = () => {



    return (
        <div className='footer-M relative h-530 absolute top-300  '>

              <div className='footerIMG'>

                    <img src={Footerimg} alt="footerImage" />

             </div>

            <div className=''>

                {/* left and right containers */}

                <div className='footeR'>
                        {/* left container */}
                    <div className='footer-containers'>




                        <div className='  '>

                            <ul className='ulheadersect cursor-pointer' id='ulheadersect'>

                                <li><a onClick={Clientlogic} >ABOUT</a></li>
                                <li><a onClick={Servicelogic}>WORK</a></li>
                                <li><a onClick={IconLogic} >TECHNOLOGIES</a></li>
                                <li><a href="">CONTACT</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">PRIVACY POLICY</a></li>

                            </ul>

                        </div>




                    </div>



                    {/* right container */}

                    <div className='footer-container'>

                        <section className='footer-Right'>

                            <div>

                                {/* imported form component */}
                                <Form />

                            </div>

                        </section>

                    </div>


                </div>
                <div>
                    <footer class="display grid fixed -bottom-0 align-middle justify-center  max-w-full footer footer-center colorbg left-80 example-3"  >
                       <div class="mix-blend-color-burn display flex flex-row text-1xl paragraph ">
                            <p >© 2023 George's. All rights reserved.</p>
                            <p>Follow us on social media: 
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </p>
                        </div>
                    </footer>
                </div>


            </div>

        </div>
    );
};

export default memo(Footer);