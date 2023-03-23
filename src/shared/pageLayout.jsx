import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from '../menu/Menu'

const PageLayout = () => {
  return (
    <div className='row p-5'>
         <div className='menu col-3'>
           <Menu/> 
         </div>
         <div className='col-9'>
           <Outlet />
         </div>
    </div>
  )
}

export default PageLayout