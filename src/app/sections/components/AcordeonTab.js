"use client";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";


import React,{ useState }  from 'react';


export default function AcordeonTab({titulo,contenido}) {
  const [openTab, setOpenTab] = useState(false);



  return (
    <div className="acordeon-radius ">
            <div className="flex items-center ml-auto"  style={{
                  color: '#93d3e1',
                  borderBottom:'2px solid #93d3e1'
                }}>
              <div
                className="text-black  font-unbounded  font-normal text-left w-11/12"
              >
                <h3 
                 onClick={() => setOpenTab(!openTab)}  className="  w-full  pt-5 pb-5 pl-5 pb-1 text-left  text-[#93d3e1] font-mona">
                {titulo}
                </h3>
              </div>
              {openTab===false && (
              <span className="text-white w-1/12 flex items-end pl-1 cursor-pointer">
                <GoPlus style={{color:'#93d3e1'}} className={openTab ? 'hidden' : ''} size={30} onClick={() => setOpenTab(true)} />
              </span>)}
              {openTab && (
              <span className="text-white w-1/12 flex items-end pl-1 cursor-pointer">
                <LuMinus style={{color:'#93d3e1'}} className={openTab ? '' : 'hidden'} size={30} onClick={() => setOpenTab(false)} />
              </span>)}
              
            </div>
              <div>
              {openTab && (
                      <div className="">
                      <p       dangerouslySetInnerHTML={{ __html: contenido }}
 className="font-medium w-full py-3 font-medium text-left pl-3  text-[#93d3e1]">                      
                      </p>
                    </div>
                    )}
              </div>
            </div>
  );
}

