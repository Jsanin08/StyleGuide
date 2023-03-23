import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from '../menu/Menu'

const PageLayout = () => {
  return (
    <div className='row p-5'>
         <div className='menu col-2'>
           <Menu/> 
         </div>
         <div className='col-10'>
           <Outlet />
         </div>
    </div>
  )
}

export default PageLayout