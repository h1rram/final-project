import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import New from './pages/New'
import Update from './pages/Update'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </Router>
  )
}

export default App