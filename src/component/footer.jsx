import { memo } from 'react';
import Footerimg from '../assets/images/pattern.jpg';
import { useState, useEffect } from 'react';
import Form from './form';


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
        <div className='relative h-170 '>

            <div className=' ' /> 

            <div className=''>

                <div className='footerIMG opacity-10'>
                    <img src={Footerimg} alt="footerImage" />

                </div>
                <div className='absolut ml-150 text-black text-3xl font-bold z-50 footer-text '>
                    <h1>Contact us today.</h1>
                </div>

                {/* left and right containers */}

                <div className='testfo'>
                        {/* left container */}
                    <div className='absolute top-3.5 left-3.5 footer-containers'>




                        <div className=' w-1/4 h-186  z-15  text-5xl font-bold text-black opacity-27  '>

                            <section className='footer-Left mt-40 ml-20'>

                                <div className=''>

                            <ul className='flex flex-col gap-7' id='ulheadersect'>

                                <li><a onClick={Clientlogic} >ABOUT</a></li>
                                <li><a onClick={Servicelogic}>WORK</a></li>
                                <li><a onClick={IconLogic} >TECHNOLOGIES</a></li>
                                <li><a href="">CONTACT</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">PRIVACY POLICY</a></li>

                            </ul>
                                </div>

                            </section>


                        </div>




                    </div>



                    {/* right container */}

                   <div className='absolute top--20 left-20 footer-container '>

                        <section className='footer-Right ml-170 mt-157'>

                            <div className=' absolute top-158 left-170'>

                                {/* imported form component */}
                                <Form />

                            </div>

                        </section>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default Footer;