import { Container } from "react-bootstrap";
import Message from "./Message";
import useFetch from "../utils/useFetch";

const MessageContainer = ({ chatRoomId }) => {

    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/messages`, !chatRoomId);

    return (
        <div className="message-container overflow-auto d-flex flex-column justify-content-end h-75">
            {!data
            ?
            <h1>Loading...</h1>
            :
            data.map((message, index) => {
                return (
                <Message id={index} sender={message.sender} timeSent={message.timeSent} content={message.content} />
                );
            })
            }
            
        </div>
    );

}

export default MessageContainer;