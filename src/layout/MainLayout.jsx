import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';

function MainLayout() {
  return (
    <div className='bg-[#c6c2ff] w-full min-h-screen'>
      <Header />
      <SideBar />
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout