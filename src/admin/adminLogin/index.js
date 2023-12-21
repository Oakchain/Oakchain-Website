import React, { useState, useEffect } from 'react'
import './index.css'
import adminP from '../../assets/images/adminProfile.svg'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {

    const navigate = useNavigate()

    return (
        <>
          <div className='adminLogin'>
                <div className='adminLoginIntro'>
                    <div className='adminlogo'></div>
                    <button onClick={() => {
                        navigate('/loginAdmin')
                      }} className='adminbutton'><h1 className='adminh1'>ADMIN PORTAL</h1></button>
                </div>
            </div> 

        </>

    )
}

export default AdminLogin