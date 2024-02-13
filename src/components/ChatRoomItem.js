
const ChatRoomItem = ( {chatRoomId, setChatRoomId, chatRoomTitle} ) => {

    const handleClick = () => {
        setChatRoomId(chatRoomId);
    }

    return (
        <div className="chat-room-item" onClick={handleClick}>
            <span className="chat-room-item-title">{`${chatRoomTitle ? chatRoomTitle : "Empty title"}`}</span>
            <span className="chat-room-item-recent-message">Click to join!</span>
        </div>
    )
}

export default ChatRoomItem;