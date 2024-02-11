import { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import MessageContainer from "../components/MessageContainer";

import "./ChatRoom.css";
import ChatBox from "../components/ChatBox";

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
            <Form className="w-25" onSubmit={handleSubmit}>
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
                 <div className="chat-room-container">
                    <div className="chats-list"></div>

                    <ChatBox chatRoomId={chatRoomId} />

                 </div>
            </>
            }
        </>
    );
} 

export default ChatRoom;