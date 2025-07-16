import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiX, FiSearch } from "react-icons/fi";
import logo from "../../../assets/logo.png"
import tiles from '../../../assets/image 9.png'


function About() {
      const navigate = useNavigate();  

  return (
    <div className="relative">
        <div className=" relative z-10 xl:hidden">
    
         {/* Back button */} 
          <div className="xl:hidden px-4 py-3 flex items-center">
            <button
              onClick={() => navigate('/menu')}
              className="text-gray-700 font-medium text-sm px-3 py-1 rounded hover:bg-gray-200"
            >
              ← Back
            </button>
          </div>
          
              <div>
              <ul className="font-urbanist mx-12 space-y-5 text-left text-gray-500 mb-6">
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Overview </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Manufacturing Facilities</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Our Export</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Sustainability</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Chairman's Message</li>
                  <hr className="w-full mb-7 border-t border-slate-500" />
                  <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Corporate Social Responsibility </li>
                   <hr className="w-full mb-7 border-t border-gray-300" />
                  <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Awards and Certification </li>
              </ul>
            </div>
          
          </div>
           <div className="tiles-overlay" style={{ backgroundImage: `url(${tiles})` }}></div>
           <div className="tiles-background" style={{ backgroundImage: `url(${tiles})` }}></div>
          </div>
  );
};

export default About