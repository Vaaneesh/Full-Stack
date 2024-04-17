import { useState } from 'react'
//  `import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

//We used useRef inorder to avoid re-rendering //also to store value and 
function App() {
  const [todo,setTodo]=useState(null)
  // const [count, setCount] = useState(0)
  // const texRef=useRef(null);
  const inputRef=useRef(" ");
  function clickHandler(){
    // inputRef.current.focus();
    setTodo(inputRef.current);
  }
  function onchangeHandler(e){
    console.log(e.target.value);
    inputRef.current=e.target.value;
    console.log(inputRef.current);
  }
  return (
    <>
      <input onChange={onchangeHandler}  type="text" />
      <button onClick={clickHandler}>Submit</button>
      <div>{todo}</div>
    </>
  )
}

export default App
