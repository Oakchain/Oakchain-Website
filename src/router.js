import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/'




const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterConfig