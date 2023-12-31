import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AllRoutes from './common/AllRoutes'
import LoginPage from './components/AuthPage/LoginPage';
import SignInRoute  from './common/SignInRoute'
import {useAuth} from './components/AuthPage/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';



function App() {
  const {isLoggedIn} = useAuth();

  const notify = (message)=>{
    
    const  Noti =()=>{
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        })
    }
    setTimeout(()=>{
        Noti();
    },1000)
  }
  
  useEffect(()=>{
    notify()
  },[isLoggedIn]);

  return (
    <div>
        <Router >
          {
            isLoggedIn ?

              <>
                <Navbar />
                <AllRoutes/>
              </>
            :
              <>
                {/* <LoginPage/> */}
                <SignInRoute/>
              </>
          } 
          <ToastContainer />
        </Router>
      
        
        {/* <LoginPage/> */}
      
    </div>
  )
}

export default App
