
const ChatRoomSettingsBar = ({ chatRoomId }) => {

    return (
        <div className="chat-room-settings-bar col-md-2 d-flex flex-column align-items-center bg-light">

            {chatRoomId
            &&
                <>
                    <button className="chat-room-setting btn btn-primary w-50 m-3">Display members</button>
                    <button className="chat-room-setting btn btn-danger w-50 m-3">Leave</button>
                    <button className="chat-room-setting btn btn-warning text-white w-50 m-3">Rename</button>
                    <button className="chat-room-setting btn btn-success w-50 m-3">Add new member</button>
                    <button className="chat-room-setting btn btn-dark w-50 m-3">Remove chat room</button>
                </>
            }

        </div>
    );

}

export default ChatRoomSettingsBar