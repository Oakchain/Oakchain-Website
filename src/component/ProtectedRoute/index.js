import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie';

const ProtectedeRoute = () => {

    const intent_url = window.location.pathname;
    const accessToken = Cookies.get("OAK_AUTH_TOKEN")
    
    // console.log(accessToken)
    let authorized = false
    if (accessToken) {
        let decoded = jwt_decode(accessToken)
        if (decoded.exp * 1000 < Date.now()) {
            authorized = false
        } else {
            const stored_url = localStorage.getItem('OAK_intent_url')
            if (stored_url) {
                localStorage.removeItem('OAK_intent_url')
            }
            authorized = true
        }
    } else {
        console.log(intent_url)
        localStorage.setItem('OAK_intent_url', intent_url)
        authorized = false
    }
    return authorized ? (
        <Outlet />
    ) : (
        <Navigate to='/' />
    )
}



export default ProtectedeRoute