import Signup from './pages/signup';
import Login from './pages/login';
import React from 'react';
import "./App.css"
import { useState } from 'react'
const App = () => {
  const[signupclick,setsignupclick]=useState(true);
  const [loginclick,setLoginclick]=useState(false);
  return (
    <main>
      <h3>
        <div>
        <button onClick={()=>{
          setLoginclick(false);
          setsignupclick(true);
        }}>Signup</button>
        <button onClick={()=>{
          setLoginclick(true);
          setsignupclick(false);
        }}>Login</button>
        </div>
      </h3>

      {signupclick && <Signup/>}
      {loginclick && <Login/>}
    </main>
  )
}

export default App
