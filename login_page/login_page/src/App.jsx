import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email,password);

  async function loginhandler(){
    // let response=await axios
  }

  return (
    <>
      <form action="">
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter email' />
        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter password' />
        <button>Login</button>
      </form>
    </>
  )
}

export default App
