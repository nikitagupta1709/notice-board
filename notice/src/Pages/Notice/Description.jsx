import axios from 'axios';
import { useState, useEffect } from 'react'
import './description.css'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function Description() {
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("username")) || false ;

    useEffect(() =>{
    }, [desc])

  const handleChange = (e) => {
    setDesc(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        axios.post("https://noticeboard.onrender.com/notice/create", {
            desc:desc,
            username: user
        })
        .then((res)=>toast.success(res.data.message)) 
        .catch(()=>{
          toast.error("Minimum 100 characters required!!")
        });
        navigate("/notice")
    } catch (error) {
        console.log(error)
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h3>Submit a notice</h3>
        <textarea className='input' placeholder='Enter your notice' type="text" name="dec" onChange={ handleChange} required/>
        <button className='btn' type='submit'>Submit</button>
      </form>
      <Toaster />
    </div>
  )
}
