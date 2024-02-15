import { useState, useRef, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatRoomSettingsBar from "../components/ChatRoomSettingsBar";

const ChatRoom = () => {
    const [chatRoomId, setChatRoomId] = useState(null);
    const [chatRoomTitle, setChatRoomTitle] = useState("Please join a room");
    const chatRoomIdRef = useRef("");

    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <h3 className="text-center bg-light m-0">{chatRoomTitle}</h3>
                    <ChatRoomsList setChatRoomId={setChatRoomId} setChatRoomTitle={setChatRoomTitle} />
                    <ChatBox chatRoomId={chatRoomId} />
                    <ChatRoomSettingsBar chatRoomId={chatRoomId} />

            </div>
        </div>
        </>
    );
} 

export default ChatRoom;