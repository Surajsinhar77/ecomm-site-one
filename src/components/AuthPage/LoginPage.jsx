import React, { useState } from 'react'
import api from '../api/axios.instance';
import {useAuth} from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    
    const { isLoggedIn, login } = useAuth();

    const notify = async(message)=>{
        console.log(message)
        const  Noti =()=>{
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
            // navigate("/register");
        }
        setTimeout(()=>{
            Noti();
            
        },1000)
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if(email.trim === '' || password.trim === ''){
            setError( "Please fill in all field")
        }else{
            api.post('/login', {email:email, password:password}).then((Response)=>{
                console.log(Response.data.userExist);
                if(Response.data.userExist){
                    // notify(Response.data.msg);
                        login();
                        navigate('/');
                }else{
                    notify(Response.data.msg);
                }
            }).catch((err)=>{
                console.error(err);
            })
        }
    }
    return (
        <div className='mainlogindiv w-full flex items-center'>
                <div className="w-full max-w-sm p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#" onSubmit={handelSubmit}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input  type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" ></input>
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <Link  className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                        </div>
                        <div id="message">
                            <h3>Password must contain the following:</h3>
                            <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                            <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                            <p id="number" class="invalid">A <b>number</b></p>
                            <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link  className="text-blue-700 hover:underline dark:text-blue-500">
                                <Link to='/register'>Create an account</Link>
                            </Link>
                        </div>
                    </form>
                </div>
                <ToastContainer />
        </div>
    )
}

export default LoginPage