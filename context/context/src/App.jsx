import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createContext ,useContext} from 'react';
import './App.css'
const myContext=createContext(0);
function App() {
  const [count, setCount] = useState("count ki value")

  return (
    <>
     <h1>I am the APP Component</h1>
     <myContext.Provider value={count}>
     <FirstChild  />
     </myContext.Provider>
    </>
  )
}
function FirstChild(){
  return(
    <>
      <h1>I am inside App</h1>
      <SecondChild />
    </>
  )
}
function SecondChild(){
  return(
    <>
      <h1>I am inside FirstChild</h1>
      <ThirdChild/>
    </>
  )
}
function ThirdChild(){
  const value=useContext(myContext)
  return(
    <>
      <h1>I am inside SecondChild: {value}</h1>
    </>
  ) 
}


export default App
