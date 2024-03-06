"use client";

import React from "react";

const Search = () => {
  return (
    <div className="">
      <div className=" border-[1px]  w-full  md:w-auto  py-2  rounded-full  shadow-sm  hover:shadow-md  transition  cursor-pointer ">
        <div className=" flex  flex-row  items-center  justify-between ">
          <div className=" text-sm  font-semibold  px-6 ">Anywhere</div>
          <div className=" hidden  sm:block  text-sm  font-semibold  px-6  border-x-[1px]  flex-1  text-center ">
            Any Week
          </div>
          <div className=" text-sm  pl-6  pr-2  text-gray-600  flex  flex-row  items-center  gap-3 ">
            <div className="hidden sm:block">Add Guests</div>
            <div className=" p-2  bg-rose-500  rounded-full  text-white ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Search;
