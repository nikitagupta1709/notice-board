import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div>
      <form className='form'>
        <label>Enter username</label>
        <input placeholder='Your username' type="text"/>
        <button>Submit</button>
      </form>
    </div>
  )
}
