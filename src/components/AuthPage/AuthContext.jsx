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


    const login = () => {
        // Perform login logic (e.g., set tokens, user info)
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn',"true");
    };

    const logout = () => {
        // Perform logout logic (e.g., clear tokens, user info)
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };
    
    const setItem = (data)=>{
        setCartItem(data);
        localStorage.setItem('cartItem',data);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout , cartItem , setItem}}>
        {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
export const getItem = () => useContext(AuthContext);

