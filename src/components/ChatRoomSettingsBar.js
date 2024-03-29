import { useAuth } from "../context/AuthContext";
import {  fetchData } from "../utils/ApiService";
import {  useRef } from "react";

const ChatRoomSettingsBar = ({ chatRoomId, chatRoomOwner, setModalTitle, setModalChildren, setIsModalActive, handleChatRoomDelete }) => {

    const { username } = useAuth();
    const newNameRef = useRef(null);
    const newUserRef = useRef(null);

    const handleDeleteMember = async (member) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/remove-user`;

        const response = await fetchData(url, "DELETE", {username: member}, false);

        if(response && response.ok) {
            setIsModalActive(false);
        }
    }

    const handleRemove = async () => {

        const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}`;

        const response = await fetchData(url, "DELETE", {}, false);

        if(response && response.ok) {
            setIsModalActive(false);
            handleChatRoomDelete();
        }

    }

    const handleLeave = async () => {

        const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/leave`;
        
        const response= await fetchData(url, "DELETE", {}, false);

        if(response && response.ok) {
            setIsModalActive(false);
            handleChatRoomDelete()
        }

    }

    const handleRename = async () => {
        
        if(newNameRef.current && newNameRef.current.value) {
            const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/rename`;

            const response = await fetchData(url, "PATCH", {newTitle: newNameRef.current.value}, false);

            if(response && response.ok) {
                setIsModalActive(false);
                handleChatRoomDelete()
            }
        }

    }

    const handleAddUser = async () => {

        if(newUserRef.current && newUserRef.current.value) {
            const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/add-user`;

            const response = await fetchData(url, "PUT", {username: newUserRef.current.value}, false);

            if(response && response.ok) {
                setIsModalActive(false);
            }
        }

    }

    const handleClick = async (e) => {

        switch(e.target.name) {
            case "display-members":
                const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/get-users`;

                const members = await fetchData(url, "GET");

                setModalTitle("Chat room members");

                setModalChildren(
                    <div className="users w-100">
                    {members.map(member => {
                        return (
                            <div className="user-item w-100 d-flex justify-content-between mt-2">
                                <span>{member}</span>
                                <button className="btn btn-danger ml-auto" onClick={() => handleDeleteMember(member)} 
                                disabled={username !== chatRoomOwner} >Delete</button>
                            </div>
                        );
                    })}
                    </div>
                );

                setIsModalActive(true);
            break;

            case "leave":
                setModalTitle("Are you sure you want to leave this chat room?");

                setModalChildren(
                    <div className="options-outer w-100 d-flex justify-content-center">
                    <div className="options-inner w-75 d-flex justify-content-between">
                        <button className="btn btn-primary px-5" onClick={handleLeave}>Yes</button>
                        <button className="btn btn-danger px-5" onClick={() => setIsModalActive(false)}>No</button>
                    </div>
                </div>
                );

                setIsModalActive(true);
            break;

            case "rename":
                setModalTitle("Set a new name for the chat room")

                setModalChildren(
                    <div className="d-flex flex-column w-100">

                        <input 
                        type="text" 
                        id="chat-room-name" 
                        name="chat-room-name" 
                        className="form-control w-100" 
                        placeholder="Type new chat room name..."
                        ref={newNameRef} />

                        <div className="d-flex justify-content-center w-100">
                            <button className="btn btn-success mt-3" onClick={handleRename}>Confirm new name</button>
                        </div>

                    </div>
                );

                setIsModalActive(true);
            break;

            case "add-user":
                
                setModalTitle("Add a new user to the chat room");

                setModalChildren(
                    <div className="d-flex flex-column w-100">

                        <input 
                        type="text" 
                        id="chat-room-name" 
                        name="chat-room-name" 
                        className="form-control w-100" 
                        placeholder="Type new chat room name..."
                        ref={newUserRef} />

                        <div className="d-flex justify-content-center w-100">
                            <button className="btn btn-success mt-3" onClick={handleAddUser}>Confirm</button>
                        </div>

                    </div>
                );

                setIsModalActive(true);

            break;

            case "remove":
                setModalTitle("Are you sure you want to delete this chat room?");

                setModalChildren(
                    <div className="options-outer w-100 d-flex justify-content-center">
                        <button className="btn btn-danger px-5" onClick={handleRemove}>Remove</button>
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
                     className="chat-room-setting btn btn-primary text-white w-50 m-3"
                     name="display-members"
                     onClick={handleClick}>
                        Display members
                    </button>

                    {username === chatRoomOwner ||
                        <button
                        className="chat-room-setting btn btn-danger text-white w-50 m-3"
                        name="leave"
                        onClick={handleClick} >
                            Leave
                    </button>
                    }

                    {username !== chatRoomOwner ||
                        <button
                        className="chat-room-setting btn btn-warning text-white w-50 m-3"
                        name="rename"
                        onClick={handleClick} >
                            Rename
                        </button>
                    }

                    {username !== chatRoomOwner ||
                        <button
                        className="chat-room-setting btn btn-success text-white w-50 m-3"
                        name="add-user"
                        onClick={handleClick} >
                            Add a user
                        </button>
                    }

                    {username !== chatRoomOwner ||
                        <button
                        className="chat-room-setting btn btn-dark text-white w-50 m-3"
                        name="remove"
                        onClick={handleClick} >
                            Remove chat room
                        </button>
                    }
                </>
            }

        </div>
    );

}

export default ChatRoomSettingsBar