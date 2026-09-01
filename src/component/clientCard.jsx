import react from 'react';
import  {Servicetext}  from '../assets/data/svgObj.js';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { memo } from 'react';


const ClientCard =()=> {
    return (
        <div className="flex flex-row gap-20 uclient" id='uclient' >
            
           {Servicetext.map((item)=>{
            return(
                <div key={item.label}>
                    <div className=' uclientcolor'>
                    <h2 className="text-3xl font-bold text-gray-800"><CountUp end={item.numbers} duration={3}/>{item.suffix}</h2>
                    <p className="text-gray-800 itemlabel">{item.label}</p>
                    </div>
                </div>
                
            )
           })}
        </div>
    );
}
export default ClientCard;