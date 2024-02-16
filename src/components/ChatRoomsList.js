import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { postData } from "../utils/ApiService";
import useFetch from "../utils/useFetch";
import ChatRoomItem from "./ChatRoomItem";

const ChatRoomsList = ({ setChatRoomId, setChatRoomTitle, toggleChatListRefresh, setToggleChatListRefresh, setModalTitle, setModalChildren, setIsModalActive }) => {
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom`);

    const { username } = useAuth();

    const titleRef = useRef(null);

    const handleCreateRoom = async () => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom`;
        const title = titleRef.current.value;

        await postData(url, {title});

        setToggleChatListRefresh(!toggleChatListRefresh);
        setIsModalActive(false);
    }

    const handleClick = () => {

        setModalTitle("Choose a title for the new chat room");

        setModalChildren(
            <div className="d-flex flex-wrap w-100">
                <input type="text" className="form-control w-100" placeholder="Enter a title..." ref={titleRef} />
                <div className="d-flex w-100 justify-content-center">
                    <button className="btn btn-success mt-3" onClick={handleCreateRoom}>Confirm</button>
                </div>
            </div>
        );

        setIsModalActive(true);
    }

    if(!data) {
        return (
            <div className="chat-rooms-list col-md-2 bg-light d-flex flex-column">

            </div>
        )
    }

    return (
        <div className="chat-rooms-list col-md-2 bg-light d-flex flex-column" style={{ height: "90vh", overflow: "auto" }}>
            
            {username &&
                <div className="chat-room-item btn btn-primary d-flex flex-wrap" onClick={handleClick}>
                    <span className="chat-room-item-title w-100 h4">Create new chat room</span>
                </div>
            }

            {data.map((chatRoom, index) => {
                return (
                <ChatRoomItem key={index} chatRoomId={chatRoom.id} setChatRoomId={setChatRoomId} chatRoomTitle={chatRoom.title} setChatRoomTitle={setChatRoomTitle} />
                );
            })}
        </div>
    );
}

export default ChatRoomsList;