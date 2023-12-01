import React from 'react'
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default function Header() {
  
  const data = useSelector(store =>store)
  
  return (
    <>
    <div className=' bg-blue-300 h-20 w-[100%] flex items-center justify-between'>
        <div className='flex justify-between mx-12 w-[100%]'>
            
            <NavLink to="/" ><h1 className='text-3xl text-red-600 mt-1'>My Shop</h1></NavLink>

            <NavLink  to="/cart" className='flex' > 
                 <IoIosCart className='w-20 h-12' />  
                 <span className='mt-2 bg-rose-200 rounded-[100%] h-9 text-center'>{data.length}</span>
            </NavLink>

          </div>
    </div>
      
    </>
  )
}
