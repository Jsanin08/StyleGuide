import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Menu } from '../menu/Menu'

const PageLayout = () => {
  const [theme, setTheme] = useState('light');

  const handleMode = () =>{
    setTheme((prev) => {
      if(prev == 'dark'){
        return 'light';
      }
      return 'dark';
    });
  }

  return (
    <div className={theme}>
      <div className="fixed-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-container d-flex align-items-center page-name">
          <a className="navbar-brand mr-5" href="#">
            <img src="https://people.gap-sandbox.com/static/media/GAPlogo.4e181e9e.svg" className="h-8" alt="..."/>
          </a>
          <div className='d-flex justify-content-between w-100'> 
            <div className="header nav-header">
              <h4 className="title">Style Guide</h4>
            </div>
            <div className='dark-mode'>
              <input type="checkbox" className="checkbox" id="checkbox"/>
              <label htmlFor="checkbox" className="label" onClick={handleMode}>
                <i className="fas fa-moon"></i>
                <i className='fas fa-sun'></i>
                <div className='ball'/>
              </label>
            </div>
          </div>          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>        
      </nav>
      </div>  
      <div className='body-root'>
           <div className='menu'>
             <Menu/> 
           </div>
           <div className='content'>
             <Outlet />
           </div>
      </div>
    </div>
    
  )
}

export default PageLayout