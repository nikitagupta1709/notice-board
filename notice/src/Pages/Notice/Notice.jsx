import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from './Description';
import './notice.css'

export default function Notice() {
  const [allNotice, setAllNotice] = useState([]);
  const navigate = useNavigate();
  let username = JSON.parse(localStorage.getItem("username")) || false ;

  useEffect(() => {
    if(!username){
      return navigate("/")
    }
    else{
      getNotice();
    }
  }, [username])

  const getNotice = () => {
    axios.get("https://noticeboard.onrender.com/notice/")
    .then((res) => setAllNotice(res.data.data))
  }
  const handleLogout = () => {
    localStorage.removeItem("username");
    alert("You have been looged out");
    navigate("/");
  }

  return (
    <div>
      <div className='head'>
        <h1>Notice Board</h1>
        <button className='btn' onClick={handleLogout}>Logout</button>
      </div>
      <Description />
      <div className='section'>
        {allNotice.reverse().map((item) => 
          <div key={item._id} className="mainDiv">
            <p className='desc'>{item.desc}</p>
            <br/>
            <div className='lower'>
              <p>username:- {item.username}</p>
              <div className='time'>
                <p>{new Date(item.createdAt).toDateString()}</p>
                <p>{new Date(item.createdAt).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}