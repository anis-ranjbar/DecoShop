import React from 'react'
import { GiSeahorse } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <section >
      <div className='flex justify-between items-center px-32 pt-5' >
          <NavLink className=' flex '> 
              <GiSeahorse  size={50} />
          </NavLink>
      
          <div className='w-2/4 h-12 flex justify-center items-center bg-[#EEEFEF] rounded-lg px-2'>
            <input type='text' className='w-full h-full bg-inherit outline-none rounded-lg pl-2' placeholder='Suchen Sie Bitte' />
            <CiSearch size={35}/>
          </div>

          <div className='flex gap-3'>
            <NavLink>
              <FiShoppingCart size={30} />
            </NavLink>
            <NavLink>
              <IoPersonOutline size={30}/>
            </NavLink>
            <NavLink>
              <GrFavorite size={30}/>
            </NavLink>
          </div>
      </div>
        <hr className="h-px  w-5/6 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
    </section>
  )
}
