import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";


const Logout = () => {

    const { username, logout } = useAuth();

    useEffect(() => {

        logout();

    }, [])

    return (
        <>
            {username
            ?
                <div className="d-flex justify-content-center mt-4">
                    <h1>There was an error in your logout attempt</h1>
                </div>
            :
                <div className="d-flex justify-content-center mt-4">
                    <h1>You have been logged out successfully</h1>
                </div>
            }
        </>
    )
}

export default Logout;