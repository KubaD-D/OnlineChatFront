import { Button, Container, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(username, password);
            if(response) {
                navigateTo("/");
            } 
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="border rounded p-4">

                <form onSubmit={handleSubmit}>

                    <label htmlFor="username">Username</label>
                    <input type="text"
                            className="form-control mb-2"
                            id="username"
                            placeholder="Enter your username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password"
                            className="form-control mb-2"
                            id="password"
                            placeholder="Enter your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                    <div className="d-flex justify-content-center">
                        <button type="submit"
                                className="btn btn-primary mt-4"
                                disabled={!username && !password}>Log in</button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default Login;