// import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { countContext } from './context'
import {countatom} from "./store/countatom"
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
      <Child />
    </RecoilRoot>
    </>
  )
}
function Child(){
  console.log("rendering");
return(
  <>
  <CountValue />
  <Button />
  </>
)
}

function CountValue(){
  let count = useRecoilValue(countatom);
  return(
    <>
    <h1>{count}</h1>
    </>
  )
}
function Button(){
  console.log("Button is rendering");
  // let [count,setCount]=useRecoilState(countatom);
  let setCount=useSetRecoilState(countatom);
  return(
    <>
      <button onClick={()=>setCount((prevcount)=>prevcount+1)}>Inc</button>
      <button  onClick={()=>setCount((prevcount)=>prevcount-1)}>Dec</button>
    </>
  )
}

export default App