import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import MyContext from '../../../context/data/MyContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTabs';
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import DashboardContent from './DashboardContent';


function DashboardSlider() {
    const context = useContext(MyContext)
    const { mode} = context

    const goToAdd = () => {
        window.location.href = '/addproduct'
    }

  return (
    <div>
        <section className="text-gray-600 body-font mt-10 mb-10">
      <div>
       
      <div className="logo-div flex space-x-4 items-center">
       
        <span className='text-2xl font-bold text-black  px-2 py-1 rounded' >Dashboard</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-44 p-2 rounded bg-green-600 text-white">
            <LayoutDashboard />
            <button >Dashboard</button>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded">
            <Clock4Icon />
            <button  onClick={goToAdd}>Add Product</button>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded ">
            <BarChart3Icon />
            <button>Analytics</button>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded">
            <ArrowLeftRightIcon />
            <button >
              Transactions
            </button>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded  ">
            <HelpCircleIcon />
            <button >
              Help Center
            </button>

          </div>
        </div>
      </div>
            </div>
        </section>
      
    </div>
  )
}

export default DashboardSlider