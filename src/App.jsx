import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import '../src/style/style.scss'

import useViewport from './hooks/useViewport'
import Header from './component/common/Header'
import Main from './component/main/Main'

function App() {
  useViewport();
  AOS.init({
		once : true,
		throttleDelay : 99,
	});

  return (
    <>
      <BrowserRouter>
        <Header/>
        <div id="wrap">
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
