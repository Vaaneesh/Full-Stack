import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { countContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <countContext.Provider value={count}>
     <Child setCount={setCount} />
     </countContext.Provider>
    </>
  )
}
function Child({setCount}){
  console.log("rendering")
return(
  <>
  <CountValue />
  <Button setCount={setCount} />
  </>
)
}

function CountValue(){
  let count=useContext(countContext)
  return(
    <>
    <h1>{count}</h1>
    </>
  )
}
function Button({setCount}){
  let count= useContext(countContext);
  return(
    <>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <button  onClick={()=>setCount(count-1)}>Dec</button>
    </>
  )
}

export default App