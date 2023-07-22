import React from 'react'
import Header from './Header'
import CryptoUpdate from './CryptoUpdate'
import NavItems from './AuthItems'

const AuthGuard = ({ children }) => {
    return (
        <div>
            <Header />
            <CryptoUpdate />
            <NavItems />
            <div className='oak-auth-wrapper' style={{
                padding:'20px 0'
            }}>
                {children}
            </div>
        </div>
    )
}

export default AuthGuard
