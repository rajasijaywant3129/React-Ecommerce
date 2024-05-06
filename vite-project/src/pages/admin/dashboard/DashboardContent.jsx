import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import MyContext from "../../../context/data/MyContext";
import {FaUserTie } from 'react-icons/fa';

function DashboardContent() {
  const context = useContext(MyContext)
  const { mode} = context

  return (
    <section className="text-gray-600 body-font mt-10 mb-10">
    <div className="container px-5 mx-auto mb-10 ml-56">
        <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                    <div className="text-green-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <FaUserTie size={50} />
                    </div>
                    <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>3</h2>
                    <p className=" text-green-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                    <div className="text-green-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <FaUserTie size={50} />
                    </div>
                    <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>10</h2>
                    <p className=" text-green-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Orders</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                    <div className="text-green-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <FaUserTie size={50} />
                    </div>
                    <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>4</h2>
                    <p className=" text-green-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Users</p>
                </div>
            </div>
            
        </div>
    </div>
</section>
  
  );
}

export default DashboardContent;