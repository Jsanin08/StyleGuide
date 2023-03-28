import React from 'react'
import { Link, NavLink, Route, Routes } from "react-router-dom";

import menuJson from './menu.config.json'

export const Menu = () => {
    const CreateMenu= ({data})=>{
        return(
            <ul>
            {data?.map((item)=>
            <li key={item.id}>
              { item.child?.length > 0 && item.url != "" ? <NavLink  className='link parent-item capitalize nav-link' to={item.url}>{item.name}</NavLink > : <a className='capitalize nav-link' href={`#${item.template}`} to={item.url}>{item.name}</a >} 
               <CreateMenu data={item.child}/>
            </li>
            )}                
            </ul>
        )
  }
 
  return (
    <div>
        <CreateMenu data={menuJson.data}/>
    </div>
  )
}
