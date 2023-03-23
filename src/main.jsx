import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './menu/Menu'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Button } from './components/Button/Button';
import PageLayout from './shared/pageLayout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>    
     <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route path="button" element={<Button />} />
          </Route>
      </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
