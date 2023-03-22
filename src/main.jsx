import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './components/Button/button'
import { Menu } from './menu/Menu'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='row p-5'>
    
    <div className='menu col-4'>
      <Menu/> 
    </div>
  
    <div>
      <Button/>
    </div>
  
   </div>
  </React.StrictMode>,
)
