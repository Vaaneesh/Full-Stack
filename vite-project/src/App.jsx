import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //https://jsonplaceholder.typicode.com/
  const [posts,setPosts]=useState(null);
  useEffect(()=>{
    async function fetchData(){
      let response=await fetch("https://jsonplaceholder.typicode.com/posts")
      let data=await response.json();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  },[])
  //NOTE: we cant use async with useEffect as it will not return anything 
  return (
    <>
      <h1>data fetch</h1>
      <div className="container">
        {posts && posts.map((post)=>{
          return(
            <ul>
              <Onepost key={post.id} title={post.title} />
            </ul>
          )
        })}
      </div>
    </>
  )
}
function Onepost(props){
  return(
    <>
    <li>{props.title}</li>
    </>
  )
}

export default App
