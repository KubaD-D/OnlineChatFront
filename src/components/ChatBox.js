import { useState, useEffect } from "react";
import MessageContainer from "./MessageContainer";
import ChatBoxFooter from "./ChatBoxFooter";
import useFetch from "../utils/useFetch"
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { getData, postData } from "../utils/ApiService";

const ChatBox = ({ chatRoomId }) => {

    //const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`, !chatRoomId);
    const [messages, setMessages] = useState([]);
    const [connection, setConnection] = useState();

    useEffect(() => {

        const getMessages = async () => {
            if(chatRoomId) {
                const messages = await getData(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`);
                console.log(messages);
                setMessages(messages);
            }
        }

        getMessages();
        joinRoom();

    }, [chatRoomId])

    const sendMessage = async (messageToSend) => {

        // through signalr
        if(connection) {
            try{
                await connection.invoke("SendMessage", { chatRoomId, messageToSend });
            } catch(err) {
                console.error(err);
            }
        }

        // through api
        const apiData = await postData(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/send-message`, { content: messageToSend });
        const newMessage = apiData.newMessage;

        console.log(newMessage);

        if(newMessage) {
            setMessages([...messages, newMessage]);
        }

    }

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

            <MessageContainer messages={messages} />
            <ChatBoxFooter sendMessage={sendMessage} />
            
        </div>
    );
}

export default ChatBox;