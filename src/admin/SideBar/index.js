import React, { useState, useEffect } from 'react'
import './index.css'
import adminP from '../../assets/images/adminProfile.svg'
import { useNavigate, useLocation } from 'react-router-dom'


const Sidebar = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        // Extract the pathname from the location object
        const pathname = location.pathname;
        // Set the activePage state based on the pathname
        setActivePage(pathname);
    }, [location]);

    const handleLogout = () => {
      // Clear the token and any other user-related data
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      // Redirect to the login page
      navigate('/loginadmin');
    };

    return (
        <>
          <div className='sideBar'>
                <div className='profile'>
                    <img src={adminP} alt='profile'></img>
                    <h1 className='name'>Peri Nwolisa</h1>
                    <h1 className='level'>Admin</h1>
                </div>
                <ul className='checkk'>
                    <li id={activePage === '/adminpage' ? 'active' : ''} onClick={() => {
                        navigate('/adminpage')
                      }}>
                        <h1>Analytic  Dashboard</h1>
                    </li>
                    
                    <li id={activePage === '/publish' ? 'active' : ''} onClick={() => {
                        navigate('/publish')
                      }}>
                        <h1>Publish Contents</h1>
                    </li>
                    
                    <li id={activePage === '/terms' ? 'active' : ''} onClick={() => {
                        navigate('/terms')
                      }}>
                        <h1>Terms & Conditions</h1>
                    </li>
                    
                    <li id={activePage === '/disclaimer' ? 'active' : ''} onClick={() => {
                        navigate('/disclaimer')
                      }}> 
                        <h1>Admin Disclaimer</h1>
                    </li>
                    
                    <li id={activePage === '/adminlogin' ? 'active' : ''}  onClick={() => {
              handleLogout();
            }}>
                        <h1 className='logoutt'>Logout</h1>
                    </li>
                    
                </ul>
            </div> 

        </>

    )
}

export default Sidebar