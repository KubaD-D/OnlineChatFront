import { Form } from "react-bootstrap";

const ChatBoxFooter = () => {

    return (
        <div className="chat-box-footer">
            <div className="row">

                <div className="col-11">
                    <div className="message-to-send-container">
                        <input type="text" id="message-to-send" name="message-to-send" className="form-control" />
                    </div>
                </div>

                <div className="col-1">
                    <div className="send-message-button-container">
                        <button type="button" id="send-message-button" className="btn btn-primary">Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ChatBoxFooter;