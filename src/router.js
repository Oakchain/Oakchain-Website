import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/'
import Home from './pages/Home'
import News from './pages/News'





const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/news' element={<News />} />

            </Routes>
        </BrowserRouter>
    )
}
export default RouterConfig