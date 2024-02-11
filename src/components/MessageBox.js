import { Container } from "react-bootstrap";
import "./MessageBox.css";

const MessageBox = ({ messages }) => {
    const username = "Sender 2"

    return (
        <Container className="d-flex justify-content-center">
            <div class="message-box border rounded p-3 w-75">

                {messages.map((message, index) => (
                    
                    <div key={index} className="message-row w-100">
                        <div className={`message w-25${username === message.sender ? " current-user" : ""}`}>
                            <div className="message-sender">
                                {message.sender}
                            </div>
                            <div className="message-content p-1 rounded">
                                {message.content}
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </Container>
    );

}

export default MessageBox;