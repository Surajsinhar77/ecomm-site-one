import React, { useState } from "react";
import "./style.css";
import api from '../api/axios.instance';
import {useAuth} from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import FlashMessage from 'react-flash-message'


function RegistrationForm() {
    const [genotp, setGenotp] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [userData, setUserdata] = useState({});

    const [email,setEmail] = useState();
    const [fullname,setFullname]  = useState();      
    const [phoneno,setPhoneno] = useState();
    const [otp,setOtp] = useState();
    const [address,setAddress] = useState();
    const [city,setCity] = useState();
    const [country,setCountry] = useState();
    const [state,setState] = useState();
    const [pincode,setPincode] = useState();
    const [password,setPassword] = useState();
    const [cnfpassword,setCnfpassword] = useState();

    // const [userData, setuserData] = useState({
    //     fullname: "",
    //     email: "",
    //     phoneno:'',
    //     otp:'',
    //     address:'',
    //     city:'',
    //     country:'',
    //     state:'',
    //     pincode:'',
    //     password:'',
    //     cnfpassword:'',
    // });



        const showFlashMessage = () => {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 4000); // Flash message disappears after 3 seconds (adjust as needed)
        };


    // const handleInputChange = (e) => {
    //     e.preventDefault()
    //     const { name, value } = e.target;
    //     console.log(name, value);
    //     setuserData((prevData) => ({
    //         ...prevData, [name]: value,
    //     }));
    //     console.log(userData);
    // };
        


    const handelUserData = (e) => {
        e.preventDefault()
        setUserdata({fullname:fullname, email:email, phoneno:phoneno, address:address, city:city, country:country, state:state, pincode:pincode, password:password});
        console.log(userData);

        console.log(cnfpassword+"  "+password);
        if(password != cnfpassword){
            setMessage("Password not Match ");
            showFlashMessage()
            return 
        }
        if(otp == genotp){
            api.post('/register',userData).then((res)=>{
                console.log(res)
                setMessage(res.data);
                showFlashMessage()
            }).catch((err)=>{
                setMessage(err.response.data.message);
                showFlashMessage()
                console.log(err.response.data.message);
                console.log('This is the error msg :'+err.response.data.message);
            })
        }else{
            setMessage("Wrong OTP");
            showFlashMessage();
        }
    };

    const otpHandel = (e) =>{
        e.preventDefault()
        if(phoneno.length != 13 || phoneno.length != 14 ){
            setMessage("Incorrect Phone");
            showFlashMessage();
        }

        api.post('/send-otp',{
            "otp":  Math.floor(100000 + Math.random() * 900000),
            phoneno:phoneno
        }).then((Response)=>{
            console.warn(Response);
            setGenotp(Response.data.otpVerify);
            setMessage('Otp sent');
            showFlashMessage();
        }).catch((err)=>{
            console.error(err);
            setMessage(err.message);
            showFlashMessage();
        })
    }

    return (
        <div>
        
        <form  onSubmit={handelUserData}>
            <div class="registerMainContainer  p-6 flex items-center justify-center">
            
            <div class="container max-w-screen-lg mx-auto">
                <div  id="flashMsg" className="">
                    {
                        isVisible?
                            <FlashMessage duration={11000}>
                                <div class="flashMessage p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span class="font-medium">Alert ! </span>{message}
                                </div>
                            </FlashMessage>
                        :
                        ""
                    }
                </div>
                <div>
                {/* <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
                    <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}
                    
                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                        <p class="font-medium text-xl text-green-700">
                        Personal Details
                        </p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-2">
                            <label for="full_name">Full Name</label>
                            <input
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            name="fullname"
                            type="text"
                            required
                            onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

                        <div class="md:col-span-3">
                            <label for="email">Email Address</label>
                            <input
                            type="email"
                            name="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="email@domain.com"
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        {/* <form onSubmit={otpHandel}> */}
                            <div class="md:col-span-2">
                                <label for="tel">Phone No</label>
                                <input
                                type="tel"
                                name="phoneno"
                                id="phoneno"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="+91 1234567890"
                                required
                                onChange={(e)=>setPhoneno(e.target.value)}
                                />
                            </div> 
                            <div class="md:col-span-1 flex flex-col">
                                <label for="tel">OTP Verify</label>
                                <button onClick={otpHandel} class="bg-green-500 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Send
                                </button>
                            </div>
                        {/* </form> */}
                        <div class="md:col-span-2">
                            <label for="tel">OTP</label>
                            <input
                            type="tel"
                            name="otp"
                            id="otp"
                            onChange={(e)=>setOtp(e.target.value)}
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                        </div>

                        <div class="md:col-span-3">
                            <label for="address">Address / Street</label>
                            <input
                            type="text"
                            name="address"
                            id="address"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            required
                            onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div class="md:col-span-2">
                            <label for="city">City</label>
                            <input
                            type="text"
                            name="city"
                            id="city"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            required
                            onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div class="md:col-span-2">
                            <label for="country">Country / region</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                                name="country"
                                id="country"
                                placeholder="Country"
                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                required
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <button
                                tabindex="-1"
                                class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                            >
                                <svg
                                class="w-4 h-4 mx-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <button
                                tabindex="-1"
                                for="show_more"
                                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                            >
                                <svg
                                class="w-4 h-4 mx-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                >
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                            </button>
                            </div>
                        </div>

                        <div class="md:col-span-2">
                            <label for="state">State / province</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                                name="state"
                                id="state"
                                placeholder="State"
                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                required
                                onChange={(e) => setState(e.target.value)}
                            />
                            <button
                                tabindex="-1"
                                class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                            >
                                <svg
                                class="w-4 h-4 mx-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <button
                                tabindex="-1"
                                for="show_more"
                                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                            >
                                <svg
                                class="w-4 h-4 mx-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                >
                                <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                            </button>
                            </div>
                        </div>

                        <div class="md:col-span-1">
                            <label for="zipcode">Pincode</label>
                            <input
                            type="text"
                            name="pincode"
                            id="zipcode"
                            class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            required
                            onChange={(e) => setPincode(e.target.value)}
                            />
                        </div>

                        {/* <div class="md:col-span-5">
                                <div class="inline-flex items-center">
                                <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                                <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                                </div>
                            </div> */}

                        <div class="md:col-span-3">
                            <label for="password">Password</label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="md:col-span-2">
                            <label for="password">Confirm Password</label>
                            <input
                            type="password"
                            name="cnfpassword"
                            id="cnfpassword"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            required
                            onChange={(e) => setCnfpassword(e.target.value)}
                            />
                        </div>
                        <div class="md:col-span-5 text-right flex justify-between items-center">
                            <div className="md:col-span-5">
                            <Link
                                to="/"
                                className="alreadyAcc text-base hover:decoration-1"
                            >
                                Already have a account
                            </Link>
                            </div>
                            <div class="inline-flex items-end">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <a
                href="https://www.buymeacoffee.com/dgauderman"
                target="_blank"
                class="md:absolute bottom-0 right-0 p-4 float-right"
                >
                <image
                    src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                    alt="Buy Me A Coffee"
                    class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
                />
                </a>
            </div>
            </div>
        </form>
        </div>
    );
}
export default RegistrationForm;
