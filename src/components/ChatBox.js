import { useState, useEffect } from "react";
import MessageContainer from "./MessageContainer";
import ChatBoxFooter from "./ChatBoxFooter";
import useFetch from "../utils/useFetch"
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const ChatBox = ({ chatRoomId }) => {

    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`, !chatRoomId);
    const [connection, setConnection] = useState();

    useEffect(() => {

        joinRoom();

    }, [chatRoomId])

    const joinRoom = async () => {
        try {

            const connection = new HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_BACKEND_URL}/chat-room-hub`)
            .configureLogging(LogLevel.Information)
            .build();

            connection.on("UserJoined", (username) => {
                console.log(`Username joined a chat hub: ${username}`);
            })

            await connection.start();
            await connection.invoke("JoinRoom", chatRoomId);

            setConnection(connection);

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="chat-box col-md-8">

            <MessageContainer messages={data} />
            <ChatBoxFooter />
            
        </div>
    );
}

export default ChatBox;