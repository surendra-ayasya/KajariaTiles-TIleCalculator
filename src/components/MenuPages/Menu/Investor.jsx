import React from 'react'
import { useNavigate } from "react-router-dom";
import tiles from '../../../assets/image 9.png'
import { FiX, FiSearch } from "react-icons/fi";
import logo from "../../../assets/logo.png"

function Investor() {
 const navigate = useNavigate();  

  return (
    <div className="relative">
        <div className="relative xl:hidden">
            <div>
    
         {/* Back button */} 
          <div className="xl:hidden px-4 py-3 flex items-center">
            <button
              onClick={() => navigate('/menu')}
              className="text-gray-700 font-medium text-sm px-3 py-1 rounded hover:bg-gray-200"
            >
              ← Back
            </button>
          </div>
          </div>

              <div>
              <ul className="font-urbanist mx-12 space-y-4 -my-8 text-left text-gray-500">
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">AGM/EGM/Postal Ballot </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Annual Reports</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Board Meeting Notices</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">BOD and its Committees</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Capital History</li>
                                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Corporate Governance </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Corporate Presentation</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Disclosures/Intimation</li>
                                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Financial At a Glance </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Financial Results</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Investor Release</li>
                                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Share Holder Query </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Shareholding Pattern</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Subsidiary / Joint Venture</li>
                                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">Three Year Mission Statement </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Trading Window</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Unclaimed Dividend / IEPF</li>
                <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Website of Online Resolution of Disputes<br/>(Smart ODR)</li>
              </ul>
              <div className="h-16"></div>
            </div>
          
          </div>
           <div  className="w-[375px] h-[702px] lg:w-[1024px] lg:h-[800px]" 
           style={{
    backgroundImage: `url(${tiles})`,
    marginTop: "-1000px",
    transform: "rotate(90deg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",
    opacity: 0.5
  }}></div>
          </div>
  );
};


export default Investor