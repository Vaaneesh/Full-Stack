import './App.css'
import Write from "./component/Write"
import Read from "./component/Read"
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebaseConfig";
import { useState } from 'react';
function App() {
  const[registerEmail,setregisterEmail]=useState("");
  const[registerPassword,setregisterPassword]=useState("");
  const[loginEmail,setloginEmail]=useState("");
  const[loginPassword,setloginPassword]=useState("");
  const [user,setUser]=useState("");
  onAuthStateChanged(auth,(user)=>{
    setUser(user);
  })
  async function signup(e){
    e.preventDefault();
    try{
      let user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
      console.log(user);
    }
    catch(err){
      console.log(err);
    }
  }
  async function login(e){
    e.preventDefault();
    try{
      let userCredential=await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      console.log(userCredential.user);
    }catch(err){
      console.log(err);
    }
  }
  // async function logout() {
  //   await signOut(auth);
  //   
  //   console.log("User signed out!");  
  //  }
  return (
    <>
  
    <div>
    <h1>Signup:</h1>
     <form onSubmit={signup} action="">
        <input type="text" value={registerEmail} placeholder='enter email' onChange={(e)=>setregisterEmail(e.target.value)} />
        <input type="text" value={registerPassword} placeholder='enter password'onChange={(e)=>setregisterPassword(e.target.value)} />
        <button>Sign up</button>
     </form>
    </div>
    <div>
      <h1>Login</h1>
      <form onSubmit={login} action="">
        <input type="text" value={loginEmail} placeholder='enter email' onChange={(e)=>setloginEmail(e.target.value)} />
        <input type="text"value={loginPassword} placeholder='enter password'onChange={(e)=>setloginPassword(e.target.value)} />
        <button>Login</button>
     </form>
    </div>
    
    {/* <div>
        <h3>Currently Signed In: {user && user.email} </h3>
        <button onClick={logout}>Logout</button>
  </div> */}
    </>
  )
}

export default App
