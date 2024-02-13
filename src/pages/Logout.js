import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";


const Logout = () => {

    const { username, logout } = useAuth();

    useEffect(() => {

        logout();

    }, [])

    return (
        <>
            <NavBar />
            {username
            ?
            <h1>There was an error in logout attempt</h1>
            :
            <h1>You have been logged out succesfully</h1>}
        </>
    )
}

export default Logout;