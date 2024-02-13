
const ChatRoomSettingsBar = ({ chatRoomId }) => {

    return (
        <div className="chat-room-settings-bar">

            {chatRoomId
            &&
                <>
                    <button className="chat-room-setting btn btn-primary">Display members</button>
                    <button className="chat-room-setting btn btn-danger">Leave</button>
                    <button className="chat-room-setting btn btn-warning text-white">Rename</button>
                    <button className="chat-room-setting btn btn-success">Add new member</button>
                    <button className="chat-room-setting btn btn-dark">Remove chat room</button>
                </>
            }

        </div>
    );

}

export default ChatRoomSettingsBar