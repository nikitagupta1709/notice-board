import React from 'react'
import "./login.css"
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
  const [username , setUser] = useState("");
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("username")) || false ;

  useEffect(() => {
    if(user){
      return navigate("/notice")
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`https://noticeboard.onrender.com/auth/login`, {username})
      .then((response) => {
        if(response.data.error){
          alert("Eneter alphanumeric username");

        } else{
          localStorage.setItem("username", JSON.stringify(response.data.data.username));

          alert(response.data.message);
          navigate("/notice")
        }
      })

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Login to see notice board</h3>
        <input placeholder='Your username' type="text" name="username" value={username} onChange={(e) => setUser(e.target.value)}/>
        <button className='btnLog' type='submit'>Submit</button>
      </form>
    </div>
  )
}
