import { Container } from "react-bootstrap";
import Message from "./Message";
import useFetch from "../utils/useFetch";

const MessageContainer = ({ messages }) => {

    return (
        <div className="message-container overflow-auto d-flex flex-column justify-content-end" style={{ height: "85vh" }}>
            {!messages
            ?
            <h1>Loading...</h1>
            :
            messages.map((message, index) => {
                return (
                <Message key={index} sender={message.sender} timeSent={message.timeSent} content={message.content} />
                );
            })
            }
            
        </div>
    );

}

export default MessageContainer;