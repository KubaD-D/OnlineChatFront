import { useAuth } from "../context/AuthContext";

const Message = ({ sender, timeSent, content }) => {

    const { username } = useAuth();

    return (
        <div className="message-row">
            <div className={`message-item${username !== sender ? " stranger" : ""}`}>
                <div className="message-top">
                    <span className="sender">{sender}</span>
                    <span className="time-sent">{timeSent}</span>
                </div>
                <div className="message-content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Message