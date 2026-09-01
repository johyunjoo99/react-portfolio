import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../src/style/style.scss'

import Header from './component/common/Header'
import Main from './component/main/Main'

function App() {

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
