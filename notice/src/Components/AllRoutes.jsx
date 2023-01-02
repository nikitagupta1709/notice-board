import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Notice from '../Pages/Notice/Notice'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login />}></Route>
      <Route path='/notice/create' element={<Notice/>}></Route>
      <Route path='/notice/' element={<Notice/>}></Route>
    </Routes>
  )
}
