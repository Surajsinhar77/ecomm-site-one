import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AllRoutes from './common/AllRoutes'
import LoginPage from './components/AuthPage/LoginPage';
import SignInRoute  from './common/SignInRoute'
import {useAuth} from './components/AuthPage/AuthContext';



function App() {
  const {isLoggedIn} =useAuth();
  return (
    <div>

        <Router >
          {
            isLoggedIn ?
              <>
                <Navbar/>
                <AllRoutes/>
              </>
            :
              <>
                {/* <LoginPage/> */}
                <SignInRoute/>
              </>
          } 
        </Router>
      
        {/* <LoginPage/> */}
      
    </div>
  )
}

export default App
