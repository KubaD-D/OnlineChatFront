import { Button, Container, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

    }

    return (
        <>
            <NavBar />

            <Container className="d-flex justify-content-center">

                <Form className="w-25 border p-3 mt-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                         type="text" 
                         placeholder="Enter your login"
                         value={login}
                         onChange={e => setLogin(e.target.value)} />
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
                        <Button variant={`primary${!login || !password ? " disabled" : ""}`} type="submit">Log in</Button>
                    </div>
                </Form>

            </Container>
        </>
    );
}

export default Login;