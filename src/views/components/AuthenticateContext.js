import React, { useState } from 'react';

export const AuthenticateContext = React.createContext();
// eslint-disable-next-line
function AuthenticateContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthenticateContext.Provider value={{ useStateAuthenticated: [isAuthenticated, setIsAuthenticated] }}>
            {children}
        </AuthenticateContext.Provider>
    );
}

export default AuthenticateContextProvider;