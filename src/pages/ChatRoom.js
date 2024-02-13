import { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import MessageContainer from "../components/MessageContainer";

import "./ChatRoom.css";
import ChatBox from "../components/ChatBox";
import ChatRoomsList from "../components/ChatRoomsList";

const ChatRoom = () => {
    const [chatRoomId, setChatRoomId] = useState(null);
    const chatRoomIdRef = useRef("");

    return (
        <>
            <NavBar />

            <div className="chat-room-container">

            <ChatRoomsList setChatRoomId={setChatRoomId} />
            <ChatBox chatRoomId={chatRoomId} />

            </div>
        </>
    );
} 

export default ChatRoom;