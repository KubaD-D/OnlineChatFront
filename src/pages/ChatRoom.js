import { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { Form, Button } from "react-bootstrap";

const ChatRoom = ({username}) => {
    const [messages, setMessages] = useState([]);
    const [chatRoomId, setChatRoomId] = useState(null);
    const chatRoomIdRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setChatRoomId(chatRoomIdRef.current.value);
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
            <h1>{chatRoomId}</h1>
            }
            

            <h1>{username}</h1>
        </>
    );
} 

export default ChatRoom;