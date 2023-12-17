import React, { useState, useEffect } from 'react'
import './index.css'
import adminP from '../../assets/images/adminProfile.svg'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
const LoginAdmin = () => {

    const navigate = useNavigate()

    return (
        <>
          <div className='adminLogin'>
            <div className='loginForm'>
                <div className='holderr'>
                <FontAwesomeIcon className='font' icon={faUser}/>
                <input type='text' placeholder='Enter Email'></input>
                </div>
                <div className='holderr'>
                <FontAwesomeIcon className='font' icon={faLock}/>
                <input type='text' placeholder='Enter Password'></input>
                </div>
                <button onClick={() => {
                        navigate('/adminpage')
                      }} className='logBtn'>Login</button>
            </div>
                    
            </div> 

        </>

    )
}

export default LoginAdmin