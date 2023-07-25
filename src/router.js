import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/'
import Home from './pages/Home'
import News from './pages/News'
import NewsDetails from './pages/News/[id]'
import Academy from './pages/Academy'
import ArticleDetails from './pages/Academy/Article/[id]'


const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/news' element={<News />} />
                <Route exact path='/news/:id' element={<NewsDetails />} />
                <Route exact path='/academy' element={<Academy />} />
                <Route exact path='/academy/article/:id' element={<ArticleDetails />} />


            </Routes>
        </BrowserRouter>
    )
}
export default RouterConfig