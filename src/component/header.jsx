import React from "react";
import { NavLink } from "react-router-dom";
import { memo } from 'react';
import ClientCard from './clientCard';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef , useEffect} from 'react';

function Clientlogic(e){
    e.preventDefault();
    const target = document.getElementById('uclient');
    if(target){
        const offset = window.innerHeight * 0.75;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
}
function Servicelogic(e){
    e.preventDefault();
    const target = document.getElementById('uclient');
    if(target){
        const offset = window.innerHeight * 0.001;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return target;
}
function IconLogic(e){
    e.preventDefault();
    const icontag = document.getElementById('uclient');
    if(icontag){
        const offset = window.innerHeight * -1.15;
        const top = icontag.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return icontag;
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Header = () => {

      gsap.registerPlugin(useGSAP);
    const inforef = useRef();
    const listref = useRef();

    useGSAP(()=>{
        gsap.fromTo("ul.ulheadersect li a",
            {x:150,y:-200, opacity:0,delay:1, duration:10,stagger:1, ease:"power2.out",},
            {x:0, y:0 ,opacity:2, color:"black", duration:2, ease:"power2.out",stagger:1, }
        );
     
    })

    return(
        <div>
            <div className="navbar">
             <div className="htext">
                <div className='absolute top-13 left-120  w-1/4 h-86  z-5  text-1xl font-bold text-black opacity-27  navigationbar '>
                    <ul className='ulheadersect cursor-pointer' id='ulheadersect' >
                        <li><a onClick={Clientlogic} >about</a></li>
                        <li><a onClick={Servicelogic}>work</a></li>
                        <li><a onClick={IconLogic} >technologies</a></li>
                        <li><a href="">contact</a></li>
                    </ul>

                </div>
                
             </div>
            </div>
        </div>
    )
}
export default memo(Header);