import { useState, useEffect } from "react";
import MessageContainer from "./MessageContainer";
import ChatBoxFooter from "./ChatBoxFooter";

const ChatBox = ({ chatRoomId }) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        fetchMessages();

    }, [chatRoomId])

    const fetchMessages = async () => {
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
            setMessages(data);

        } catch(error) {
            console.error("Error fetching messages", error);
        }

    }


    return (
        <div className="chat-box">
            <MessageContainer messages={messages} />
            <ChatBoxFooter />
        </div>
    );
}

export default ChatBox;