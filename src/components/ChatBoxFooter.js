import { useState } from "react";

const ChatBoxFooter = ({ sendMessage }) => {

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
    }

    return (
        <div className="chat-box-footer">
            <div className="row">

                <form className="row" onSubmit={handleSubmit}>

                <div className="col-11">
                    <div className="message-to-send-container">
                        <input type="text" 
                                id="message-to-send" 
                                name="message-to-send" 
                                className="form-control"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>

                <div className="col-1">
                    <div className="send-message-button-container">
                        <button type="submit"
                                 id="send-message-button" 
                                 className="btn btn-primary">
                                    Send
                        </button>
                    </div>
                </div>

                </form>

            </div>
        </div>
    );
}

export default ChatBoxFooter;