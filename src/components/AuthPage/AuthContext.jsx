// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        // Perform login logic (e.g., set tokens, user info)
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Perform logout logic (e.g., clear tokens, user info)
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
