import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import '../src/style/style.scss'

import useViewport from './hooks/useViewport'
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import Floating from './component/common/Floating'
import Main from './component/main/Main'

function App() {
  useViewport();
  
  useEffect(() => {
    AOS.init({
      once : true,
      throttleDelay : 99,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <div id="wrap">
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
          <Floating/>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
