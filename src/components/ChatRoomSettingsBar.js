import { getData } from "../utils/ApiService";
import { deleteData } from "../utils/ApiService";

const ChatRoomSettingsBar = ({ chatRoomId, setModalTitle, setModalChildren, setIsModalActive }) => {

    const handleDeleteMember = async (member) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/remove-user`;

        const responseData = await deleteData(url, {username: member});

        if(responseData) {
            setIsModalActive(false);
        }
    }

    const handleRemove = async (isConfirmed) => {

        if(isConfirmed) {
            const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}`;

            const responseData = await deleteData(url);

            if(responseData) {
                setIsModalActive(false);
            }
            
        } else {
            setIsModalActive(false);
        }

    }

    const handleClick = async (e) => {

        switch(e.target.name) {
            case "display-members":
                const members = await getData(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/get-users`);

                setModalTitle("Chat room members");

                setModalChildren(
                    <div className="users w-100">
                    {members.map(member => {
                        return (
                            <div className="user-item w-100 d-flex justify-content-between mt-2">
                                <span>{member}</span>
                                <button className="btn btn-danger ml-auto" onClick={() => handleDeleteMember(member)} >Delete</button>
                            </div>
                        );
                    })}
                    </div>
                );

                setIsModalActive(true);
            break;

            case "leave":

            break;

            case "rename":

            break;

            case "manage-members":

            break;

            case "remove":
                setModalTitle("Are you sure you want to delete this chat room?");

                setModalChildren(
                    <div className="options-outer w-100 d-flex justify-content-center">
                        <div className="options-inner w-75 d-flex justify-content-between">
                            <button className="btn btn-primary px-5" onClick={() => handleRemove(true)}>Yes</button>
                            <button className="btn btn-danger px-5" onClick={() => handleRemove(false)}>No</button>
                        </div>
                    </div>
                );

                setIsModalActive(true);
            break;
                    
            default:
                console.error("Error in chat room settings bar, button name does not exist!");
        }

    }

    return (
        <div className="chat-room-settings-bar col-md-2 d-flex flex-column align-items-center bg-light">

            {chatRoomId
            &&
                <>
                    <button
                     className="chat-room-setting btn btn-info text-white w-50 m-3"
                     name="display-members"
                     onClick={handleClick}>
                        Display members
                    </button>

                    <button
                     className="chat-room-setting btn btn-danger text-white w-50 m-3"
                     name="leave"
                     onClick={handleClick}>
                        Leave
                    </button>

                    <button
                     className="chat-room-setting btn btn-warning text-white w-50 m-3"
                     name="rename"
                     onClick={handleClick}>
                        Rename
                    </button>

                    <button
                     className="chat-room-setting btn btn-success text-white w-50 m-3"
                     name="manage-members"
                     onClick={handleClick}>
                        Manage members
                    </button>

                    <button
                     className="chat-room-setting btn btn-dark text-white w-50 m-3"
                     name="remove"
                     onClick={handleClick}>
                        Remove chat room
                    </button>
                </>
            }

        </div>
    );

}

export default ChatRoomSettingsBar