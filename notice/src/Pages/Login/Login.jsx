import "./login.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const [username , setUser] = useState("");
  const navigate = useNavigate();
  
  let user = JSON.parse(localStorage.getItem("username")) || false ;

  useEffect(() => {
    if(user){
      return navigate("/notice")
    }
  }, []);

  // loggin into 
  const handleSubmit = (e) => {
    e.preventDefault();
    try {

      axios.post(`https://noticeboard.onrender.com/auth/login`, {username})
      .then((response) => {
        localStorage.setItem("username", JSON.stringify(response.data.data.username));
        toast.success(response.data.message);
        navigate("/notice")
      })
      .catch((err) => toast.error("Only alphanumeric username !!"))

    } 
    catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="login">
      <form className='form' onSubmit={handleSubmit}>
        <h3>Login to see notice board</h3>
        <div className='iptDiv'>
          <input placeholder='Your username' type="text" name="username" value={username} onChange={(e) => setUser(e.target.value)} required/>
          <button className='btnLog' type='submit'>Submit</button>
        </div>
      </form>
      <Toaster />
    </div>
  )
}
