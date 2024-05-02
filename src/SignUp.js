import React from 'react'
import GoogleIcon from './assets/google'
import { Link } from 'react-router-dom'
import SignUpPic from './assets/SignUp/signuppic'
import Midpic from './assets/SignUp/midpic'
function SignUp() {
  return (
    <div className='main'>
        <div className='image'><Midpic/></div>
        <div className='signUp'>
          <div className='title'><h3>Sign Up</h3></div>
          <div>Make your onboarding a piece of cake</div>
          <div className='form'>
            <form>
            <label>Please select your category:</label>
            <div>
            <input type="radio" name="category" value="option1"/> Option 1
            <input type="radio" name="category" value="option2"/> Option 2
            <input type="radio" name="category" value="option3"/> Option 3
            <input type="radio" name="category" value="option4"/> Option 4
            </div>
              <div className='details'>
                <input type='text' placeholder='company name'></input>
                <div style={{'display':'flex'}}>
                <input type='text' placeholder='first name' style={{'width':'50%'}}></input>
                <input type='text' placeholder='last name'style={{'width':'50%'}}></input>
                </div>
                <input type='text' placeholder='email'></input>
                <input type='text'placeholder='password'></input>
                <input type='text' placeholder='confirm password'></input>
              </div>
              <div className='bottom'>
                <div>
              <input type='checkbox'></input><a>I agree to<a href='#'>privacy policy & terms</a></a>
              </div>
              <div>
              <button style={{'width':'150%','margin-left':'0px','backgroundColor':'blue'}}>SignUp</button>
              <div><button> <GoogleIcon width='15'/>continue with google</button></div>
              <div>Already have an account<Link to='/SignIn'>SignIn</Link></div>
              </div>
             
              </div>
            </form>
          </div>
        </div>
  
       </div>
  
  )
}

export default SignUp
