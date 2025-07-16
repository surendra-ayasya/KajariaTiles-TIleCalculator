import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiX, FiSearch } from "react-icons/fi";
import bathroom from '../../../assets/Bathroom.png'
import bedroom from '../../../assets/Bedroom.png'
import commercial from '../../../assets/Commercial.png'
import kitchen from '../../../assets/Kitchen.png'
import livingroom from '../../../assets/Livingroom.png'
import Outdoor from '../../../assets/Outdoor.png'
import logo from "../../../assets/logo.png"
import tiles from '../../../assets/image 9.png'
import gress from '../../../Assets/Gress 1.png';
import kerovit from '../../../Assets/Kerovit 1.png';
import vitronite from '../../../Assets/Vitronite Blue 1.png';
import menutiles from '../../../Assets/Menu-Tiles 2 1.png';
import eternity from '../../../Assets/Eternity blue.png';
import gressbond from '../../../Assets/gressbond.png';


const Products = () => {
  const navigate = useNavigate();  

  return (
    <div className="xl:hidden">
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
      <div className="py-4 font-urbanist mx-12 text-left">
        <h1 className="text-3xl font-semibold mb-4">Applications</h1>
      </div>

      <div className=" grid grid-cols-2 grid-rows-3 gap-0 xl:hidden">
        <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
          <a>
          <img src={bathroom} alt='products' className='w-[32px] h-[32px] mx-auto my-3 '/>Bathroom Tiles
          </a>
        </div>
      <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
          <a>
          <img src={kitchen} alt='about' className='w-[32px] h-[32px] mx-auto my-3'/>Kitchen Tiles
          </a>
        </div>  
      <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
          <a>
          <img src={livingroom} alt='resources' className='w-[32px] h-[32px] mx-auto my-3'/>Living Room Tiles
          </a>
        </div>
      <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
          <a>
          <img src={Outdoor} alt='investor' className='w-[32px] h-[32px] mx-auto my-3 '/>Outdoor Tiles
          </a>
        </div>
      <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
          <a>
          <img src={bedroom} alt='career' className='w-[32px] h-[32px] mx-auto my-3 '/>Bedroom Tiles
          </a>
        </div>
      <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
          <a>
          <img src={commercial} alt='contact' className='w-[32px] h-[32px] mx-auto my-3 '/>Tiles for Commercial Spaces
          </a>
        </div>
        </div>
<div className="space-y-4">
        <div className="px-4 mt-8 md:px-8 lg:px-18">
  <hr className="w-full border-t border-gray-400" />
</div>
<div className="mt-6">
  <h1 className="font-urbanist text-3xl font-semibold text-left mx-9">Category</h1>
  </div>
  <div className="px-4 mt-8 md:px-8 lg:px-18">
  <hr className="w-full mb-7 border-t border-gray-400" />

  <div>
              <ul className="space-y-4 text-left text-gray-500 mb-7">
                <li className="flex flex-row-2 mx-5 mt-10 hover:text-blue-700 text-nowrap">Glazed Vitrified Tiles -<img src={eternity} alt="eternity" className="w-[85.26px] h-[12px] ml-1 my-2"/></li>
                  <hr className="w-full mb-7 border-t border-gray-400" />
                <li className="flex flex-row-2 mx-5 hover:text-blue-700 text-nowrap">Gres Floor & Wall Tiles - <img src={gress} alt="gress" className="w-[45.5px] h-[14px] ml-1 my-1"/></li>
                  <hr className="w-full mb-7 border-t border-gray-400" />
                <li className="flex flex-row-2 mx-5 hover:text-blue-700 text-nowrap">Polished Vitrified Tiles - <img src={vitronite} alt="vitronite" className="w-[45.5px] h-[14px] ml-1 my-1"/></li>
                  <hr className="w-full mb-7 border-t border-gray-400" />
                <li className="flex flex-row-2 mx-5 hover:text-blue-700 text-nowrap">Faucets and Sanitaryware - <img src={kerovit} alt="kerovit" className="w-[45.5px] h-[14px] ml-1 my-2"/></li>
                  <hr className="w-full mb-7 border-t border-gray-400" />
                <li className="flex flex-row-2 mx-5 hover:text-blue-700 text-nowrap">Tile Adhesive - <img src={gressbond} alt="gressbond" className="w-[96.59px] h-[15px] ml-1 my-2"/></li>
                  <hr className="w-full mb-7 border-t border-gray-400" />
              </ul>
            </div>
</div>
</div>

<div className="space-y-4">
<div className="mt-6">
  <h1 className="font-urbanist text-3xl font-semibold text-left mx-9">Trending Products</h1>
  </div>
  <div className="px-4 mt-8 md:px-8 lg:px-18">
  <hr className="w-full mb-7 border-t border-gray-400" />

  <div className="absolute right-0 lg:top-[1120px] lg:w-[458px] lg:h-[532px] top-[1457px] w-[327px] h-[328px]">
          <img
            src={menutiles}
            alt="Trending visual"
            className="w-full h-auto object-contain"
          />
        </div>

  <div>
              <ul className="space-y-5 text-left text-gray-500 mb-6">
                <li className="flex flex-row-2 mt-10 mx-5 -m-1 hover:text-blue-700 text-nowrap">The Ultima </li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mx-5 -m-1 hover:text-blue-700 text-nowrap">Grestough</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mx-5 -m-1 hover:text-blue-700 text-nowrap">Vitronite</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mx-5 -m-1 hover:text-blue-700 text-nowrap">Kasamood</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                <li className="flex flex-row-2 mx-5 -m-1 hover:text-blue-700 text-nowrap">Gres Art</li>
                  <hr className="w-full mb-7 border-t border-gray-300" />
                  <li className="flex flex-row-2 mx-5 mt-10 -m-1 hover:text-blue-700 text-nowrap">Duratech </li>
              </ul>
            </div>
</div>
</div>

 {/* Image Positioned at Bottom Right */}
        
        </div>
    </div>
  );
};

export default Products;
