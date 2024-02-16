import { useState } from "react";
import { useAuth } from "./../context/AuthContext";
import { postData } from "../utils/ApiService";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const { username } = useAuth();

    const [registerUsername, setRegisterUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `${process.env.REACT_APP_BACKEND_URL}/api/User/register`;
        const data = {
            username: registerUsername,
            password: password,
            email: email
        };

        const responseData = await postData(url, data);

        if(responseData) {
            navigateTo("/");
        }
    }

    if(username) {
        return (
            <div className="d-flex justify-content-center mt-4">
                <h1>You can't register because you are logged in</h1>
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center mt-5">

                <div className="border rounded p-4">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" 
                                className="form-control mb-2" 
                                id="username"
                                placeholder="Enter your username"
                                value={registerUsername}
                                onChange={(e) => setRegisterUsername(e.target.value)} />

                        <label htmlFor="email">Email address</label>
                        <input type="email" 
                                className="form-control mb-2" 
                                id="email"
                                placeholder="Enter your email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password">Password</label>
                        <input type="password" 
                                className="form-control mb-2" 
                                id="password"
                                placeholder="Enter your password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                        <div className="d-flex justify-content-center">
                            <button type="sumbit" 
                                    className="btn btn-primary mt-4"
                                    disabled={!registerUsername || !email || !password}>Register</button>
                        </div>
                    </form>
                </div>

        </div>
    );
}

export default Register;