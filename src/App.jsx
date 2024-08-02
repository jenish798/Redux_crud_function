import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { routed } from './router'

function App() {

  return (
    <>
    <Router>
        <Routes>
          {routed.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  )
}

export default App
