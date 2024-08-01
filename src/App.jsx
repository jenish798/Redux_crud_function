import { useState } from 'react'
import Home from './pages/home/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './pages/create/create'
import Update from './pages/update/update'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Home/>}></Route>
      <Route path ='/create' element={<Create/>}></Route>
      <Route path ='/edit/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
