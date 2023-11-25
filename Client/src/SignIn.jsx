import React from 'react'
import { signInWithGoogle } from './Firebase/utils'
import "./Assets/SignIn.css"


const SignIn = () => {
  return (
    <div>  
      <div className='main-head'>
          <h1>Dead Stock Management</h1>
      </div>
      <div className='signInPage'>
        <div className='googleLogo'>
            <img src="https://www.clipartkey.com/mpngs/m/189-1896684_and-svg-google-black-google-logo-vector.png" alt="" />
            {/* <p className='googleLogoFont'>G</p> */}
        </div>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  )
}

export default SignIn