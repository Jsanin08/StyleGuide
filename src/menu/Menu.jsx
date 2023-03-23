import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { Button } from '../components/Button/Button';

import menuJson from './menu.config.json'

export const Menu = () => {
    const CreateMenu= ({data})=>{
        return(
            <ul>
            {data?.map((item)=>
            <li key={item.id}>
              <Link className='link' to={item.url}>{item.name}</Link>
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
