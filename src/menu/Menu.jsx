import React, { useEffect, useState } from 'react'
import menuJson from './menu.config.json'
export const Menu = () => {
    const CreateMenu= ({data})=>{
        return(
            <ul>
            {data?.map((item)=>
            <li key={item.id}><span>{item.name}</span>
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
