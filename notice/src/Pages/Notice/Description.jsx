import axios from 'axios';
import { useState, useEffect } from 'react'
import './description.css'
import toast, { Toaster } from 'react-hot-toast';

export default function Description() {
    const [desc, setDesc] = useState("");
    let user = JSON.parse(localStorage.getItem("username")) || false ;

    useEffect(() =>{
    }, [desc])

  const handleChange = (e) => {
    setDesc(e.target.value);
  }
  
  // creating a new notice
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

    } 
    catch (error) {
        console.log(error)
    }
    e.target.reset();
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
