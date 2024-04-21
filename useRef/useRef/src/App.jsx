import { useState } from 'react'
//  `import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

//We used useRef inorder to avoid re-rendering //also to store value and 
function App() {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  // const [count, setCount] = useState(0)
  // const texRef=useRef(null);
  const inputRef=useRef(" ");
  function clickHandler(){
    // inputRef.current.focus();
    setName(inputRef.name);
    setAge(inputRef.age);
  }
  function ageHandler(e){
    inputRef.age=e.target.value;
    console.log(inputRef.age);
  }
  function onchangeHandler(e){
    console.log(e.target.value);
    inputRef.name=e.target.value;
    console.log(inputRef.name);
  }
  return (
    <>
      <input onChange={onchangeHandler}  type="text" />
      <input onChange={ageHandler}  type="text" />
      <button onClick={clickHandler}>Submit</button>
      <div>{name}</div>
      <div>{age}</div>
    </>
  )
}

export default App
