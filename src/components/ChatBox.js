import { useState, useEffect } from "react";
import MessageContainer from "./MessageContainer";
import ChatBoxFooter from "./ChatBoxFooter";

const ChatBox = ({ chatRoomId }) => {

    return (
        <div className="chat-box">
            <MessageContainer chatRoomId={chatRoomId} />
            <ChatBoxFooter />
        </div>
    );
}

export default ChatBox;