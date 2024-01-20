import React, { useState, useEffect, useRef } from 'react';
import { Routes,  Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import axios from '../axios/axios';
const LOGIN_URL = '/auth/login';


const LoginAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const  handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ email, password }),
          {
              headers: { 'Content-Type': 'application/json' },
              Accept: "application/json"
          }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.data?.user?.token;
      const id = response?.data?.data?.user?.id;
      console.log(accessToken)
      console.log(id)
      if (accessToken) {
        // Store the token in localStorage for persistence
        localStorage.setItem('token', accessToken);
  
        // Navigate to the private route
        navigate('/adminpage');
      } else {
        // Handle the case where the token is not present in the response
        alert('Token not found in the response');
      }
        
  } catch (err) {
    alert("Failed")
  }




   
  }

  return (
    <div className='adminLogin'>
      
      <div className='loginForm'>
        <div className='holderr'>
          <FontAwesomeIcon className='font' icon={faUser} />
          <input
            type='text'
            placeholder='Enter Email'
           
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='holderr'>
          <FontAwesomeIcon className='font' icon={faLock} />
          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className='logBtn'>
          Login
        </button>
      </div>
    </div>
  );
};

export { LoginAdmin};
