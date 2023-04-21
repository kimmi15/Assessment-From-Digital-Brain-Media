import React, { useState } from 'react'
import axios from 'axios';
import image from '../Group.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async e => {
    try {
      e.preventDefault()
      const res = await axios.post('http://localhost:3002/login', { email, password });
      if(res.status === 200) alert('login');
      setEmail(''); setPassword('');

    } catch (error) {
      alert(error.response.data.msg)
    }
  }
  return (
    <>
      <div className="login">
        <div className="left">
          <img src={image} alt="img" />
        </div>
        <div className="right">
          <form >
            <h1>Login</h1>
            <div className="inputBox">
              <i className="fa-regular fa-envelope"></i>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
            </div>
            <div className="inputBox">
              <i className="fa-solid fa-lock"></i>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
            </div>
            <small className='forgetBtn'>forget password</small>
            <div className="inputBox" style={{ 'textAlign': 'center' }}>
              <button onClick={e => { submit(e) }}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login