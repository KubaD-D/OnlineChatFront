import { Container } from "react-bootstrap";
import Message from "./Message";

const MessageContainer = ({ messages }) => {

    return (
        <div className="message-container">
            {messages.map((message, index) => {
                return (
                <Message id={index} sender={message.sender} timeSent={message.timeSent} content={message.content} />
                );
            })}
        </div>
    );

}

export default MessageContainer;