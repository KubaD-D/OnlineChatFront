import { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { loginRequest, logoutRequest } from "../utils/AuthSerivce";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState(null);

    const login = async (loginUsername, password) => {

        try {
            const responseUsername = await loginRequest(loginUsername, password)
    
            setUsername(responseUsername);

            console.log(`Auth context username ${username}`);
        } catch(err) {
            console.error(err);
        }
    }
    
    const logout = async () => {
        await logoutRequest();

        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ username, login, logout, setUsername }}>
            {children}
        </AuthContext.Provider>
    );

}