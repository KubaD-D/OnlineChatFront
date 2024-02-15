import { useState, useRef, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatRoomSettingsBar from "../components/ChatRoomSettingsBar";
import { Modal, ModalBody } from "react-bootstrap";

const ChatRoom = () => {
    const [chatRoomId, setChatRoomId] = useState(null);
    const [chatRoomTitle, setChatRoomTitle] = useState("Please join a room");
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalChildren, setModalChildren] = useState("");
    const [toggleChatListRefresh, setToggleChatListRefresh] = useState(false);
    const chatRoomIdRef = useRef("");

    const handleChatRoomDelete = () => {
        setToggleChatListRefresh(!toggleChatListRefresh);
        setChatRoomTitle("Please join a room");
        setChatRoomId(null);
    }

    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <h3 className="text-center bg-light m-0">{chatRoomTitle}</h3>
                    <ChatRoomsList 
                        key={toggleChatListRefresh}
                        setChatRoomId={setChatRoomId} 
                        setChatRoomTitle={setChatRoomTitle} />
                    <ChatBox chatRoomId={chatRoomId} />
                    <ChatRoomSettingsBar 
                        chatRoomId={chatRoomId} 
                        setModalTitle={setModalTitle} 
                        setModalChildren={setModalChildren} 
                        setIsModalActive={setIsModalActive}
                        handleChatRoomDelete={handleChatRoomDelete}/>

                </div>
            </div>


            <Modal show={isModalActive} onHide={() => setIsModalActive(false)} animation={false} >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>

                <ModalBody className="d-flex justify-content-between ">{modalChildren}</ModalBody>

            </Modal>
        </>
    );
} 

export default ChatRoom;