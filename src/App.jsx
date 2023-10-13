import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './pages/About';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
