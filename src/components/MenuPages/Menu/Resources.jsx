import React from 'react'
import { useNavigate } from "react-router-dom";
import tiles from '../../../assets/image 9.png'
import { FiX, FiSearch } from "react-icons/fi";
import logo from "../../../assets/logo.png"

function Resources() {
 const navigate = useNavigate();  

  return (
    <div className="relative">
        <div className="relative z-10 xl:hidden">
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
              <ul className="font-urbanist mx-12 space-y-5 text-left text-gray-500">
                <li className="flex flex-row-2 mt-10 -m-1 hover:text-blue-700 text-nowrap">News and Media </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Blogs & Articles</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 -m-1 hover:text-blue-700 text-nowrap">Video Gallery</li>
              </ul>
            </div>
          
          </div>
           <div  className="w-[375px] h-[302px] lg:w-[1024px] lg:h-[800px]" 
           style={{
    backgroundImage: `url(${tiles})`,
    marginTop: "-380px",
    transform: "rotate(90deg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",
    opacity: 0.5
  }}></div>
          </div>
  );
};


export default Resources