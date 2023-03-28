import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from '../menu/Menu'

const PageLayout = () => {
  return (
    <div className='p-5'>
         <div className='menu'>
           <Menu/> 
         </div>
         <div className='content'>
           <Outlet />
         </div>
    </div>
  )
}

export default PageLayout