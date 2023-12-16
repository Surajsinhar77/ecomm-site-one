// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const [cartItem , setCartItem] = useState(()=>{
        return localStorage.getItem('cartItem') > 0;
    });

    const [userData, setUserData] =useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });


    const login = (prop) => {
        console.log(prop);
        setUserData(prop);
        setIsLoggedIn(true);
        localStorage.setItem('userData',JSON.stringify(prop));
        localStorage.setItem('isLoggedIn',"true");
    };

    const logout = () => {
        setUserData(null);
        setIsLoggedIn(false);
        localStorage.removeItem('userData');
        localStorage.removeItem('isLoggedIn');
    };
    
    const setItem = (data)=>{
        setCartItem(data);
        localStorage.setItem('cartItem',data);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout , cartItem , setItem, userData}}>
        {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
export const getItem = () => useContext(AuthContext);

