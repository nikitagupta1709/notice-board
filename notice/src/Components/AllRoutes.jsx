import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Notice from '../Pages/Notice/Notice'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/notice/' element={<Notice/>}></Route>
    </Routes>
  )
}
