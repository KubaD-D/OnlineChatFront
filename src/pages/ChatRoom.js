import { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import MessageBox from "../components/MessageBox";

const ChatRoom = ({username}) => {
    const [messages, setMessages] = useState([]);
    const [chatRoomId, setChatRoomId] = useState(null);
    const chatRoomIdRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setChatRoomId(chatRoomIdRef.current.value);
    }

    useEffect(() => {

        fetchMessages();

    }, [chatRoomId])

    const fetchMessages = async () => {
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNzA3NTkwNDM1LCJleHAiOjE3MDc1OTQwMzUsImlhdCI6MTcwNzU5MDQzNSwiaXNzIjoib25saW5lLWNoYXQtYmFjayIsImF1ZCI6Im9ubGluZS1jaGF0LWZyb250In0.XHe1NMk8JtUTLozSLZndz6mqD8E0-S3UtRmb8XsEgPw";

        try {

            /*
            if(!token) {
                throw new Error("No JWT token fount (fetchMessages)");
            }
            */

            const headers = {
                //"Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`, {
                headers: headers,
                credentials: "include"
            });

            if(!response.ok) {
                throw new Error("Failed to fetch messages");
            }

            console.log(response);

            const data = await response.json();

            console.log(data);
            
            setMessages(data);
        } catch(error) {
            console.error("Error fetching messages", error);
        }

    }

    return (
        <>
            <NavBar />
            {chatRoomId == null
            ?
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="chatRoomId">
                    <Form.Label>Chat Room ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Chat Room Id" ref={chatRoomIdRef} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            :
            <>
                <h1>{chatRoomId}</h1>
                <MessageBox messages={messages} />
            </>
            }
            

            <h1>{username}</h1>
        </>
    );
} 

export default ChatRoom;