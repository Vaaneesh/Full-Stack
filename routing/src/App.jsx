// import { useNavigate } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route, useNavigate,Link} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Home from './component/Home'
import User from './component/User'
import Userlist from './component/Userlist'
import PageNotFound from './component/PageNotFound'

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard'element={<Dashboard />} />
          <Route path='userlist'>
            <Route index element={<Userlist />} />
            <Route path=':userid' element={<User />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='/name'element={<h1>Hi</h1> } /> Static */}
        </Routes>
        
    </>
  )
}
function Header(){
  const navigate=useNavigate();
  return(
    <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/userlist">Userlist</Link></li>
          </ul>
        </nav>
    // <div>
    //   <button onClick={()=>{
    //   navigate("/")
    //   }}>Home</button>

    //   <button onClick={()=>{
    //     navigate("/Dashboard")
    //   }}>Dashboard</button>

    // </div>
  )
}

export default App
