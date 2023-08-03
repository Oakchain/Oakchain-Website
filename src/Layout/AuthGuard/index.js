import React, { useState } from 'react'
import Header from './Header'
import CryptoUpdate from './CryptoUpdate'
import NavItems from './AuthItems'
import Footer from '../Footer'
import Sidebar from './Sidebar'


const AuthGuard = ({ children }) => {
    const [showSideBar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSideBar)
    }
    return (
        <div>
            <Header toggle={toggleSidebar} />
            <CryptoUpdate />
            <NavItems />
            <div className='oak-auth-wrapper' style={{
                padding: '20px 0'
            }}>
                {children}
            </div>
            <Footer />
            <Sidebar show={showSideBar} toggle={toggleSidebar} />
        </div>
    )
}

export default AuthGuard
