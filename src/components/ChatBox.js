import { useState, useEffect, useRef } from "react";
import MessageContainer from "./MessageContainer";
import ChatBoxFooter from "./ChatBoxFooter";
import useFetch from "../utils/useFetch"
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { getData, postData } from "../utils/ApiService";

const ChatBox = ({ chatRoomId }) => {

    //const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`, !chatRoomId);
    const [messages, setMessages] = useState([]);
    const [connection, setConnection] = useState();
    const prevChatRoomIdRef = useRef(null);

    useEffect(() => {

        leaveRoom(prevChatRoomIdRef.current);
        prevChatRoomIdRef.current = chatRoomId;

        const getMessages = async () => {
            if(chatRoomId) {
                const messages = await getData(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`);
                //console.log(messages);
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
                await connection.invoke("SendMessage", chatRoomId, messageToSend );
            } catch(err) {
                console.error(err);
            }
        }

        // through api
        const apiData = await postData(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/send-message`, { content: messageToSend });
        const newMessage = apiData.newMessage;

    }

    const leaveRoom = async (id) => {
        try {
            if(connection && id) {
                await connection.invoke("LeaveRoom", id);
            }

        } catch(err) {
            console.error(err);
        }
    }

    const joinRoom = async () => {
        try {
            
            if(!connection) {
                const connection = new HubConnectionBuilder()
                .withUrl(`${process.env.REACT_APP_BACKEND_URL}/chat-room-hub`)
                .configureLogging(LogLevel.Information)
                .build();
            

                connection.on("UserJoined", (username, connectionId, crId) => {
                    //console.log(`Username joined a chat hub: ${username}`);
                })

                connection.on("ReceiveMessage", (newMessage) => {

                    if(newMessage) {
                        setMessages(prevMessages => [...prevMessages, newMessage]);
                    }

                });

                await connection.start();
                setConnection(connection);

            }

            await connection.invoke("JoinRoom", chatRoomId);

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