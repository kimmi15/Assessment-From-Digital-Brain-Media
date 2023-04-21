import React, { useState } from 'react'
import axios from 'axios';

const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const submit = async e => {
    try {
      e.preventDefault()
      const res = await axios.post('http://localhost:3002/registration', { name, email, password });
      if(res.status === 200) alert('login');
      
      setName(''); setEmail(''); setCpassword(''); setPassword(''); 

    } catch (error) {
      alert(error.response.data.msg)
      console.log(error);
    }
  }

  return (
    <>
      <div className="login">
        <div className="right">
          <form >
            <h1>SingUp</h1>
            <div className="inputBox">
              <i className="fa-regular fa-user"></i>
              <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' />
            </div>
            <div className="inputBox">
              <i className="fa-regular fa-envelope"></i>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
            </div>
            <div className="inputBox">
              <i className="fa-solid fa-lock"></i>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
            </div>
            <div className="inputBox">
              <i className="fa-solid fa-lock"></i>
              <input value={cpassword} onChange={e => setCpassword(e.target.value)} type="password" placeholder='confirm Password' />
            </div>
            <small className='forgetBtn'>Don't have accont</small>
            <div className="inputBox" style={{ 'textAlign': 'center' }}>
              <button onClick={e => { submit(e) }}>SingUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration