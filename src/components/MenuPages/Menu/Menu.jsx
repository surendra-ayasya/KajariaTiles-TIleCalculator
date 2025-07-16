import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import frame1 from '../../../Assets/frame1.png';
import frame2 from '../../../Assets/frame2.png';
import frame3 from '../../../Assets/frame3.png'; 
import frame4 from '../../../Assets/frame4.png';
import frame5 from '../../../Assets/frame5.png';
import frame6 from '../../../Assets/frame6.png';
import mail from '../../../Assets/mail.png';
import phone from '../../../Assets/Vector.png';
import tiles from '../../../Assets/Menu-Tiles 2 1.png';
import location from '../../../Assets/Location_pin.png';
import brochure from '../../../Assets/Brochure.png';  


function Menu() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  return (
    <div>
      {/* Fullscreen menu overlay */}
      {mobileMenuOpen && (
        <>
        <div className=" grid grid-cols-2 grid-rows-3 gap-0 xl:hidden">
  <div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
    <a onClick={() => navigate('/products')} className="cursor-pointer block text-center">
    <img src={frame1} alt='products' className='w-[56px] h-[56px] mx-auto my-3 '/>EXPLORE PRODUCTS
    </a>
  </div>
<div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
    <a onClick={() => navigate('/about')} className="cursor-pointer block text-center">
    <img src={frame2} alt='about' className='w-[56px] h-[56px] mx-auto my-3'/>ABOUT US
    </a>
  </div>  
<div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
        <a onClick={() => navigate('/resources')} className="cursor-pointer block text-center">
    <img src={frame3} alt='resources' className='w-[56px] h-[56px] mx-auto my-3'/>RESOURCES
    </a>
  </div>
<div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
        <a onClick={() => navigate('/investor')} className="cursor-pointer block text-center">
    <img src={frame4} alt='investor' className='w-[56px] h-[56px] mx-auto my-3 '/>INVESTOR
    </a>
  </div>
<div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
    <a>
    <img src={frame5} alt='career' className='w-[56px] h-[56px] mx-auto my-3 '/>CAREER
    </a>
  </div>
<div className="bg-white p-4 text-center font-urbanist border border-solid border-gray-300 items-center">
    <a>
    <img src={frame6} alt='contact' className='w-[56px] h-[56px] mx-auto my-3 '/>CONTACT US
    </a>
  </div>
  </div>
  <div className='flex flex-col-2 xl:hidden'>
        <span className="flex items-center  text-nowrap w-[74px] h-[40px]"><img src={phone} alt='phone' className="mr-2 mx-4 lg:mx-8 lg:mr-3 size-4"/> 1800 309 309</span>
        <span className="flex items-center text-nowrap w-[74px] h-[40px]"><img src={mail} alt='mail' className="mx-[90px] mr-2 lg:mr-3 lg:mx-[700px] sm:mx-[330px] sm:mr-3 size-4 md:mx-[460px] md:mr-3"/> info@kajariaceramics.com</span>
      </div>

      <div className="w-full h-[250px] bg-no-repeat bg-right bg-contain pointer-events-none xl:hidden sm:h-[250px] sm:top-[500px] md:h-[300px] md:top-[550px] lg:h-[400px] lg:top-[600px]" style={{ backgroundImage: `url(${tiles})` }} >
</div>
{/* Bottom Bar for Tablets and Mobile */}
<div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[984px] xl:hidden z-50">
  <div className="grid grid-cols-2 gap-2">
    <div className="flex items-center justify-center bg-gray-500 text-white h-[68px] px-4 text-sm sm:text-base">
      CATALOGUES
      <img src={brochure} alt="catalogue" className="w-6 h-6 ml-2" />
    </div>
    <div className="flex items-center justify-center bg-gray-500 text-white h-[68px] px-4 text-sm sm:text-base">
      FIND STORE
      <img src={location} alt="find us" className="w-6 h-6 ml-2" />
    </div>
  </div>
</div>
      
      </>
      )}

      
    </div>
  );
}

export default Menu;
