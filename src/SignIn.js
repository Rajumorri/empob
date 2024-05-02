import React from 'react'
import './SignIn.css'
import GoogleIcon from './assets/google'
import Eye from './assets/eye'
import Dashboard from './dashboard'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function SignIn() {
  console.log("ousbdbcav")
  return (
    <div className='main'>
    <div className='image'></div>
    <div className='signIn'>
      <div><h3>SignIn</h3></div>
      <div>Welcome to easy Onboarding<br></br>please signin to your account start adventures</div>
    <input className="input" type='text' placeholder='username'></input>
    <input className="input" type='text'placeholder='password' img src='http://www.w3.org/2000/svg"'></input>
    <div className='forgot'>
      <div>
      <input type='checkbox'></input>Remember me</div>
      <a href='#'>forgot password</a>
    </div>
    <div><button><Link to='/Dashboard1'>SignIn</Link></button></div>
     
      <div><button><GoogleIcon width='15'/>continue with google</button></div>
      <div style={{'margin-left':'25px'}}> Dont have an account<a href='#'>SignUp</a></div>
   
      </div>
    </div>
  )
}

export default SignIn
