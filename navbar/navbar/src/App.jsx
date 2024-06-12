// import { useState } from 'react'
import { RecoilRoot} from 'recoil'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { countatom } from './store/countatom'
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
  return(
    <>
      <Button />
    </>
  )
}
function Button(){
  return(
    <>
    <button>Notifications</button>
    <button>Messages</button>
    <button>Jobs</button>
    <button>Network</button>
    </>
  )
}

export default App
