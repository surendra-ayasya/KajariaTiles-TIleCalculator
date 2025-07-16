import React, { useState } from 'react';
import { FiSearch, FiClock, FiX } from "react-icons/fi";
import { RiArrowUpLine } from "react-icons/ri";
import history from '../../../assets/History.png'
import trend from '../../../assets/Trend.png'
import { useNavigate } from 'react-router-dom';

function Search() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const recentSearches = ["Ceramic Tiles", "Wall Tiles", "Floor Tiles", "Ceramic Tiles"];
  const popularSearches = ["Ceramic Tiles", "Wall Tiles", "Floor Tiles", "Ceramic Tiles"];
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-20 min-h-screen bg-white xl:hidden">
      {/* Search Input */}
      <div className="flex items-center border-b border-gray-200 py-2 cursor-pointer">
        <input
          type="text"
          placeholder="Type what you looking for..."
          className="w-full outline-none placeholder-gray-400"
        />
        <FiSearch className="text-yellow-600" />
      </div>

      {/* Recent Searches */}
      <div className="mt-6">
        <p className="text-xs font-semibold text-gray-300 text-left tracking-widest">RECENT SEARCHES</p>
        <div className="mt-2 space-y-4">
          {recentSearches.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <img src={history} alt='history' className='w-[24px] h-[24px]' />
                {item}
              </div>
              <FiX className="text-yellow-700 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="mt-8">
        <p className="text-xs font-semibold text-gray-300 text-left tracking-widest">POPULAR SEARCHES</p>
        <div className="mt-2 space-y-4">
          {popularSearches.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-800">{item}</span>
              <img src={trend} alt='trend' className='w-[24px] h-[24px]'/>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Close Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
        <FiX className="text-yellow-700 text-xl" onClick={() => navigate('/menu')}/>
      </div>
    </div>
  );
}

export default Search;
