import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './description.css'

export default function Description() {
    const [notice, setDesc] = useState([]);
    let user = JSON.parse(localStorage.getItem("username")) || null ;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newNotice = {
        username: user.username,
        ...notice,
    }
    try {
        axios.post("https://noticeboard.onrender.com/notice/create", newNotice)
        .then((res) => console.log(res))
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h3>Submit a notice</h3>
        <textarea className='input' placeholder='Enter your notice' type="text" name="dec" value={notice.desc} onChange={(e) => setDesc(e.target.value)}/>
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}
