import React, { useState } from 'react'
import Sidebar from './SideBar'
import './index.css'

const Admin = ({ children }) => {

    return (
        <>
           <div className='arrange'>
           <Sidebar  />
            {children}
           </div>
            
        </>
    )
}

export default Admin