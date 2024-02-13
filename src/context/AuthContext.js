import { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { loginRequest } from "../utils/AuthSerivce";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);

    const login = async (username_, password) => {

        try {
            const jwtToken = await loginRequest(username_, password)
        
            const tokenDecoded = jwtDecode(jwtToken);
            const usernameDecoded = tokenDecoded.unique_name;

            console.log(jwtToken);
            console.log(usernameDecoded);

            setToken(jwtToken);
            setUsername(usernameDecoded);
        } catch(err) {
            console.error(err);
        }
    }
    
    const logout = () => {
        setToken(null);
        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ token, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}