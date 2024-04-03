import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mark, setMark] = useState([null,null,null,null,null,null,null,null,null]);
  const [isX,setIsX]=useState(true);
  function clickHandler(indx){
    let newMark=[...mark];
    if(isX==true)
    newMark[indx]='x';
    else newMark[indx]='o';
    setMark(newMark);
    setIsX(!isX);
  }

  return (
    <>
    <div>
      <button onClick={()=>clickHandler(0)}style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[0]}</button>      
      <button onClick={()=>clickHandler(1)}style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[1]}</button>      
      <button onClick={()=>clickHandler(2)}style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[2]}</button>      
    </div>
    <div>
      <button onClick={()=>clickHandler(3)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[3]}</button>      
      <button onClick={()=>clickHandler(4)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[4]}</button>      
      <button onClick={()=>clickHandler(5)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[5]}</button>      
    </div>
    <div>
      <button onClick={()=>clickHandler(6)}style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[6]}</button>      
      <button onClick={()=>clickHandler(7)}style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[7]}</button>      
      <button onClick={()=>clickHandler(8)}style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[8]}</button>      
    </div>
    </>
  )
}

export default App
