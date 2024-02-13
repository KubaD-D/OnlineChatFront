import { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Form, Button } from "react-bootstrap";
import MessageContainer from "../components/MessageContainer";

import "./ChatRoom.css";
import ChatBox from "../components/ChatBox";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatRoomSettingsBar from "../components/ChatRoomSettingsBar";

const ChatRoom = () => {
    const [chatRoomId, setChatRoomId] = useState(null);
    const chatRoomIdRef = useRef("");

    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <ChatRoomsList setChatRoomId={setChatRoomId} />
                    <ChatBox chatRoomId={chatRoomId} />
                    <ChatRoomSettingsBar chatRoomId={chatRoomId} />

            </div>
        </div>
        </>
    );
} 

export default ChatRoom;