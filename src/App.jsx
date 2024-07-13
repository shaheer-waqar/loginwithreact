import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {

  let [isSignup,setIsSignup] = useState(false)

  const loginHandler = ()=>{
    setIsSignup(!isSignup);
  }
  return (
    <>
    {
      isSignup?
      <Signup loginCheck={loginHandler}/>
      :  
      <Login loginCheck={loginHandler}/>

    }
    </>
  )
}

export default App
