
const ChatRoomItem = ( {chatRoomId} ) => {

    return (
        <div className="chat-room-item">
            <span className="chat-room-item-title">{chatRoomId}</span>
            <span className="chat-room-item-recent-message">Recent message WIP</span>
        </div>
    )
}

export default ChatRoomItem;