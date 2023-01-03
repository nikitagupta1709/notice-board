import React from 'react'
import Login from './Login/Login';
import Notice from './Notice/Notice';

export default function Home() {
    let username = JSON.parse(localStorage.getItem("username")) ;

  return (
    <div>
      {username ? <Notice /> : <Login />}
    </div>
  )
}
