"use client"
import React from 'react'
import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";


const UserMenu = () => {
  return (
    <div>

      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div className=" hidden md:block text-sm  font-semibold  py-3  px-4  rounded-full  hover:bg-neutral-100  transition  cursor-pointer ">Airbnb your home</div>

          <div className='flex items-center p-4  md:py-1
          md:px-2  border-[1px] gap-3
          border-neutral-200   rounded-full 
          cursor-pointer  hover:shadow-md '>
            <AiOutlineMenu />
            <div className='hidden md:block'>
              <Avatar />
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default UserMenu