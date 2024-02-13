import { Form } from "react-bootstrap";

const ChatBoxFooter = () => {

    return (
        <div className="chat-box-footer">

            <div className="message-to-send-container">
                <input type="text" id="message-to-send" name="message-to-send" />
            </div>

            <div className="send-message-button-container">
                <button type="button" id="send-message-button" className="btn btn-primary">Send</button>
            </div>

        </div>
    );
}

export default ChatBoxFooter;