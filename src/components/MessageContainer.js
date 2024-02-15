import { Container } from "react-bootstrap";
import Message from "./Message";
import useFetch from "../utils/useFetch";
import { useEffect, useRef, useState } from "react";

const MessageContainer = ({ messages }) => {

    const messagesEndRef = useRef(null);
    const messageContainerRef = useRef(null);

    const scrollToBottom = () => {
        if(messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {

        scrollToBottom();

    }, [messages])

    return (
        <div className={`message-container d-flex flex-column justify-content-start`} 
            style={{ height: "89vh", overflow: "auto" }}
            ref={messageContainerRef} >

            {!messages
            ?
            <h1>Loading...</h1>
            :
            messages.map((message, index) => {
                return (
                <Message key={index} 
                sender={message.sender} 
                timeSent={message.timeSent} 
                content={message.content}
                className={`${index == 0 ? " mt-auto" : ""}`} />
                );
            })
            }

            <div ref={messagesEndRef}></div>
        </div>
    );

}

export default MessageContainer;