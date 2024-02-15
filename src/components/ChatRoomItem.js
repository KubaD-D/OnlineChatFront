
const ChatRoomItem = ( {chatRoomId, setChatRoomId, chatRoomTitle, setChatRoomTitle} ) => {

    const handleClick = () => {
        setChatRoomId(chatRoomId);
        
        if(chatRoomTitle) {
            setChatRoomTitle(chatRoomTitle);
        } else {
            setChatRoomTitle("Empty title");
        }
        
    }

    return (
        <div className="chat-room-item btn btn-primary m-2 d-flex flex-wrap" onClick={handleClick}>
            <span className="chat-room-item-title w-100 h4">{`${chatRoomTitle ? chatRoomTitle : "Empty title"}`}</span>
            <span className="chat-room-item-recent-message w-100">Click to join!</span>
        </div>
    )
}

export default ChatRoomItem;