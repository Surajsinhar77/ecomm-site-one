import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AllRoutes from './common/AllRoutes'
import {useAuth} from './components/AuthPage/AuthContext';
import LoginPage from './components/AuthPage/LoginPage';


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
            <LoginPage/>
          }
        </Router>
      
        {/* <LoginPage/> */}
      
    </div>
  )
}

export default App
