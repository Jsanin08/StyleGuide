import React from 'react'
import { Route, Routes } from 'react-router-dom'

import menuJson from '../menu/menu.config.json'
import PageLayout from './pageLayout';
import Code from './code';

const MyRoutes = () => {
    let routesArray = [];

    const CreateRoutes = (data,idParent)=>{
        data?.forEach(item => {
            if(idParent){
                item.root = idParent;
            }
            routesArray.push(item);
            if(item.child?.length>0){
                CreateRoutes(item.child,item.computedName);
            }
        });
    }

    const BuiltRoutes = ({data}) =>{

        CreateRoutes(data);

        return (
            <Routes>
                <Route path="/" element={<PageLayout />}>
                {
                  routesArray?.filter(x=>x.url!="").map((item)=>(
                        <Route 
                            key={item.name} 
                            path={item.name} 
                            element={<Code template={item} />} />
                  ))
                }
                </Route>
            </Routes>
        )
    }
    
  return (
    <BuiltRoutes data={menuJson.data}/>
  )
}

export default MyRoutes;

    