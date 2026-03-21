import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {}, // trigger when signup or login was successful
    logout: () => {} // clear authenticated state
});

function AuthContextProvider({childred}) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
    }
    
    return <AuthContext.Provider>{childred}</AuthContext.Provider>;
}

export default AuthContextProvider;