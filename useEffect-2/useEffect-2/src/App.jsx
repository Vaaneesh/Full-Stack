import { useEffect, useState } from 'react'
import axios from 'axios'; //to fetch data
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { response } from 'express';

function App() {
  const [id, setId] = useState("1");
  
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={()=>setId("1")}>Task 1</button>
      <button onClick={()=>setId("2")}>Task 2</button>
      <button onClick={()=>setId("3")}>Task 3</button>
      <Todo id={id} />
      
    </>
  )
}
function Todo({id}){
  console.log(id)
  const[todo,setTodo]=useState(null);
  // 'https://jsonplaceholder.typicode.com/todos/1'
  useEffect(()=>{ //can't apply async here bcoz we dont need anything to return and async will return promise
    async function fetchTodo(){  //inorder to apply async
        let response=await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        setTodo(response.data);
    }
    fetchTodo();
  },[id]); //for empty array in dependency it will run only once

  return(
    <>
      {todo && <h1>{todo.title}</h1>}
    </>
  )
}
export default App
