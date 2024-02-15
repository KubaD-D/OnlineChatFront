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
        <>
            <Container className="d-flex justify-content-center">

                <Form className="w-25 border p-3 mt-5" onSubmit={e => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                         type="text" 
                         placeholder="Enter your login"
                         value={username}
                         onChange={e => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant={`primary${!username || !password ? " disabled" : ""}`} type="submit">Log in</Button>
                    </div>
                </Form>

            </Container>
        </>
    );
}

export default Login;