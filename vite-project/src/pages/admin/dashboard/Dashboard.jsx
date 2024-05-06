import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import MyContext from '../../../context/data/MyContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTabs';
import DashboardSlider from './DashboardSlider';
import DashboardContent from './DashboardContent';

function Dashboard() {
    const context = useContext(MyContext)
    const { mode} = context

  return (
    <Layout>

<div className="flex">
        {/* Side Navigation Bar */}
        <DashboardSlider />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className="grow">
        <DashboardContent/>
          <DashboardTab />
          
        </main>
      </div>
      {/* <DashboardSlider/>
        <section className="text-gray-600 body-font mt-10 mb-10">
           <main>
            <DashboardTab/>
            
</main>
        </section> */}
    </Layout>
  )
}

export default Dashboard