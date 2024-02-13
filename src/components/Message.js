import { useAuth } from "../context/AuthContext";

const Message = ({ sender, timeSent, content }) => {

    const { username } = useAuth();

    return (
        <div className="message-row">
            <div className={`message-item p-2 w-25 d-flex flex-column ${username === sender ? " float-end" : ""}`}>
                <div className="message-top d-flex justify-content-between">
                    <span className="sender fs-6">{sender}</span>
                    <span className="time-sent fs-6">{timeSent}</span>
                </div>
                <div className={`message-content fs-5 p-1 text-white rounded${username === sender ? " bg-primary" : " bg-secondary"}`}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Message