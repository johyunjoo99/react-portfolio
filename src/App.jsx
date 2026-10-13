import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AOS from 'aos'
import './style/style.scss'

import { BASE_URL } from './constants/constants'
import useViewport from './hooks/useViewport'
import ScrollManager from './component/common/ScrollManager'
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import Floating from './component/common/Floating'
import Main from './pages/Main'
import Work from './pages/Work'

function App() {
  useViewport();

  useEffect(() => {
    AOS.init({
      once : true,
      throttleDelay : 99,
    });
  }, []);

  return (
    <BrowserRouter basename={BASE_URL}>
      <ScrollManager/>
      <Header/>
      <div id="wrap">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
        <Floating/>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
